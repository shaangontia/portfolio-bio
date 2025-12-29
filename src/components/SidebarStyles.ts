
import type { SxProps, Theme } from '@mui/material';

export const sidebarStyles = {
    container: {
        position: { lg: 'sticky' },
        top: { lg: 0 },
        maxHeight: { lg: '100vh' },
        width: { lg: '48%' },
        py: { xs: 6, lg: '96px' },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    } as SxProps<Theme>,

    name: {
        color: '#e2e8f0',
        fontSize: { xs: '40px', md: '48px' },
        fontWeight: 700,
        letterSpacing: '-1.2px',
        lineHeight: 1,
        mb: '12px',
    } as SxProps<Theme>,

    tagline: {
        color: '#e2e8f0',
        fontSize: '20px',
        fontWeight: 500,
        letterSpacing: '-0.5px',
        mb: '16px',
    } as SxProps<Theme>,

    bio: {
        maxWidth: '320px',
        lineHeight: 1.5,
        color: '#94a3b8',
        fontSize: '16px',
    } as SxProps<Theme>,

    nav: {
        display: { xs: 'none', lg: 'block' },
    } as SxProps<Theme>,

    navLink: {
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        width: 'fit-content',
        padding: '12px 0',
    } as React.CSSProperties,

    getNavIndicator: (isActive: boolean): SxProps<Theme> => ({
        width: isActive ? '64px' : '32px',
        height: '1px',
        bgcolor: isActive ? '#e2e8f0' : '#94a3b8',
        mr: '16px',
        transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
    }),

    getNavText: (isActive: boolean): SxProps<Theme> => ({
        color: isActive ? '#e2e8f0' : '#94a3b8',
        fontWeight: 700,
        fontSize: '12px',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
        '&:hover': { color: '#e2e8f0' },
    }),

    socialContainer: {
        mt: { xs: 4, lg: 0 },
        listStyle: 'none',
        p: 0,
        '& .MuiIconButton-root': {
            color: '#94a3b8',
            padding: '8px',
            transition: 'color 0.25s ease',
            '&:hover': {
                color: '#e2e8f0',
                backgroundColor: 'transparent',
            },
        },
    } as SxProps<Theme>,

    socialIcon: {
        fontSize: '24px',
    } as SxProps<Theme>,
};
