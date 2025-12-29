
import { memo } from 'react';
import { Box, Typography, Stack, Card, CardContent, Link } from '@mui/material';
import { experiences } from '../../data';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { experienceStyles } from './ExperienceStyles';

const Experience = memo(() => {
    return (
        <Box id="experience" component="section" sx={experienceStyles.section}>
            <Typography variant="h6" sx={experienceStyles.heading}>
                Experience
            </Typography>

            <Stack component="ol" spacing={4} sx={{ listStyle: 'none', p: 0, m: 0 }}>
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
                                    <Typography variant="h6" sx={experienceStyles.roleTitle}>
                                        {exp.url !== '#' ? (
                                            <Link
                                                href={exp.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                underline="none"
                                                aria-label={`${exp.role} at ${exp.company} (opens in new tab)`}
                                                sx={{ color: 'inherit', '&:hover': { color: 'primary.main' } }}
                                            >
                                                {exp.role} • {exp.company}
                                                <OpenInNewIcon sx={{ fontSize: 14, ml: 0.5 }} aria-hidden="true" />
                                            </Link>
                                        ) : (
                                            <>{exp.role} • {exp.company}</>
                                        )}
                                    </Typography>

                                    <Stack component="ul" spacing={1} sx={{ mb: 2, listStyle: 'none', p: 0, m: 0 }}>
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
