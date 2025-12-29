
import { memo } from 'react';
import { Box, Typography, Card, CardContent, Stack } from '@mui/material';
import { education } from '../../data';
import SchoolIcon from '@mui/icons-material/School';
import { educationStyles } from './EducationStyles';

const Education = memo(() => {
    return (
        <Box id="education" component="section" aria-labelledby="education-heading" sx={educationStyles.section}>
            <Typography id="education-heading" variant="h6" component="h2" sx={educationStyles.heading}>
                Education
            </Typography>

            <Stack component="ul" role="list" spacing={4} sx={{ listStyle: 'none', p: 0, m: 0 }} aria-label="Educational background">
                {education.map((edu) => (
                    <Box component="li" key={`${edu.school}-${edu.degree}`}>
                        <Card elevation={0} sx={educationStyles.card}>
                            <CardContent sx={educationStyles.cardContent}>
                                <Box sx={educationStyles.iconContainer} aria-hidden="true">
                                    <SchoolIcon sx={educationStyles.schoolIcon} />
                                </Box>

                                <Box sx={{ flex: 1 }}>
                                    <Box sx={educationStyles.headerRow}>
                                        <Typography variant="h6" component="h3" sx={educationStyles.schoolName}>
                                            {edu.school}
                                        </Typography>
                                        <Typography
                                            variant="caption"
                                            component="time"
                                            sx={educationStyles.dateLabel}
                                            aria-label={`Attended ${edu.date}`}
                                        >
                                            {edu.date}
                                        </Typography>
                                    </Box>

                                    <Typography variant="body1" sx={educationStyles.degree}>
                                        {edu.degree}
                                    </Typography>

                                    <Box>
                                        <Typography variant="body2" component="h4" sx={educationStyles.achievementsLabel}>
                                            Achievements:
                                        </Typography>
                                        <Stack component="ul" role="list" spacing={0.5} sx={{ listStyle: 'none', p: 0, m: 0 }} aria-label={`Achievements at ${edu.school}`}>
                                            {edu.achievements.map((achievement, i) => (
                                                <Typography
                                                    key={i}
                                                    component="li"
                                                    variant="body2"
                                                    sx={educationStyles.achievement}
                                                >
                                                    • {achievement}
                                                </Typography>
                                            ))}
                                        </Stack>
                                    </Box>
                                </Box>
                            </CardContent>
                        </Card>
                    </Box>
                ))}
            </Stack>
        </Box>
    );
});

Education.displayName = 'Education';

export default Education;
