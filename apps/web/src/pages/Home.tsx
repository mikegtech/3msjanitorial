import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import PhoneIcon from '@mui/icons-material/Phone';
import SecurityIcon from '@mui/icons-material/Security';
import StarIcon from '@mui/icons-material/Star';
import StoreIcon from '@mui/icons-material/Store';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  alpha,
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Fade,
  Grid,
  Grow,
  Paper,
  Rating,
  Typography,
  useTheme,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { BUSINESS_INFO, TRUST_BADGES } from '../constants/business';

const services = [
  {
    icon: <CleaningServicesIcon sx={{ fontSize: 40 }} />,
    title: 'Office Cleaning',
    description:
      'Daily, weekly, or custom cleaning schedules for professional workspaces of all sizes.',
  },
  {
    icon: <LocalHospitalIcon sx={{ fontSize: 40 }} />,
    title: 'Medical Facilities',
    description:
      'Specialized sanitization protocols for clinics, dental offices, and healthcare environments.',
  },
  {
    icon: <StoreIcon sx={{ fontSize: 40 }} />,
    title: 'Retail Spaces',
    description:
      'Keep your storefront spotless and welcoming for customers with after-hours cleaning.',
  },
  {
    icon: <WarehouseIcon sx={{ fontSize: 40 }} />,
    title: 'Warehouses',
    description:
      'Industrial cleaning solutions for warehouses, distribution centers, and manufacturing facilities.',
  },
];

const trustIcons = [
  <SecurityIcon key="security" sx={{ fontSize: 36 }} />,
  <VerifiedUserIcon key="verified" sx={{ fontSize: 36 }} />,
  <CleaningServicesIcon key="cleaning" sx={{ fontSize: 36 }} />,
  <CheckCircleIcon key="check" sx={{ fontSize: 36 }} />,
];

const reviews = [
  {
    name: 'Sarah M.',
    business: 'Greenville Family Dental',
    rating: 5,
    text: "3MS Janitorial has been cleaning our dental office for over a year now. They understand the specific needs of a medical environment and never miss a detail. Our patients frequently comment on how clean our office is.",
  },
  {
    name: 'James T.',
    business: 'Downtown Realty Group',
    rating: 5,
    text: "Switching to 3MS was the best decision we made for our office. They're reliable, thorough, and communicate proactively. Our space always looks professional for client meetings.",
  },
  {
    name: 'Linda R.',
    business: 'Grace Community Church',
    rating: 5,
    text: "We've tried several cleaning services over the years, but 3MS is by far the most consistent. They treat our church with respect and care, and the congregation notices the difference.",
  },
];

const faqs = [
  {
    question: 'What areas do you serve?',
    answer:
      'We proudly serve Greenville, TX and the surrounding Hunt County communities, including Commerce, Wolfe City, Quinlan, Caddo Mills, and more. Contact us to confirm service availability in your area.',
  },
  {
    question: 'Do you offer after-hours cleaning?',
    answer:
      'Yes! We understand that cleaning during business hours can be disruptive. We offer flexible scheduling including early morning, evening, and weekend cleaning to work around your operations.',
  },
  {
    question: 'Are your employees background checked?',
    answer:
      'Absolutely. Every member of our cleaning team undergoes a thorough background check before they step foot in your facility. Your security is our priority.',
  },
  {
    question: 'What types of commercial properties do you clean?',
    answer:
      'We clean a wide variety of commercial spaces including offices, medical facilities, retail stores, churches, schools, restaurants, warehouses, and more. If you have a commercial space, we can create a custom cleaning plan for you.',
  },
  {
    question: 'How do I get a quote?',
    answer:
      'Getting a quote is easy! You can fill out our online Request a Quote form, call us directly, or send us an email. We typically respond within one business day and can schedule a walkthrough of your property at your convenience.',
  },
  {
    question: 'Do you use eco-friendly cleaning products?',
    answer:
      'Yes, we offer green cleaning options for businesses that prefer environmentally friendly products. Just let us know your preference when requesting a quote.',
  },
];

export function Home() {
  const theme = useTheme();

  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 50%, ${alpha(theme.palette.primary.light, 0.9)} 100%)`,
          color: 'white',
          py: { xs: 10, md: 14 },
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              'radial-gradient(circle at 70% 20%, rgba(255,255,255,0.1) 0%, transparent 50%)',
            pointerEvents: 'none',
          },
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, md: 7 }}>
              <Fade in timeout={600}>
                <Box>
                  <Typography
                    variant="h1"
                    sx={{
                      fontSize: { xs: '2.5rem', sm: '3rem', md: '3.75rem' },
                      mb: 3,
                      textShadow: '0 2px 4px rgba(0,0,0,0.1)',
                    }}
                  >
                    Commercial Cleaning You Can Trust
                  </Typography>
                </Box>
              </Fade>
              <Fade in timeout={800} style={{ transitionDelay: '100ms' }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 400,
                    mb: 4,
                    opacity: 0.95,
                    fontSize: { xs: '1.1rem', md: '1.35rem' },
                    lineHeight: 1.6,
                  }}
                >
                  Professional janitorial services for businesses in Greenville, TX and surrounding
                  areas. Reliable, thorough, and customized to your needs.
                </Typography>
              </Fade>
              <Fade in timeout={1000} style={{ transitionDelay: '200ms' }}>
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                  <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    component={Link}
                    to="/contact"
                    endIcon={<ArrowForwardIcon />}
                    sx={{ px: 4, py: 1.5 }}
                  >
                    Request a Quote
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    component="a"
                    href={`tel:${BUSINESS_INFO.phone}`}
                    startIcon={<PhoneIcon />}
                    sx={{
                      px: 4,
                      py: 1.5,
                      color: 'white',
                      borderColor: 'rgba(255,255,255,0.5)',
                      borderWidth: 2,
                      '&:hover': {
                        borderColor: 'white',
                        borderWidth: 2,
                        bgcolor: 'rgba(255,255,255,0.1)',
                      },
                    }}
                  >
                    {BUSINESS_INFO.phoneFormatted}
                  </Button>
                </Box>
              </Fade>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Trust Badges */}
      <Box sx={{ py: { xs: 5, md: 7 }, bgcolor: 'grey.50' }}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            {TRUST_BADGES.map((badge, index) => (
              <Grid key={badge.title} size={{ xs: 6, md: 3 }}>
                <Grow in timeout={400 + index * 100}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      textAlign: 'center',
                      bgcolor: 'white',
                      height: '100%',
                      border: '1px solid',
                      borderColor: 'divider',
                      borderRadius: 3,
                      transition: theme.transitions.create(
                        ['border-color', 'box-shadow', 'transform'],
                        { duration: theme.transitions.duration.short }
                      ),
                      '&:hover': {
                        borderColor: alpha(theme.palette.primary.main, 0.3),
                        boxShadow: `0 8px 24px ${alpha(theme.palette.primary.main, 0.12)}`,
                        transform: 'translateY(-2px)',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        color: 'primary.main',
                        mb: 1.5,
                        display: 'flex',
                        justifyContent: 'center',
                      }}
                    >
                      {trustIcons[index]}
                    </Box>
                    <Typography variant="h6" sx={{ mb: 0.5, fontSize: '1rem' }}>
                      {badge.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {badge.description}
                    </Typography>
                  </Paper>
                </Grow>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Services Section */}
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
            <Typography
              variant="overline"
              sx={{ color: 'primary.main', display: 'block', mb: 1 }}
            >
              What We Offer
            </Typography>
            <Typography variant="h2" gutterBottom>
              Our Services
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ maxWidth: 700, mx: 'auto' }}
            >
              From small offices to large industrial facilities, we deliver consistent, high-quality
              cleaning tailored to your specific industry and requirements.
            </Typography>
          </Box>
          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid key={service.title} size={{ xs: 12, sm: 6, md: 3 }}>
                <Grow in timeout={400 + index * 100}>
                  <Card
                    sx={{
                      height: '100%',
                      textAlign: 'center',
                      cursor: 'default',
                    }}
                  >
                    <CardContent>
                      <Box
                        sx={{
                          color: 'primary.main',
                          mb: 2,
                          p: 1.5,
                          borderRadius: 2,
                          bgcolor: alpha(theme.palette.primary.main, 0.08),
                          display: 'inline-flex',
                          transition: theme.transitions.create(['background-color', 'transform'], {
                            duration: theme.transitions.duration.short,
                          }),
                        }}
                      >
                        {service.icon}
                      </Box>
                      <Typography variant="h6" gutterBottom>
                        {service.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {service.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grow>
              </Grid>
            ))}
          </Grid>
          <Box sx={{ textAlign: 'center', mt: 5 }}>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              component={Link}
              to="/services"
              endIcon={<ArrowForwardIcon />}
            >
              View All Services
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Reviews Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'grey.50' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
            <Typography
              variant="overline"
              sx={{ color: 'primary.main', display: 'block', mb: 1 }}
            >
              Testimonials
            </Typography>
            <Typography variant="h2" gutterBottom>
              What Our Clients Say
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ maxWidth: 600, mx: 'auto' }}
            >
              We take pride in building lasting relationships with businesses throughout Hunt County.
            </Typography>
          </Box>
          <Grid container spacing={4}>
            {reviews.map((review, index) => (
              <Grid key={review.name} size={{ xs: 12, md: 4 }}>
                <Fade in timeout={600 + index * 150}>
                  <Card sx={{ height: '100%' }}>
                    <CardContent>
                      <Rating
                        value={review.rating}
                        readOnly
                        icon={<StarIcon fontSize="small" sx={{ color: '#faaf00' }} />}
                        emptyIcon={<StarIcon fontSize="small" />}
                      />
                      <Typography
                        variant="body1"
                        sx={{
                          my: 2.5,
                          fontStyle: 'italic',
                          color: 'text.secondary',
                          lineHeight: 1.7,
                        }}
                      >
                        "{review.text}"
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Avatar
                          sx={{
                            bgcolor: 'primary.main',
                            width: 44,
                            height: 44,
                            fontSize: '1.1rem',
                          }}
                        >
                          {review.name[0]}
                        </Avatar>
                        <Box>
                          <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                            {review.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {review.business}
                          </Typography>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </Fade>
              </Grid>
            ))}
          </Grid>
          <Box sx={{ textAlign: 'center', mt: 5 }}>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              component={Link}
              to="/reviews"
              endIcon={<ArrowForwardIcon />}
            >
              Read More Reviews
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Gallery Preview */}
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
            <Typography
              variant="overline"
              sx={{ color: 'primary.main', display: 'block', mb: 1 }}
            >
              Our Work
            </Typography>
            <Typography variant="h2" gutterBottom>
              See Our Work
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ maxWidth: 600, mx: 'auto' }}
            >
              Browse photos of the commercial spaces we keep spotless throughout the Greenville area.
            </Typography>
          </Box>
          <Grid container spacing={2}>
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Grid key={item} size={{ xs: 6, md: 4 }}>
                <Paper
                  sx={{
                    height: { xs: 150, md: 200 },
                    bgcolor: 'grey.100',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 3,
                    overflow: 'hidden',
                    cursor: 'pointer',
                    transition: theme.transitions.create(['transform', 'box-shadow'], {
                      duration: theme.transitions.duration.short,
                    }),
                    '&:hover': {
                      transform: 'scale(1.02)',
                      boxShadow: theme.shadows[4],
                    },
                  }}
                >
                  <Typography variant="body2" color="text.secondary">
                    Gallery Image {item}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
          <Box sx={{ textAlign: 'center', mt: 5 }}>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              component={Link}
              to="/gallery"
              endIcon={<ArrowForwardIcon />}
            >
              View Full Gallery
            </Button>
          </Box>
        </Container>
      </Box>

      {/* FAQ Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'grey.50' }}>
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
            <Typography
              variant="overline"
              sx={{ color: 'primary.main', display: 'block', mb: 1 }}
            >
              FAQ
            </Typography>
            <Typography variant="h2" gutterBottom>
              Frequently Asked Questions
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Get answers to common questions about our commercial cleaning services.
            </Typography>
          </Box>
          <Box>
            {faqs.map((faq) => (
              <Accordion key={faq.question}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography variant="subtitle1" fontWeight={500}>
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Final CTA */}
      <Box
        sx={{
          py: { xs: 10, md: 12 },
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
          color: 'white',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              'radial-gradient(circle at 30% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)',
            pointerEvents: 'none',
          },
        }}
      >
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
          <Fade in timeout={600}>
            <Box>
              <Typography
                variant="h2"
                gutterBottom
                sx={{ color: 'white', textShadow: '0 2px 4px rgba(0,0,0,0.1)' }}
              >
                Ready for a Cleaner Workspace?
              </Typography>
              <Typography
                variant="h6"
                sx={{ mb: 4, fontWeight: 400, opacity: 0.95, lineHeight: 1.6 }}
              >
                Get a free, no-obligation quote for your commercial cleaning needs. We respond within
                one business day.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  component={Link}
                  to="/contact"
                  sx={{ px: 5, py: 1.5 }}
                >
                  Request a Quote
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  component="a"
                  href={`tel:${BUSINESS_INFO.phone}`}
                  startIcon={<PhoneIcon />}
                  sx={{
                    px: 4,
                    py: 1.5,
                    color: 'white',
                    borderColor: 'rgba(255,255,255,0.5)',
                    borderWidth: 2,
                    '&:hover': {
                      borderColor: 'white',
                      borderWidth: 2,
                      bgcolor: 'rgba(255,255,255,0.1)',
                    },
                  }}
                >
                  Call {BUSINESS_INFO.phoneFormatted}
                </Button>
              </Box>
            </Box>
          </Fade>
        </Container>
      </Box>
    </>
  );
}
