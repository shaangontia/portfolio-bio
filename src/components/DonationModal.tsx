import { Dialog, DialogContent, DialogTitle, IconButton, Box, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import donationQR from '../assets/donation.png';

interface DonationModalProps {
    open: boolean;
    onClose: () => void;
}

const DonationModal = ({ open, onClose }: DonationModalProps) => {
    return (
        <Dialog
            open={open}
            onClose={onClose}
            maxWidth="sm"
            fullWidth
            aria-labelledby="donation-modal-title"
            aria-describedby="donation-modal-description"
            PaperProps={{
                sx: {
                    backgroundColor: '#112240',
                    backgroundImage: 'none',
                    borderRadius: '8px',
                    border: '1px solid #233554',
                },
                role: 'dialog',
            }}
        >
            <DialogTitle
                id="donation-modal-title"
                sx={{
                    color: '#ccd6f6',
                    fontWeight: 600,
                    fontSize: '1.5rem',
                    pb: 1,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                Support My Work
                <IconButton
                    onClick={onClose}
                    aria-label="Close donation dialog"
                    title="Close"
                    sx={{
                        color: '#8892b0',
                        '&:hover': {
                            color: '#64ffda',
                        },
                    }}
                >
                    <CloseIcon aria-hidden="true" />
                </IconButton>
            </DialogTitle>
            <DialogContent>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 2,
                        py: 2,
                    }}
                >
                    <Typography
                        id="donation-modal-description"
                        sx={{
                            color: '#8892b0',
                            textAlign: 'center',
                            fontSize: '1rem',
                            mb: 1,
                        }}
                    >
                        If you find my work helpful, consider buying me a coffee! ☕
                    </Typography>
                    <Box
                        component="img"
                        src={donationQR}
                        alt="QR code for payment - Scan with your payment app to support my work"
                        role="img"
                        sx={{
                            width: '100%',
                            maxWidth: '350px',
                            height: 'auto',
                            borderRadius: '8px',
                            border: '2px solid #233554',
                            backgroundColor: '#fff',
                            padding: '16px',
                        }}
                    />
                    <Typography
                        sx={{
                            color: '#8892b0',
                            textAlign: 'center',
                            fontSize: '0.875rem',
                            fontStyle: 'italic',
                        }}
                        aria-live="polite"
                    >
                        Scan the QR code with your payment app
                    </Typography>
                </Box>
            </DialogContent>
        </Dialog>
    );
};

export default DonationModal;
