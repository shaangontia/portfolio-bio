
import { useState, useCallback, memo } from 'react';
import { Box, Stack, Typography, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import { Link as ScrollLink } from 'react-scroll';
import { bio, socialLinks } from '../data';
import { sidebarStyles } from './SidebarStyles';
import DonationModal from './DonationModal';

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
    const [donationModalOpen, setDonationModalOpen] = useState(false);

    const handleSetActive = useCallback((to: string) => {
        setActiveLink(to);
    }, []);

    const handleOpenDonation = useCallback(() => {
        setDonationModalOpen(true);
    }, []);

    const handleCloseDonation = useCallback(() => {
        setDonationModalOpen(false);
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
                role="list"
                aria-label="Social media and contact links"
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
                        aria-label="Visit my GitHub profile (opens in new tab)"
                        title="GitHub"
                    >
                        <GitHubIcon sx={sidebarStyles.socialIcon} aria-hidden="true" />
                    </IconButton>
                </li>
                <li>
                    <IconButton
                        component="a"
                        href={socialLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit my LinkedIn profile (opens in new tab)"
                        title="LinkedIn"
                    >
                        <LinkedInIcon sx={sidebarStyles.socialIcon} aria-hidden="true" />
                    </IconButton>
                </li>
                <li>
                    <IconButton
                        component="a"
                        href={`mailto:${socialLinks.email}`}
                        aria-label={`Send email to ${socialLinks.email}`}
                        title="Email"
                    >
                        <EmailIcon sx={sidebarStyles.socialIcon} aria-hidden="true" />
                    </IconButton>
                </li>
                <li>
                    <IconButton
                        onClick={handleOpenDonation}
                        aria-label="Support my work - Open donation options"
                        title="Donate"
                        aria-haspopup="dialog"
                    >
                        <VolunteerActivismIcon sx={sidebarStyles.socialIcon} aria-hidden="true" />
                    </IconButton>
                </li>
            </Stack>

            <DonationModal open={donationModalOpen} onClose={handleCloseDonation} />
        </Box>
    );
});

Sidebar.displayName = 'Sidebar';

export default Sidebar;
