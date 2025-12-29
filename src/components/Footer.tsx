import { Box, Typography } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { footerStyles } from './FooterStyles';
import { useVisitCounter } from '../hooks/useVisitCounter';

const Footer = () => {
  const { visitCount, isLoading, error } = useVisitCounter();

  // Debug logging
  console.log('Footer render:', { visitCount, isLoading, error });

  return (
    <Box component="footer" role="contentinfo" sx={footerStyles.footer}>
      <p>
        Loosely designed in{' '}
        <span style={footerStyles.footerHighlight} aria-label="Figma design tool">Figma</span> and coded in{' '}
        <span style={footerStyles.footerHighlight} aria-label="Antigravity code editor">Antigravity</span>. Built with{' '}
        <span style={footerStyles.footerHighlight} aria-label="React framework">React</span>,{' '}
        <span style={footerStyles.footerHighlight} aria-label="TypeScript language">TypeScript</span>, and{' '}
        <span style={footerStyles.footerHighlight} aria-label="Material UI component library">Material UI</span>, deployed with{' '}
        <span style={footerStyles.footerHighlight} aria-label="Vercel hosting platform">Vercel</span>.
      </p>

      {!isLoading && !error && (
        <Box sx={footerStyles.visitCounter} role="status" aria-live="polite">
          <VisibilityIcon sx={footerStyles.visitIcon} aria-hidden="true" />
          <Typography component="span" sx={{ fontSize: 'inherit' }}>
            Total visits:{' '}
            <span style={footerStyles.visitCount} aria-label={`${visitCount} visits`}>
              {visitCount.toLocaleString()}
            </span>
          </Typography>
        </Box>
      )}

      {error && (
        <Box sx={{ ...footerStyles.visitCounter, color: '#ff6b6b' }}>
          <Typography component="span" sx={{ fontSize: '12px' }}>
            Visit counter temporarily unavailable
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default Footer;
