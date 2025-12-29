
import type { SxProps, Theme } from '@mui/material';

export const publicationsStyles = {
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

    publisherLabel: {
        color: 'text.secondary',
        minWidth: '120px',
        pt: 0.5,
        fontWeight: 600,
    } as SxProps<Theme>,

    link: {
        display: 'block',
        mb: 1,
        '&:hover h6': { color: 'primary.main' },
    } as SxProps<Theme>,

    title: {
        color: 'text.primary',
        fontWeight: 600,
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        transition: 'color 0.2s',
    } as SxProps<Theme>,

    linkIcon: {
        fontSize: 16,
    } as SxProps<Theme>,

    description: {
        color: 'text.secondary',
    } as SxProps<Theme>,
};
