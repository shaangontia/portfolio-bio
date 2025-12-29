
import type { SxProps, Theme } from '@mui/material';

export const aboutStyles = {
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

    text: {
        mb: 2,
        whiteSpace: 'pre-line',
    } as SxProps<Theme>,
};
