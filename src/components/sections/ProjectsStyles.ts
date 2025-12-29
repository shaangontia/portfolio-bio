
import type { SxProps, Theme } from '@mui/material';

export const projectsStyles = {
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
        flexDirection: { xs: 'column-reverse', sm: 'row' },
        p: 3,
        gap: 2,
    } as SxProps<Theme>,

    thumbnailContainer: {
        display: { xs: 'none', sm: 'block' },
        minWidth: '120px',
        pt: 0.5,
    } as SxProps<Theme>,

    thumbnail: {
        width: '80px',
        height: '50px',
        bgcolor: 'rgba(100, 255, 218, 0.1)',
        borderRadius: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    } as SxProps<Theme>,

    folderIcon: {
        color: 'primary.main',
    } as SxProps<Theme>,

    title: {
        color: 'text.primary',
        fontWeight: 600,
        mb: 1,
        display: 'flex',
        alignItems: 'center',
        gap: 1,
    } as SxProps<Theme>,

    linkButton: {
        color: 'text.primary',
        '&:hover': { color: 'primary.main' },
    } as SxProps<Theme>,

    description: {
        color: 'text.secondary',
        mb: 2,
    } as SxProps<Theme>,

    techStack: {
        mt: 2,
    } as SxProps<Theme>,
};
