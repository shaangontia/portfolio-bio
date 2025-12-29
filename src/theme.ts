
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#64ffda', // Green accent
        },
        background: {
            default: '#0f172a', // Navy
            paper: '#1e293b', // Light Navy
        },
        text: {
            primary: '#e2e8f0', // Lightest Slate
            secondary: '#94a3b8', // Slate
        },
    },
    typography: {
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
        h1: {
            fontWeight: 700,
            color: '#e2e8f0',
        },
        h2: {
            fontWeight: 500,
            color: '#e2e8f0',
        },
        h3: {
            fontWeight: 600,
            color: '#e2e8f0',
        },
        body1: {
            color: '#94a3b8',
            fontSize: '16px',
            lineHeight: 1.5,
        },
        body2: {
            color: '#94a3b8',
            fontSize: '14px',
            lineHeight: 1.5,
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    backgroundColor: '#0f172a',
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    borderRadius: '4px',
                    color: '#64ffda',
                    borderColor: '#64ffda',
                    padding: '12px 16px',
                    '&:hover': {
                        backgroundColor: 'rgba(100, 255, 218, 0.1)',
                        borderColor: '#64ffda',
                    },
                },
                outlined: {
                    border: '1px solid #64ffda',
                }
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundColor: 'transparent',
                    backgroundImage: 'none',
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    backgroundColor: 'transparent',
                    backgroundImage: 'none',
                    boxShadow: 'none',
                    transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
                    '&:hover': {
                        backgroundColor: 'rgba(30, 41, 59, 0.5)',
                        boxShadow: 'inset 0 1px 0 0 rgba(148, 163, 184, 0.1)',
                    },
                },
            },
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    backgroundColor: 'rgba(100, 255, 218, 0.1)',
                    color: '#64ffda',
                    borderRadius: '9999px',
                    fontFamily: "'Fira Code', monospace",
                    fontSize: '12px',
                    fontWeight: 500,
                    padding: '4px 8px',
                    height: 'auto',
                }
            }
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    padding: '8px',
                },
            },
        },
    },
});
