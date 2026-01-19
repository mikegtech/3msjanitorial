import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckIcon from '@mui/icons-material/Check';
import ChurchIcon from '@mui/icons-material/Church';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import ConstructionIcon from '@mui/icons-material/Construction';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import SchoolIcon from '@mui/icons-material/School';
import StoreIcon from '@mui/icons-material/Store';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
}

function ServiceCard({ icon, title, description, features }: ServiceCardProps) {
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent sx={{ p: 3 }}>
        <Box sx={{ color: 'primary.main', mb: 2 }}>{icon}</Box>
        <Typography variant="h5" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {description}
        </Typography>
        <List dense disablePadding>
          {features.map((feature) => (
            <ListItem key={feature} disableGutters sx={{ py: 0.25 }}>
              <ListItemIcon sx={{ minWidth: 32 }}>
                <CheckIcon color="secondary" fontSize="small" />
              </ListItemIcon>
              <ListItemText
                primary={feature}
                primaryTypographyProps={{ variant: 'body2' }}
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}

const services: ServiceCardProps[] = [
  {
    icon: <CleaningServicesIcon sx={{ fontSize: 48 }} />,
    title: 'Office Cleaning',
    description:
      'Keep your workplace productive and professional with regular cleaning tailored to your schedule.',
    features: [
      'Desk and workstation cleaning',
      'Common area maintenance',
      'Kitchen and break room sanitation',
      'Restroom deep cleaning',
      'Trash removal and recycling',
      'Floor care (vacuum, mop, polish)',
    ],
  },
  {
    icon: <LocalHospitalIcon sx={{ fontSize: 48 }} />,
    title: 'Medical Facilities',
    description:
      'Specialized cleaning protocols that meet healthcare sanitation standards and keep patients safe.',
    features: [
      'OSHA-compliant cleaning procedures',
      'Medical-grade disinfection',
      'Exam room sanitization',
      'Waiting area maintenance',
      'Biohazard awareness training',
      'Flexible scheduling around patient hours',
    ],
  },
  {
    icon: <StoreIcon sx={{ fontSize: 48 }} />,
    title: 'Retail Stores',
    description:
      'Create a welcoming shopping environment that keeps customers coming back.',
    features: [
      'Storefront and entrance cleaning',
      'Display and shelf dusting',
      'Fitting room maintenance',
      'Floor cleaning and polishing',
      'Window and glass cleaning',
      'After-hours availability',
    ],
  },
  {
    icon: <WarehouseIcon sx={{ fontSize: 48 }} />,
    title: 'Warehouses & Industrial',
    description:
      'Heavy-duty cleaning solutions for distribution centers, factories, and industrial facilities.',
    features: [
      'Concrete floor scrubbing',
      'Dock and loading area cleaning',
      'Break room and restroom service',
      'Office area within facility',
      'Dust and debris management',
      'Safety-focused protocols',
    ],
  },
  {
    icon: <ChurchIcon sx={{ fontSize: 48 }} />,
    title: 'Churches & Places of Worship',
    description:
      'Respectful, thorough cleaning that keeps your congregation comfortable and your space sacred.',
    features: [
      'Sanctuary and pew cleaning',
      'Fellowship hall maintenance',
      'Classroom and nursery sanitization',
      'Restroom deep cleaning',
      'Pre-event and post-event cleaning',
      'Flexible scheduling around services',
    ],
  },
  {
    icon: <SchoolIcon sx={{ fontSize: 48 }} />,
    title: 'Schools & Daycares',
    description:
      'Safe, thorough cleaning that protects students and creates a healthy learning environment.',
    features: [
      'Classroom sanitization',
      'Gym and cafeteria cleaning',
      'Playground area maintenance',
      'Child-safe cleaning products',
      'High-touch surface disinfection',
      'Summer deep cleaning programs',
    ],
  },
  {
    icon: <RestaurantIcon sx={{ fontSize: 48 }} />,
    title: 'Restaurants & Food Service',
    description:
      'Kitchen and dining area cleaning that helps you maintain health code compliance.',
    features: [
      'Dining room and booth cleaning',
      'Front-of-house maintenance',
      'Floor degreasing and scrubbing',
      'Restroom sanitation',
      'Window and entrance cleaning',
      'Post-close deep cleaning',
    ],
  },
  {
    icon: <ConstructionIcon sx={{ fontSize: 48 }} />,
    title: 'Post-Construction Cleanup',
    description:
      'Get your new or renovated space move-in ready with thorough post-construction cleaning.',
    features: [
      'Dust and debris removal',
      'Window and glass cleaning',
      'Surface cleaning and polishing',
      'Floor scrubbing and finishing',
      'HVAC vent cleaning',
      'Final detail inspection',
    ],
  },
];

export function Services() {
  return (
    <>
      <Box sx={{ bgcolor: 'primary.main', color: 'white', py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Typography variant="h1" sx={{ fontSize: { xs: '2rem', md: '3rem' } }}>
            Our Commercial Cleaning Services
          </Typography>
          <Typography variant="h6" sx={{ mt: 2, fontWeight: 400, opacity: 0.95 }}>
            Comprehensive janitorial solutions for every type of commercial property in the
            Greenville, TX area.
          </Typography>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {services.map((service) => (
              <Grid key={service.title} size={{ xs: 12, md: 6 }}>
                <ServiceCard {...service} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: 'grey.50' }}>
        <Container maxWidth="md">
          <Typography variant="h2" align="center" gutterBottom>
            Custom Cleaning Plans
          </Typography>
          <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 4 }}>
            Every business is different. We work with you to create a cleaning schedule and
            checklist that fits your specific needs, budget, and operational hours. Whether you
            need daily service, weekly deep cleaning, or anything in between, we've got you
            covered.
          </Typography>
          <Box sx={{ textAlign: 'center' }}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              component={Link}
              to="/contact"
              endIcon={<ArrowForwardIcon />}
            >
              Get Your Custom Quote
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
}
