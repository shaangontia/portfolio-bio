
import type { SxProps, Theme } from '@mui/material';

export const experienceStyles = {
    section: {
        mb: { xs: 8, md: 12, lg: 16 },
    } as SxProps<Theme>,

    heading: {
        display: { md: 'none' },
        color: 'text.primary',
        fontWeight: 700,
        mb: 3,
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
    } as SxProps<Theme>,

    card: {
        bgcolor: 'transparent',
        transition: 'all 0.3s ease',
        '&:hover': {
            bgcolor: 'rgba(255, 255, 255, 0.05)',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        },
        borderRadius: 2,
    } as SxProps<Theme>,

    cardContent: {
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        p: 3,
        gap: 2,
    } as SxProps<Theme>,

    dateLabel: {
        color: 'text.secondary',
        minWidth: '120px',
        pt: 0.5,
        textTransform: 'uppercase',
        fontWeight: 600,
        fontSize: '0.75rem',
    } as SxProps<Theme>,

    roleTitle: {
        color: 'text.primary',
        fontWeight: 600,
        mb: 0.5,
        display: 'flex',
        alignItems: 'center',
        gap: 1,
    } as SxProps<Theme>,

    description: {
        color: 'text.secondary',
    } as SxProps<Theme>,
};
