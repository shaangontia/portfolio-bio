
import { useState, useCallback, memo } from 'react';
import { Box, Stack, Typography, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { Link as ScrollLink } from 'react-scroll';
import { bio, socialLinks } from '../data';
import { sidebarStyles } from './SidebarStyles';

// Navigation items configuration
const NAV_LINKS = [
    { name: 'About', to: 'about' },
    { name: 'Experience', to: 'experience' },
    { name: 'Education', to: 'education' },
    { name: 'Projects', to: 'projects' },
    { name: 'Publications', to: 'publications' },
] as const;

const Sidebar = memo(() => {
    const [activeLink, setActiveLink] = useState('about');

    const handleSetActive = useCallback((to: string) => {
        setActiveLink(to);
    }, []);

    return (
        <Box component="header" sx={sidebarStyles.container}>
            {/* Top Section - Name, Role, Bio */}
            <Box>
                <Typography variant="h1" sx={sidebarStyles.name}>
                    {bio.name}
                </Typography>

                <Typography variant="h2" sx={sidebarStyles.tagline}>
                    {bio.tagline}
                </Typography>

                <Typography variant="body1" sx={sidebarStyles.bio}>
                    {bio.heroText}
                </Typography>
            </Box>

            {/* Middle Section - Navigation */}
            <Box component="nav" aria-label="In-page jump links" sx={sidebarStyles.nav}>
                <Stack spacing={0}>
                    {NAV_LINKS.map((link) => (
                        <ScrollLink
                            key={link.to}
                            to={link.to}
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                            onSetActive={() => handleSetActive(link.to)}
                            style={sidebarStyles.navLink}
                        >
                            <Box
                                component="span"
                                sx={sidebarStyles.getNavIndicator(activeLink === link.to)}
                            />
                            <Typography
                                component="span"
                                sx={sidebarStyles.getNavText(activeLink === link.to)}
                            >
                                {link.name}
                            </Typography>
                        </ScrollLink>
                    ))}
                </Stack>
            </Box>

            {/* Bottom Section - Social Icons */}
            <Stack
                component="ul"
                aria-label="Social media"
                direction="row"
                spacing={2.5}
                sx={sidebarStyles.socialContainer}
            >
                <li>
                    <IconButton
                        component="a"
                        href={socialLinks.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub (opens in new tab)"
                    >
                        <GitHubIcon sx={sidebarStyles.socialIcon} />
                    </IconButton>
                </li>
                <li>
                    <IconButton
                        component="a"
                        href={socialLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn (opens in new tab)"
                    >
                        <LinkedInIcon sx={sidebarStyles.socialIcon} />
                    </IconButton>
                </li>
                <li>
                    <IconButton
                        component="a"
                        href={`mailto:${socialLinks.email}`}
                        aria-label="Send email"
                    >
                        <EmailIcon sx={sidebarStyles.socialIcon} />
                    </IconButton>
                </li>
            </Stack>
        </Box>
    );
});

Sidebar.displayName = 'Sidebar';

export default Sidebar;
