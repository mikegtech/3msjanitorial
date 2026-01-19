import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import { Box, Container, Divider, Grid, Link as MuiLink, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { BUSINESS_INFO } from '../../constants/business';

const quickLinks = [
  { label: 'Services', path: '/services' },
  { label: 'About Us', path: '/about' },
  { label: 'Reviews', path: '/reviews' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Service Area', path: '/service-area' },
  { label: 'Request a Quote', path: '/contact' },
];

const legalLinks = [
  { label: 'Privacy Policy', path: '/privacy' },
  { label: 'Terms of Service', path: '/terms' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'primary.dark',
        color: 'white',
        pt: 6,
        pb: { xs: 10, md: 4 },
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" gutterBottom fontWeight={700}>
              3MS Janitorial Services
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, opacity: 0.9 }}>
              Professional commercial cleaning services for businesses in Greenville, TX and
              surrounding Hunt County communities. Trusted, reliable, and thorough.
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <PhoneIcon fontSize="small" />
                <MuiLink
                  href={`tel:${BUSINESS_INFO.phone}`}
                  color="inherit"
                  underline="hover"
                >
                  {BUSINESS_INFO.phoneFormatted}
                </MuiLink>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <EmailIcon fontSize="small" />
                <MuiLink
                  href={`mailto:${BUSINESS_INFO.email}`}
                  color="inherit"
                  underline="hover"
                >
                  {BUSINESS_INFO.email}
                </MuiLink>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                <LocationOnIcon fontSize="small" sx={{ mt: 0.25 }} />
                <Typography variant="body2">{BUSINESS_INFO.serviceArea}</Typography>
              </Box>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Typography variant="h6" gutterBottom fontWeight={600}>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
              {quickLinks.map((link) => (
                <MuiLink
                  key={link.path}
                  component={Link}
                  to={link.path}
                  color="inherit"
                  underline="hover"
                  sx={{ opacity: 0.9, '&:hover': { opacity: 1 } }}
                >
                  {link.label}
                </MuiLink>
              ))}
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Typography variant="h6" gutterBottom fontWeight={600}>
              Business Hours
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.9 }}>
              <strong>Office Hours:</strong>
              <br />
              Monday - Friday: 8:00 AM - 5:00 PM
              <br />
              <br />
              <strong>Cleaning Services:</strong>
              <br />
              Available 24/7, including after-hours and weekends to minimize disruption to your
              business.
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'rgba(255, 255, 255, 0.2)' }} />

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            © {currentYear} 3MS Janitorial Services. All rights reserved.
          </Typography>
          <Box sx={{ display: 'flex', gap: 3 }}>
            {legalLinks.map((link) => (
              <MuiLink
                key={link.path}
                component={Link}
                to={link.path}
                color="inherit"
                underline="hover"
                variant="body2"
                sx={{ opacity: 0.8, '&:hover': { opacity: 1 } }}
              >
                {link.label}
              </MuiLink>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
