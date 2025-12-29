import { Box } from '@mui/material';
import { footerStyles } from './FooterStyles';

const Footer = () => {
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
    </Box>
  );
};

export default Footer;
