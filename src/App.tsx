
import { useEffect, useState, useCallback, memo } from 'react';
import { Box, CssBaseline, ThemeProvider, Link } from '@mui/material';
import { Provider } from 'react-redux';
import { store } from './store';
import { theme } from './theme';
import { appStyles } from './AppStyles';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import AdminPanel from './components/AdminPanel';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Education from './components/sections/Education';
import Projects from './components/sections/Projects';
import Publications from './components/sections/Publications';

// Memoized spotlight component to prevent unnecessary re-renders
const MouseSpotlight = memo(() => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  return (
    <Box
      aria-hidden="true"
      sx={{
        ...appStyles.spotlight,
        background: appStyles.getSpotlightBackground(position.x, position.y),
      }}
    />
  );
});

MouseSpotlight.displayName = 'MouseSpotlight';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        {/* Skip to content link for accessibility */}
        <Link
          href="#content"
          sx={{
            position: 'absolute',
            left: '-9999px',
            zIndex: 999,
            padding: '1rem',
            backgroundColor: '#0f172a',
            color: '#64ffda',
            textDecoration: 'underline',
            '&:focus': {
              left: '1rem',
              top: '1rem',
            },
          }}
        >
          Skip to Content
        </Link>

        <MouseSpotlight />

        <Box sx={appStyles.container}>
          <Box sx={appStyles.flexContainer}>
            <Sidebar />

            <Box component="main" id="content" sx={appStyles.main}>
              <About />
              <Experience />
              <Education />
              <Projects />
              <Publications />
              <Footer />
            </Box>
          </Box>
        </Box>

        {/* Admin Panel - Only visible in development or with admin access */}
        <AdminPanel />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
