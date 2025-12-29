
import { memo } from 'react';
import { Box, Typography, Chip, Stack, Card, CardContent, IconButton } from '@mui/material';
import { projects } from '../../data';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import FolderIcon from '@mui/icons-material/Folder';
import { projectsStyles } from './ProjectsStyles';

const Projects = memo(() => {
    return (
        <Box id="projects" component="section" sx={projectsStyles.section}>
            <Typography variant="h6" sx={projectsStyles.heading}>
                Projects
            </Typography>

            <Stack component="ul" spacing={4} sx={{ listStyle: 'none', p: 0, m: 0 }}>
                {projects.map((project) => (
                    <Box component="li" key={project.title}>
                        <Card elevation={0} sx={projectsStyles.card}>
                            <CardContent sx={projectsStyles.cardContent}>
                                <Box sx={projectsStyles.thumbnailContainer}>
                                    <Box sx={projectsStyles.thumbnail} aria-hidden="true">
                                        <FolderIcon sx={projectsStyles.folderIcon} />
                                    </Box>
                                </Box>

                                <Box sx={{ flex: 1 }}>
                                    <Typography variant="h6" sx={projectsStyles.title}>
                                        {project.title}
                                        <IconButton
                                            component="a"
                                            size="small"
                                            href={project.links.external}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            sx={projectsStyles.linkButton}
                                            aria-label={`View ${project.title} project (opens in new tab)`}
                                        >
                                            <OpenInNewIcon fontSize="small" />
                                        </IconButton>
                                    </Typography>

                                    <Typography variant="body2" sx={projectsStyles.description}>
                                        {project.description}
                                    </Typography>

                                    <Stack
                                        component="ul"
                                        direction="row"
                                        spacing={1}
                                        flexWrap="wrap"
                                        useFlexGap
                                        sx={{ ...projectsStyles.techStack, listStyle: 'none', p: 0, m: 0 }}
                                        aria-label={`Technologies used in ${project.title}`}
                                    >
                                        {project.tech.map((tech) => (
                                            <Box component="li" key={tech}>
                                                <Chip label={tech} size="small" />
                                            </Box>
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

Projects.displayName = 'Projects';

export default Projects;
