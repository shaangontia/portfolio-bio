import type { SxProps, Theme } from '@mui/material';

export const footerStyles = {
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
