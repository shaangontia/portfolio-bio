
import { memo } from 'react';
import { Box, Typography, Stack, Card, CardContent, Link } from '@mui/material';
import { experiences } from '../../data';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { experienceStyles } from './ExperienceStyles';

const Experience = memo(() => {
    return (
        <Box id="experience" component="section" aria-labelledby="experience-heading" sx={experienceStyles.section}>
            <Typography id="experience-heading" variant="h6" component="h2" sx={experienceStyles.heading}>
                Experience
            </Typography>

            <Stack component="ol" role="list" spacing={4} sx={{ listStyle: 'none', p: 0, m: 0 }} aria-label="Professional experience timeline">
                {experiences.map((exp) => (
                    <Box component="li" key={`${exp.company}-${exp.role}`}>
                        <Card elevation={0} sx={experienceStyles.card}>
                            <CardContent sx={experienceStyles.cardContent}>
                                <Typography
                                    variant="caption"
                                    component="time"
                                    sx={experienceStyles.dateLabel}
                                >
                                    {exp.date}
                                </Typography>

                                <Box>
                                    <Typography variant="h6" component="h3" sx={experienceStyles.roleTitle}>
                                        {exp.url !== '#' ? (
                                            <Link
                                                href={exp.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                underline="none"
                                                aria-label={`${exp.role} at ${exp.company} - Visit company website (opens in new tab)`}
                                                title={`Visit ${exp.company} website`}
                                                sx={{ color: 'inherit', '&:hover': { color: 'primary.main' } }}
                                            >
                                                {exp.role} • {exp.company}
                                                <OpenInNewIcon sx={{ fontSize: 14, ml: 0.5 }} aria-hidden="true" />
                                            </Link>
                                        ) : (
                                            <>{exp.role} • {exp.company}</>
                                        )}
                                    </Typography>

                                    <Stack component="ul" role="list" spacing={1} sx={{ mb: 2, listStyle: 'none', p: 0, m: 0 }} aria-label={`Responsibilities at ${exp.company}`}>
                                        {exp.description.map((desc, i) => (
                                            <Typography
                                                key={i}
                                                component="li"
                                                variant="body2"
                                                sx={experienceStyles.description}
                                            >
                                                • {desc}
                                            </Typography>
                                        ))}
                                    </Stack>
                                </Box>
                            </CardContent>
                        </Card>
                    </Box>
                ))}
            </Stack>
        </Box>
    );
});

Experience.displayName = 'Experience';

export default Experience;
