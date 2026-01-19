import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import GroupsIcon from '@mui/icons-material/Groups';
import HandshakeIcon from '@mui/icons-material/Handshake';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { Box, Button, Container, Grid, Paper, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const values = [
  {
    icon: <ThumbUpIcon sx={{ fontSize: 48 }} />,
    title: 'Reliability',
    description:
      'We show up when we say we will, every time. Your business depends on consistency, and we deliver it.',
  },
  {
    icon: <CheckCircleIcon sx={{ fontSize: 48 }} />,
    title: 'Thoroughness',
    description:
      "We don't cut corners. Our detailed checklists ensure nothing gets missed, from high-touch surfaces to often-overlooked areas.",
  },
  {
    icon: <HandshakeIcon sx={{ fontSize: 48 }} />,
    title: 'Integrity',
    description:
      'Honest pricing, background-checked employees, and transparent communication. Your trust is earned.',
  },
  {
    icon: <GroupsIcon sx={{ fontSize: 48 }} />,
    title: 'Community',
    description:
      "We're proud to serve businesses in Greenville and Hunt County. When local businesses thrive, our community thrives.",
  },
];

export function About() {
  return (
    <>
      <Box sx={{ bgcolor: 'primary.main', color: 'white', py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Typography variant="h1" sx={{ fontSize: { xs: '2rem', md: '3rem' } }}>
            About 3MS Janitorial Services
          </Typography>
          <Typography variant="h6" sx={{ mt: 2, fontWeight: 400, opacity: 0.95 }}>
            Your local partner for professional commercial cleaning in Greenville, TX.
          </Typography>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="h2" gutterBottom>
                Keeping Hunt County Businesses Clean Since Day One
              </Typography>
              <Typography variant="body1" paragraph>
                3MS Janitorial Services was founded with a simple mission: to provide Greenville and
                the surrounding communities with commercial cleaning services they can truly rely
                on. We saw too many businesses frustrated by inconsistent service, cut corners, and
                poor communication from other providers.
              </Typography>
              <Typography variant="body1" paragraph>
                We built our company on the principles of reliability, thoroughness, and honest
                business practices. Every member of our team is background-checked, trained to our
                high standards, and committed to treating your facility with the same care they
                would their own home.
              </Typography>
              <Typography variant="body1">
                Whether you run a small office, a medical practice, a retail store, or a large
                warehouse, we customize our services to meet your specific needs and schedule. We
                understand that every business is different, and cookie-cutter cleaning programs
                simply don't work.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Paper
                sx={{
                  height: 350,
                  bgcolor: 'grey.200',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography variant="body1" color="text.secondary">
                  Team Photo Placeholder
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: 'grey.50' }}>
        <Container maxWidth="lg">
          <Typography variant="h2" align="center" gutterBottom>
            Our Values
          </Typography>
          <Typography
            variant="body1"
            align="center"
            color="text.secondary"
            sx={{ mb: 6, maxWidth: 600, mx: 'auto' }}
          >
            These principles guide everything we do, from hiring decisions to how we interact with
            our clients.
          </Typography>
          <Grid container spacing={4}>
            {values.map((value) => (
              <Grid key={value.title} size={{ xs: 12, sm: 6, md: 3 }}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    height: '100%',
                    textAlign: 'center',
                    bgcolor: 'white',
                    border: '1px solid',
                    borderColor: 'grey.200',
                  }}
                >
                  <Box sx={{ color: 'primary.main', mb: 2 }}>{value.icon}</Box>
                  <Typography variant="h6" gutterBottom>
                    {value.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {value.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="md">
          <Typography variant="h2" align="center" gutterBottom>
            Why Choose Us?
          </Typography>
          <Grid container spacing={3} sx={{ mt: 4 }}>
            {[
              'Fully insured and bonded for your protection',
              'All employees background-checked',
              'Customized cleaning plans for your business',
              'Flexible scheduling including after-hours',
              'Eco-friendly cleaning products available',
              'Responsive communication and support',
              'Consistent teams who know your space',
              'Satisfaction guaranteed on every clean',
            ].map((item) => (
              <Grid key={item} size={{ xs: 12, sm: 6 }}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                  <CheckCircleIcon color="secondary" sx={{ mt: 0.25 }} />
                  <Typography variant="body1">{item}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              component={Link}
              to="/contact"
              endIcon={<ArrowForwardIcon />}
            >
              Request a Quote
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
}
