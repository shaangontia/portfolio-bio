import { Box } from '@mui/material';
import { footerStyles } from './FooterStyles';

const Footer = () => {
  return (
    <Box component="footer" sx={footerStyles.footer}>
      <p>
        Loosely designed in{' '}
        <span style={footerStyles.footerHighlight}>Figma</span> and coded in{' '}
        <span style={footerStyles.footerHighlight}>Antigravity</span>. Built with{' '}
        <span style={footerStyles.footerHighlight}>React</span>,{' '}
        <span style={footerStyles.footerHighlight}>TypeScript</span>, and{' '}
        <span style={footerStyles.footerHighlight}>Material UI</span>, deployed with{' '}
        <span style={footerStyles.footerHighlight}>Vercel</span>.
      </p>
    </Box>
  );
};

export default Footer;
