import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import { Box, Button, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Paper, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { BUSINESS_INFO, SERVICE_AREAS } from '../constants/business';

export function ServiceArea() {
  return (
    <>
      <Box sx={{ bgcolor: 'primary.main', color: 'white', py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Typography variant="h1" sx={{ fontSize: { xs: '2rem', md: '3rem' } }}>
            Service Area
          </Typography>
          <Typography variant="h6" sx={{ mt: 2, fontWeight: 400, opacity: 0.95 }}>
            Professional commercial cleaning services for Greenville, TX and surrounding Hunt County
            communities.
          </Typography>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="h2" gutterBottom>
                Proudly Serving Hunt County
              </Typography>
              <Typography variant="body1" paragraph>
                3MS Janitorial Services is headquartered in Greenville, Texas, and we proudly serve
                businesses throughout Hunt County and the surrounding areas. Our local presence
                means faster response times, easier communication, and a team that understands the
                needs of businesses in our community.
              </Typography>
              <Typography variant="body1" paragraph>
                Whether you're located in downtown Greenville, out in Commerce near Texas A&M
                University-Commerce, or anywhere in between, we're ready to provide reliable
                commercial cleaning services tailored to your needs.
              </Typography>
              <Typography variant="body1">
                Not sure if we service your area? Give us a call or fill out our quote form—we're
                always happy to discuss how we can help your business.
              </Typography>
              <Box sx={{ mt: 4, display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button
                  variant="contained"
                  color="primary"
                  component={Link}
                  to="/contact"
                  endIcon={<ArrowForwardIcon />}
                >
                  Request a Quote
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  component="a"
                  href={`tel:${BUSINESS_INFO.phone}`}
                  startIcon={<PhoneIcon />}
                >
                  Call Us
                </Button>
              </Box>
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
                <Box sx={{ textAlign: 'center' }}>
                  <LocationOnIcon sx={{ fontSize: 48, color: 'grey.400', mb: 1 }} />
                  <Typography variant="body1" color="text.secondary">
                    Service Area Map
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Greenville, TX & Surrounding Areas
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: 'grey.50' }}>
        <Container maxWidth="lg">
          <Typography variant="h2" align="center" gutterBottom>
            Communities We Serve
          </Typography>
          <Typography
            variant="body1"
            align="center"
            color="text.secondary"
            sx={{ mb: 6, maxWidth: 600, mx: 'auto' }}
          >
            We provide commercial cleaning services to businesses in the following cities and
            surrounding areas:
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            {SERVICE_AREAS.map((area) => (
              <Grid key={area} size={{ xs: 6, sm: 4, md: 3 }}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 2,
                    textAlign: 'center',
                    bgcolor: 'white',
                    border: '1px solid',
                    borderColor: 'grey.200',
                  }}
                >
                  <Typography variant="body1">{area}, TX</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="md">
          <Typography variant="h2" align="center" gutterBottom>
            Why Local Matters
          </Typography>
          <List sx={{ mt: 4 }}>
            {[
              {
                title: 'Fast Response Times',
                description:
                  "Because we're based in Greenville, we can respond quickly to your needs, whether it's a routine clean or an emergency situation.",
              },
              {
                title: 'Community Investment',
                description:
                  "When you choose 3MS, you're supporting a local business that reinvests in the Hunt County community.",
              },
              {
                title: 'Local Knowledge',
                description:
                  'We understand the unique needs of businesses in our area, from seasonal considerations to local events that might affect your cleaning schedule.',
              },
              {
                title: 'Relationship-Focused',
                description:
                  "We're not a faceless national chain. You'll work directly with people who know your name, your business, and your specific requirements.",
              },
            ].map((item) => (
              <ListItem key={item.title} alignItems="flex-start" sx={{ py: 2 }}>
                <ListItemIcon sx={{ mt: 0.5 }}>
                  <CheckCircleIcon color="secondary" />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography variant="h6" sx={{ mb: 0.5 }}>
                      {item.title}
                    </Typography>
                  }
                  secondary={item.description}
                />
              </ListItem>
            ))}
          </List>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: 'primary.main', color: 'white' }}>
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography variant="h2" gutterBottom sx={{ color: 'white' }}>
            Ready to Get Started?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, fontWeight: 400, opacity: 0.95 }}>
            Contact us today for a free, no-obligation quote for your commercial property.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            component={Link}
            to="/contact"
            endIcon={<ArrowForwardIcon />}
          >
            Request a Quote
          </Button>
        </Container>
      </Box>
    </>
  );
}
