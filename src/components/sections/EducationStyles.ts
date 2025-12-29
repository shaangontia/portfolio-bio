
import type { SxProps, Theme } from '@mui/material';

export const educationStyles = {
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

    iconContainer: {
        display: { xs: 'none', sm: 'block' },
        minWidth: '40px',
        pt: 0.5,
    } as SxProps<Theme>,

    schoolIcon: {
        color: 'primary.main',
        fontSize: 30,
    } as SxProps<Theme>,

    headerRow: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        flexWrap: 'wrap',
        mb: 1,
    } as SxProps<Theme>,

    schoolName: {
        color: 'text.primary',
        fontWeight: 600,
    } as SxProps<Theme>,

    dateLabel: {
        color: 'text.secondary',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.8rem',
    } as SxProps<Theme>,

    degree: {
        color: 'text.primary',
        mb: 2,
    } as SxProps<Theme>,

    achievementsLabel: {
        color: 'text.secondary',
        fontWeight: 600,
        mb: 1,
    } as SxProps<Theme>,

    achievement: {
        color: 'text.secondary',
    } as SxProps<Theme>,
};
