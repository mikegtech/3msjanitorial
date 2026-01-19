import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box, Button, Container, Grid, Paper, Tab, Tabs, Typography } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';

interface GalleryImage {
  id: number;
  category: string;
  title: string;
}

const galleryImages: GalleryImage[] = [
  { id: 1, category: 'office', title: 'Modern Office Reception' },
  { id: 2, category: 'office', title: 'Open Floor Plan Workspace' },
  { id: 3, category: 'office', title: 'Executive Conference Room' },
  { id: 4, category: 'office', title: 'Break Room & Kitchen' },
  { id: 5, category: 'medical', title: 'Dental Office Lobby' },
  { id: 6, category: 'medical', title: 'Medical Exam Room' },
  { id: 7, category: 'medical', title: 'Pediatric Waiting Area' },
  { id: 8, category: 'medical', title: 'Clinic Hallway' },
  { id: 9, category: 'retail', title: 'Boutique Storefront' },
  { id: 10, category: 'retail', title: 'Retail Display Area' },
  { id: 11, category: 'retail', title: 'Checkout Counter' },
  { id: 12, category: 'retail', title: 'Fitting Room Area' },
  { id: 13, category: 'industrial', title: 'Warehouse Floor' },
  { id: 14, category: 'industrial', title: 'Loading Dock' },
  { id: 15, category: 'industrial', title: 'Industrial Break Room' },
  { id: 16, category: 'industrial', title: 'Manufacturing Floor' },
  { id: 17, category: 'other', title: 'Church Sanctuary' },
  { id: 18, category: 'other', title: 'School Classroom' },
  { id: 19, category: 'other', title: 'Restaurant Dining Area' },
  { id: 20, category: 'other', title: 'Daycare Play Area' },
];

const categories = [
  { value: 'all', label: 'All Projects' },
  { value: 'office', label: 'Offices' },
  { value: 'medical', label: 'Medical' },
  { value: 'retail', label: 'Retail' },
  { value: 'industrial', label: 'Industrial' },
  { value: 'other', label: 'Other' },
];

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredImages =
    activeCategory === 'all'
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <>
      <Box sx={{ bgcolor: 'primary.main', color: 'white', py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Typography variant="h1" sx={{ fontSize: { xs: '2rem', md: '3rem' } }}>
            Our Work Gallery
          </Typography>
          <Typography variant="h6" sx={{ mt: 2, fontWeight: 400, opacity: 0.95 }}>
            Browse photos of commercial spaces we maintain throughout the Greenville area.
          </Typography>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 4, md: 6 } }}>
        <Container maxWidth="lg">
          <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
            <Tabs
              value={activeCategory}
              onChange={(_, value) => setActiveCategory(value)}
              variant="scrollable"
              scrollButtons="auto"
              allowScrollButtonsMobile
            >
              {categories.map((cat) => (
                <Tab key={cat.value} value={cat.value} label={cat.label} />
              ))}
            </Tabs>
          </Box>

          <Grid container spacing={2}>
            {filteredImages.map((image) => (
              <Grid key={image.id} size={{ xs: 6, sm: 4, md: 3 }}>
                <Paper
                  sx={{
                    height: { xs: 150, sm: 180, md: 200 },
                    bgcolor: 'grey.200',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'scale(1.02)',
                      '& .image-overlay': {
                        opacity: 1,
                      },
                    },
                  }}
                >
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ textAlign: 'center', px: 2 }}
                  >
                    {image.title}
                  </Typography>
                  <Box
                    className="image-overlay"
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      bgcolor: 'rgba(0,0,0,0.7)',
                      color: 'white',
                      p: 1.5,
                      opacity: 0,
                      transition: 'opacity 0.2s',
                    }}
                  >
                    <Typography variant="body2" fontWeight={500}>
                      {image.title}
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>

          {filteredImages.length === 0 && (
            <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center', py: 8 }}>
              No images found in this category.
            </Typography>
          )}
        </Container>
      </Box>

      <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: 'grey.50' }}>
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography variant="h2" gutterBottom>
            Want Results Like These?
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
            Let us show you what professional cleaning can do for your business. Request a free
            quote and walkthrough today.
          </Typography>
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
        </Container>
      </Box>
    </>
  );
}
