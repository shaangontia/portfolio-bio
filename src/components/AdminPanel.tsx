import { useState } from 'react';
import { Box, Button, TextField, Typography, Paper, Alert } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import RefreshIcon from '@mui/icons-material/Refresh';
import EditIcon from '@mui/icons-material/Edit';

const AdminPanel = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [customValue, setCustomValue] = useState('1200');
    const [adminSecret, setAdminSecret] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSetValue = async (value?: number) => {
        if (!adminSecret) {
            setError('Please enter admin secret');
            return;
        }

        setIsLoading(true);
        setError('');
        setMessage('');

        try {
            const response = await fetch('/api/admin/reset-counter', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${adminSecret}`,
                    'Content-Type': 'application/json',
                },
                body: value !== undefined ? JSON.stringify({ value }) : undefined,
            });

            const data = await response.json();

            if (response.ok && data.success) {
                setMessage(data.message);
                setTimeout(() => window.location.reload(), 1500);
            } else {
                setError(data.message || 'Failed to update counter');
            }
        } catch (err) {
            setError('Error connecting to API');
        } finally {
            setIsLoading(false);
        }
    };

    const handleViewData = async () => {
        if (!adminSecret) {
            setError('Please enter admin secret');
            return;
        }

        setIsLoading(true);
        setError('');
        setMessage('');

        try {
            const response = await fetch('/api/admin/get-all-keys', {
                headers: {
                    'Authorization': `Bearer ${adminSecret}`,
                },
            });

            const data = await response.json();

            if (response.ok && data.success) {
                setMessage(`Current data: ${JSON.stringify(data.data, null, 2)}`);
            } else {
                setError(data.message || 'Failed to fetch data');
            }
        } catch (err) {
            setError('Error connecting to API');
        } finally {
            setIsLoading(false);
        }
    };

    if (!isVisible) {
        return (
            <Box
                sx={{
                    position: 'fixed',
                    bottom: 20,
                    right: 20,
                    zIndex: 9999,
                }}
            >
                <Button
                    variant="contained"
                    size="small"
                    onClick={() => setIsVisible(true)}
                    sx={{
                        backgroundColor: '#1a1a1a',
                        color: '#64ffda',
                        fontSize: '10px',
                        padding: '4px 8px',
                        minWidth: 'auto',
                        '&:hover': {
                            backgroundColor: '#2a2a2a',
                        },
                    }}
                >
                    Admin
                </Button>
            </Box>
        );
    }

    return (
        <Box
            sx={{
                position: 'fixed',
                bottom: 20,
                right: 20,
                zIndex: 9999,
            }}
        >
            <Paper
                elevation={8}
                sx={{
                    p: 3,
                    backgroundColor: '#112240',
                    border: '1px solid #233554',
                    minWidth: '320px',
                    maxWidth: '400px',
                }}
            >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                    <Typography variant="h6" sx={{ color: '#ccd6f6', fontSize: '1.1rem' }}>
                        Admin Panel
                    </Typography>
                    <Button
                        size="small"
                        onClick={() => setIsVisible(false)}
                        sx={{ color: '#8892b0', minWidth: 'auto', fontSize: '12px' }}
                    >
                        Close
                    </Button>
                </Box>

                <TextField
                    fullWidth
                    size="small"
                    type="password"
                    label="Admin Secret"
                    value={adminSecret}
                    onChange={(e) => setAdminSecret(e.target.value)}
                    sx={{
                        mb: 2,
                        '& .MuiInputLabel-root': { color: '#8892b0' },
                        '& .MuiOutlinedInput-root': {
                            color: '#ccd6f6',
                            '& fieldset': { borderColor: '#233554' },
                            '&:hover fieldset': { borderColor: '#64ffda' },
                            '&.Mui-focused fieldset': { borderColor: '#64ffda' },
                        },
                    }}
                />

                <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                    <TextField
                        size="small"
                        type="number"
                        label="Custom Value"
                        value={customValue}
                        onChange={(e) => setCustomValue(e.target.value)}
                        sx={{
                            flex: 1,
                            '& .MuiInputLabel-root': { color: '#8892b0' },
                            '& .MuiOutlinedInput-root': {
                                color: '#ccd6f6',
                                '& fieldset': { borderColor: '#233554' },
                                '&:hover fieldset': { borderColor: '#64ffda' },
                                '&.Mui-focused fieldset': { borderColor: '#64ffda' },
                            },
                        }}
                    />
                    <Button
                        variant="contained"
                        size="small"
                        onClick={() => handleSetValue(parseInt(customValue))}
                        disabled={isLoading}
                        startIcon={<EditIcon />}
                        sx={{
                            backgroundColor: '#64ffda',
                            color: '#0a192f',
                            '&:hover': { backgroundColor: '#52ccb8' },
                        }}
                    >
                        Set
                    </Button>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mb: 2 }}>
                    <Button
                        fullWidth
                        variant="outlined"
                        size="small"
                        onClick={() => handleSetValue(1200)}
                        disabled={isLoading}
                        sx={{
                            borderColor: '#64ffda',
                            color: '#64ffda',
                            '&:hover': { borderColor: '#52ccb8', backgroundColor: 'rgba(100, 255, 218, 0.1)' },
                        }}
                    >
                        Set to 1200
                    </Button>
                    <Button
                        fullWidth
                        variant="outlined"
                        size="small"
                        onClick={() => handleSetValue(0)}
                        disabled={isLoading}
                        startIcon={<RefreshIcon />}
                        sx={{
                            borderColor: '#8892b0',
                            color: '#8892b0',
                            '&:hover': { borderColor: '#ccd6f6', backgroundColor: 'rgba(136, 146, 176, 0.1)' },
                        }}
                    >
                        Reset to 0
                    </Button>
                    <Button
                        fullWidth
                        variant="outlined"
                        size="small"
                        onClick={handleViewData}
                        disabled={isLoading}
                        startIcon={<VisibilityIcon />}
                        sx={{
                            borderColor: '#8892b0',
                            color: '#8892b0',
                            '&:hover': { borderColor: '#ccd6f6', backgroundColor: 'rgba(136, 146, 176, 0.1)' },
                        }}
                    >
                        View Data
                    </Button>
                </Box>

                {message && (
                    <Alert severity="success" sx={{ mb: 1, fontSize: '12px' }}>
                        {message}
                    </Alert>
                )}

                {error && (
                    <Alert severity="error" sx={{ mb: 1, fontSize: '12px' }}>
                        {error}
                    </Alert>
                )}

                <Typography sx={{ color: '#8892b0', fontSize: '11px', mt: 1 }}>
                    💡 Tip: Page will reload after successful update
                </Typography>
            </Paper>
        </Box>
    );
};

export default AdminPanel;
