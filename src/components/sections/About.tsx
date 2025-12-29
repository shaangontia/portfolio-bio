
import { memo } from 'react';
import { Box, Typography } from '@mui/material';
import { bio } from '../../data';
import { aboutStyles } from './AboutStyles';

const About = memo(() => {
    return (
        <Box id="about" component="section" sx={aboutStyles.section}>
            <Typography variant="h6" sx={aboutStyles.heading}>
                About
            </Typography>
            <Typography variant="body1" sx={aboutStyles.text}>
                {bio.about}
            </Typography>
        </Box>
    );
});

About.displayName = 'About';

export default About;
