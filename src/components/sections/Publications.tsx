
import { memo } from 'react';
import { Box, Typography, Card, CardContent, Link } from '@mui/material';
import { publications } from '../../data';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { publicationsStyles } from './PublicationsStyles';

const Publications = memo(() => {
    return (
        <Box id="publications" component="section" sx={publicationsStyles.section}>
            <Typography variant="h6" sx={publicationsStyles.heading}>
                Writing
            </Typography>

            <Box component="ul" sx={{ display: 'flex', flexDirection: 'column', gap: 4, listStyle: 'none', p: 0, m: 0 }}>
                {publications.map((pub) => (
                    <Box component="li" key={pub.title}>
                        <Card elevation={0} sx={publicationsStyles.card}>
                            <CardContent sx={publicationsStyles.cardContent}>
                                <Typography variant="caption" sx={publicationsStyles.publisherLabel}>
                                    {pub.publisher}
                                </Typography>

                                <Box>
                                    <Link
                                        href={pub.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        underline="none"
                                        aria-label={`${pub.title} (opens in new tab)`}
                                        sx={publicationsStyles.link}
                                    >
                                        <Typography variant="h6" sx={publicationsStyles.title}>
                                            {pub.title}
                                            <OpenInNewIcon sx={publicationsStyles.linkIcon} aria-hidden="true" />
                                        </Typography>
                                    </Link>

                                    <Typography variant="body2" sx={publicationsStyles.description}>
                                        {pub.description}
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Box>
                ))}
            </Box>
        </Box>
    );
});

Publications.displayName = 'Publications';

export default Publications;
