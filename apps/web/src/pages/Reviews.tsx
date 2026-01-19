import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import StarIcon from '@mui/icons-material/Star';
import { Avatar, Box, Button, Card, CardContent, Container, Grid, Rating, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const reviews = [
  {
    name: 'Sarah M.',
    business: 'Greenville Family Dental',
    rating: 5,
    text: "3MS Janitorial has been cleaning our dental office for over a year now. They understand the specific needs of a medical environment and never miss a detail. Our patients frequently comment on how clean our office is. I can't recommend them highly enough.",
  },
  {
    name: 'James T.',
    business: 'Downtown Realty Group',
    rating: 5,
    text: "Switching to 3MS was the best decision we made for our office. They're reliable, thorough, and communicate proactively if there's ever an issue. Our space always looks professional for client meetings. It's one less thing I have to worry about.",
  },
  {
    name: 'Linda R.',
    business: 'Grace Community Church',
    rating: 5,
    text: "We've tried several cleaning services over the years, but 3MS is by far the most consistent. They treat our church with respect and care, and the congregation notices the difference. They're flexible with our event schedule and always go above and beyond.",
  },
  {
    name: 'Michael B.',
    business: 'Hunt County Auto Parts',
    rating: 5,
    text: "Running a retail store means our floors take a beating. 3MS keeps everything looking great despite the heavy foot traffic. They're always on time and the same crew comes each time, which means they know our store and what needs extra attention.",
  },
  {
    name: 'Patricia W.',
    business: 'Greenville Pediatrics',
    rating: 5,
    text: "In a pediatric office, cleanliness isn't just about appearances—it's about keeping kids healthy. 3MS takes this seriously. They use child-safe products and are meticulous about sanitizing exam rooms and waiting areas. Parents have peace of mind, and so do I.",
  },
  {
    name: 'Robert K.',
    business: 'Lone Oak Manufacturing',
    rating: 5,
    text: "We have a large warehouse facility that most cleaning companies don't want to deal with. 3MS took it on without hesitation and has kept our break rooms, restrooms, and office areas spotless. Professional crew, fair pricing, no complaints.",
  },
  {
    name: 'Jennifer D.',
    business: 'The Book Nook',
    rating: 5,
    text: "As a small business owner, I appreciate working with other local businesses. 3MS is responsive, fairly priced, and does excellent work. My bookstore has never looked better. They even dust the shelves carefully without disturbing the merchandise.",
  },
  {
    name: 'David H.',
    business: 'Commerce Street Law Office',
    rating: 5,
    text: "First impressions matter in a law office. Since hiring 3MS, our reception area and conference rooms are always immaculate for clients. They work around our schedule and are completely trustworthy—important when you have sensitive documents around.",
  },
  {
    name: 'Angela S.',
    business: 'Sunrise Daycare Center',
    rating: 5,
    text: "Finding a cleaning service that understands the needs of a daycare was challenging until we found 3MS. They use non-toxic products, sanitize toys and play areas thoroughly, and work after hours so everything is fresh for the kids each morning.",
  },
];

export function Reviews() {
  const averageRating = reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;

  return (
    <>
      <Box sx={{ bgcolor: 'primary.main', color: 'white', py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Typography variant="h1" sx={{ fontSize: { xs: '2rem', md: '3rem' } }}>
            Customer Reviews
          </Typography>
          <Typography variant="h6" sx={{ mt: 2, fontWeight: 400, opacity: 0.95 }}>
            See what businesses throughout Hunt County are saying about our cleaning services.
          </Typography>
        </Container>
      </Box>

      <Box sx={{ py: 4, bgcolor: 'grey.50' }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 2,
              flexWrap: 'wrap',
            }}
          >
            <Rating
              value={averageRating}
              readOnly
              precision={0.1}
              icon={<StarIcon fontSize="large" />}
              emptyIcon={<StarIcon fontSize="large" />}
            />
            <Typography variant="h5">
              {averageRating.toFixed(1)} out of 5 based on {reviews.length} reviews
            </Typography>
          </Box>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {reviews.map((review) => (
              <Grid key={review.name} size={{ xs: 12, md: 6 }}>
                <Card sx={{ height: '100%' }}>
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                      <Rating
                        value={review.rating}
                        readOnly
                        icon={<StarIcon fontSize="small" />}
                      />
                      <FormatQuoteIcon sx={{ color: 'grey.300', fontSize: 32 }} />
                    </Box>
                    <Typography variant="body1" sx={{ mb: 3 }}>
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
        </Container>
      </Box>

      <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: 'secondary.main', color: 'white' }}>
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography variant="h2" gutterBottom sx={{ color: 'white' }}>
            Ready to Experience the Difference?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, fontWeight: 400, opacity: 0.95 }}>
            Join the growing list of satisfied businesses in Greenville and Hunt County.
          </Typography>
          <Button
            variant="contained"
            size="large"
            component={Link}
            to="/contact"
            endIcon={<ArrowForwardIcon />}
            sx={{
              bgcolor: 'white',
              color: 'secondary.main',
              '&:hover': {
                bgcolor: 'grey.100',
              },
            }}
          >
            Request Your Free Quote
          </Button>
        </Container>
      </Box>
    </>
  );
}
