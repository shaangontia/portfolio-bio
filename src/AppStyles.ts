
import type { SxProps, Theme } from '@mui/material';

export const appStyles = {
    spotlight: {
        pointerEvents: 'none',
        position: 'fixed',
        inset: 0,
        zIndex: 30,
        transition: 'background 0.3s',
    } as SxProps<Theme>,

    getSpotlightBackground: (x: number, y: number): string =>
        `radial-gradient(600px at ${x}px ${y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,

    container: {
        minHeight: '100vh',
        position: 'relative',
        maxWidth: '1400px',
        mx: 'auto',
        px: { xs: 3, sm: 6, md: 8, lg: 12 },
    } as SxProps<Theme>,

    flexContainer: {
        display: 'flex',
        flexDirection: { xs: 'column', lg: 'row' },
        justifyContent: 'space-between',
        gap: { lg: 4 },
    } as SxProps<Theme>,

    main: {
        width: { xs: '100%', lg: '52%' },
        pt: { xs: 0, lg: '96px' },
        pb: { xs: 12, lg: '96px' },
    } as SxProps<Theme>,

    footer: {
        mt: { xs: 8, lg: 16 },
        color: '#94a3b8',
        fontSize: '14px',
        lineHeight: 1.6,
        maxWidth: '500px',
    } as SxProps<Theme>,

    footerHighlight: {
        color: '#e2e8f0',
    } as React.CSSProperties,
};
