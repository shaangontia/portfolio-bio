import { useState, useEffect } from 'react';

const LAST_VISIT_KEY = 'portfolio_last_visit';
const VISIT_TIMEOUT = 30 * 60 * 1000;
const API_ENDPOINT = '/api/visit-count';

interface VisitCounterResult {
    visitCount: number;
    isLoading: boolean;
    error: string | null;
}

interface ApiResponse {
    count: number;
    success: boolean;
    error?: string;
}

export const useVisitCounter = (): VisitCounterResult => {
    const [visitCount, setVisitCount] = useState<number>(0);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const trackVisit = async () => {
            try {
                const now = Date.now();
                const lastVisit = localStorage.getItem(LAST_VISIT_KEY);
                const lastVisitTime = lastVisit ? parseInt(lastVisit, 10) : 0;
                
                const shouldIncrement = now - lastVisitTime > VISIT_TIMEOUT;

                const endpoint = shouldIncrement 
                    ? `${API_ENDPOINT}?action=increment`
                    : API_ENDPOINT;

                const response = await fetch(endpoint, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data: ApiResponse = await response.json();

                if (data.success) {
                    setVisitCount(data.count);
                    
                    if (shouldIncrement) {
                        localStorage.setItem(LAST_VISIT_KEY, now.toString());
                    }
                } else {
                    throw new Error(data.error || 'Failed to fetch visit count');
                }

                setIsLoading(false);
            } catch (err) {
                console.error('Error tracking visit:', err);
                setError(err instanceof Error ? err.message : 'Unknown error');
                setVisitCount(0);
                setIsLoading(false);
            }
        };

        trackVisit();
    }, []);

    return { visitCount, isLoading, error };
};
