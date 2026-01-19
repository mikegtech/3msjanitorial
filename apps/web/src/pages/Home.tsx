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
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Paper,
  Rating,
  Typography,
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
  <SecurityIcon key="security" sx={{ fontSize: 36, color: 'primary.main' }} />,
  <VerifiedUserIcon key="verified" sx={{ fontSize: 36, color: 'primary.main' }} />,
  <CleaningServicesIcon key="cleaning" sx={{ fontSize: 36, color: 'primary.main' }} />,
  <CheckCircleIcon key="check" sx={{ fontSize: 36, color: 'primary.main' }} />,
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
  return (
    <>
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: { xs: 8, md: 12 },
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, md: 7 }}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2.25rem', md: '3.5rem' },
                  mb: 2,
                }}
              >
                Commercial Cleaning You Can Trust
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 400,
                  mb: 4,
                  opacity: 0.95,
                  fontSize: { xs: '1.1rem', md: '1.35rem' },
                }}
              >
                Professional janitorial services for businesses in Greenville, TX and surrounding
                areas. Reliable, thorough, and customized to your needs.
              </Typography>
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
                    borderColor: 'white',
                    '&:hover': {
                      borderColor: 'white',
                      bgcolor: 'rgba(255,255,255,0.1)',
                    },
                  }}
                >
                  {BUSINESS_INFO.phoneFormatted}
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 4, md: 6 }, bgcolor: 'grey.50' }}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            {TRUST_BADGES.map((badge, index) => (
              <Grid key={badge.title} size={{ xs: 6, md: 3 }}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    textAlign: 'center',
                    bgcolor: 'white',
                    height: '100%',
                    border: '1px solid',
                    borderColor: 'grey.200',
                  }}
                >
                  {trustIcons[index]}
                  <Typography variant="h6" sx={{ mt: 1.5, mb: 0.5, fontSize: '1rem' }}>
                    {badge.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {badge.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Typography variant="h2" align="center" gutterBottom>
            Our Services
          </Typography>
          <Typography
            variant="body1"
            align="center"
            color="text.secondary"
            sx={{ mb: 6, maxWidth: 700, mx: 'auto' }}
          >
            From small offices to large industrial facilities, we deliver consistent, high-quality
            cleaning tailored to your specific industry and requirements.
          </Typography>
          <Grid container spacing={4}>
            {services.map((service) => (
              <Grid key={service.title} size={{ xs: 12, sm: 6, md: 3 }}>
                <Card sx={{ height: '100%', textAlign: 'center', p: 2 }}>
                  <CardContent>
                    <Box sx={{ color: 'primary.main', mb: 2 }}>{service.icon}</Box>
                    <Typography variant="h6" gutterBottom>
                      {service.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Box sx={{ textAlign: 'center', mt: 4 }}>
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

      <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: 'grey.50' }}>
        <Container maxWidth="lg">
          <Typography variant="h2" align="center" gutterBottom>
            What Our Clients Say
          </Typography>
          <Typography
            variant="body1"
            align="center"
            color="text.secondary"
            sx={{ mb: 6, maxWidth: 600, mx: 'auto' }}
          >
            We take pride in building lasting relationships with businesses throughout Hunt County.
          </Typography>
          <Grid container spacing={4}>
            {reviews.map((review) => (
              <Grid key={review.name} size={{ xs: 12, md: 4 }}>
                <Card sx={{ height: '100%' }}>
                  <CardContent sx={{ p: 3 }}>
                    <Rating value={review.rating} readOnly icon={<StarIcon fontSize="small" />} />
                    <Typography variant="body1" sx={{ my: 2, fontStyle: 'italic' }}>
                      "{review.text}"
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Avatar sx={{ bgcolor: 'primary.main' }}>{review.name[0]}</Avatar>
                      <Box>
                        <Typography variant="subtitle2">{review.name}</Typography>
                        <Typography variant="body2" color="text.secondary">
                          {review.business}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Box sx={{ textAlign: 'center', mt: 4 }}>
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

      <Box sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Typography variant="h2" align="center" gutterBottom>
            See Our Work
          </Typography>
          <Typography
            variant="body1"
            align="center"
            color="text.secondary"
            sx={{ mb: 6, maxWidth: 600, mx: 'auto' }}
          >
            Browse photos of the commercial spaces we keep spotless throughout the Greenville area.
          </Typography>
          <Grid container spacing={2}>
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Grid key={item} size={{ xs: 6, md: 4 }}>
                <Paper
                  sx={{
                    height: { xs: 150, md: 200 },
                    bgcolor: 'grey.200',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Typography variant="body2" color="text.secondary">
                    Gallery Image {item}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
          <Box sx={{ textAlign: 'center', mt: 4 }}>
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

      <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: 'grey.50' }}>
        <Container maxWidth="md">
          <Typography variant="h2" align="center" gutterBottom>
            Frequently Asked Questions
          </Typography>
          <Typography
            variant="body1"
            align="center"
            color="text.secondary"
            sx={{ mb: 6 }}
          >
            Get answers to common questions about our commercial cleaning services.
          </Typography>
          <Box>
            {faqs.map((faq) => (
              <Accordion key={faq.question} elevation={0} sx={{ mb: 1 }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography variant="subtitle1" fontWeight={500}>
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2" color="text.secondary">
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Container>
      </Box>

      <Box
        sx={{
          py: { xs: 8, md: 10 },
          bgcolor: 'primary.main',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h2" gutterBottom sx={{ color: 'white' }}>
            Ready for a Cleaner Workspace?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, fontWeight: 400, opacity: 0.95 }}>
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
                borderColor: 'white',
                '&:hover': {
                  borderColor: 'white',
                  bgcolor: 'rgba(255,255,255,0.1)',
                },
              }}
            >
              Call {BUSINESS_INFO.phoneFormatted}
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
}
