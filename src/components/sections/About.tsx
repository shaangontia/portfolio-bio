
import { memo } from 'react';
import { Box, Typography } from '@mui/material';
import { bio } from '../../data';
import { aboutStyles } from './AboutStyles';

const About = memo(() => {
    return (
        <Box id="about" component="section" aria-labelledby="about-heading" sx={aboutStyles.section}>
            <Typography id="about-heading" variant="h6" component="h2" sx={aboutStyles.heading}>
                About
            </Typography>
            <Typography variant="body1" component="div" sx={aboutStyles.text}>
                {bio.about}
            </Typography>
        </Box>
    );
});

About.displayName = 'About';

export default About;
