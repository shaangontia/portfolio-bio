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

    visitCounter: {
        mt: 2,
        pt: 2,
        borderTop: '1px solid #233554',
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        fontSize: '13px',
        color: '#64ffda',
    } as SxProps<Theme>,

    visitIcon: {
        fontSize: '16px',
        color: '#64ffda',
    } as SxProps<Theme>,

    visitCount: {
        fontWeight: 600,
        color: '#e2e8f0',
    } as React.CSSProperties,
};
