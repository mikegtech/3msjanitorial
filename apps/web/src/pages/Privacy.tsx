import { Box, Container, Link as MuiLink, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { BUSINESS_INFO } from '../constants/business';

export function Privacy() {
  return (
    <>
      <Box sx={{ bgcolor: 'primary.main', color: 'white', py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Typography variant="h1" sx={{ fontSize: { xs: '2rem', md: '3rem' } }}>
            Privacy Policy
          </Typography>
          <Typography variant="h6" sx={{ mt: 2, fontWeight: 400, opacity: 0.95 }}>
            Last updated: January 2026
          </Typography>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="md">
          <Typography variant="body1" paragraph>
            3MS Janitorial Services ("we," "our," or "us") is committed to protecting your privacy.
            This Privacy Policy explains how we collect, use, disclose, and safeguard your
            information when you visit our website or use our services.
          </Typography>

          <Typography variant="h4" sx={{ mt: 4, mb: 2 }}>
            Information We Collect
          </Typography>
          <Typography variant="body1" paragraph>
            We may collect information about you in a variety of ways, including:
          </Typography>
          <Typography variant="body1" component="div" paragraph>
            <strong>Personal Data:</strong> When you fill out our Request a Quote form or contact
            us, we collect personal information such as your name, email address, phone number,
            business name, and property address.
          </Typography>
          <Typography variant="body1" component="div" paragraph>
            <strong>Service Information:</strong> Details about the type of cleaning services
            you're interested in, your preferred schedule, and any special requirements for your
            facility.
          </Typography>
          <Typography variant="body1" component="div" paragraph>
            <strong>Usage Data:</strong> Information about how you access and use our website,
            including your IP address, browser type, pages visited, and time spent on pages.
          </Typography>

          <Typography variant="h4" sx={{ mt: 4, mb: 2 }}>
            How We Use Your Information
          </Typography>
          <Typography variant="body1" paragraph>
            We use the information we collect to:
          </Typography>
          <Box component="ul" sx={{ pl: 3, mb: 2 }}>
            <li>
              <Typography variant="body1">Respond to your quote requests and inquiries</Typography>
            </li>
            <li>
              <Typography variant="body1">Provide and improve our cleaning services</Typography>
            </li>
            <li>
              <Typography variant="body1">
                Communicate with you about scheduling, service updates, and billing
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Send periodic emails regarding our services (you may opt out at any time)
              </Typography>
            </li>
            <li>
              <Typography variant="body1">Improve our website and user experience</Typography>
            </li>
          </Box>

          <Typography variant="h4" sx={{ mt: 4, mb: 2 }}>
            Information Sharing
          </Typography>
          <Typography variant="body1" paragraph>
            We do not sell, trade, or rent your personal information to third parties. We may share
            your information only in the following circumstances:
          </Typography>
          <Box component="ul" sx={{ pl: 3, mb: 2 }}>
            <li>
              <Typography variant="body1">With your consent</Typography>
            </li>
            <li>
              <Typography variant="body1">To comply with legal obligations</Typography>
            </li>
            <li>
              <Typography variant="body1">To protect our rights and safety</Typography>
            </li>
            <li>
              <Typography variant="body1">
                With service providers who assist in our operations (under strict confidentiality
                agreements)
              </Typography>
            </li>
          </Box>

          <Typography variant="h4" sx={{ mt: 4, mb: 2 }}>
            Data Security
          </Typography>
          <Typography variant="body1" paragraph>
            We implement appropriate technical and organizational security measures to protect your
            personal information. However, no method of transmission over the Internet is 100%
            secure, and we cannot guarantee absolute security.
          </Typography>

          <Typography variant="h4" sx={{ mt: 4, mb: 2 }}>
            Data Retention
          </Typography>
          <Typography variant="body1" paragraph>
            We retain your personal information only for as long as necessary to fulfill the
            purposes for which it was collected, including to satisfy legal, accounting, or
            reporting requirements.
          </Typography>

          <Typography variant="h4" sx={{ mt: 4, mb: 2 }}>
            Your Rights
          </Typography>
          <Typography variant="body1" paragraph>
            Depending on your location, you may have certain rights regarding your personal
            information, including the right to access, correct, or delete your data. To exercise
            these rights, please contact us using the information below.
          </Typography>

          <Typography variant="h4" sx={{ mt: 4, mb: 2 }}>
            Cookies
          </Typography>
          <Typography variant="body1" paragraph>
            Our website may use cookies to enhance your browsing experience. You can set your
            browser to refuse cookies, but some features of our website may not function properly
            without them.
          </Typography>

          <Typography variant="h4" sx={{ mt: 4, mb: 2 }}>
            Changes to This Policy
          </Typography>
          <Typography variant="body1" paragraph>
            We may update this Privacy Policy from time to time. We will notify you of any changes
            by posting the new Privacy Policy on this page and updating the "Last updated" date.
          </Typography>

          <Typography variant="h4" sx={{ mt: 4, mb: 2 }}>
            Contact Us
          </Typography>
          <Typography variant="body1" paragraph>
            If you have questions about this Privacy Policy or our data practices, please contact
            us:
          </Typography>
          <Typography variant="body1">
            Email:{' '}
            <MuiLink href={`mailto:${BUSINESS_INFO.email}`}>{BUSINESS_INFO.email}</MuiLink>
          </Typography>
          <Typography variant="body1">
            Phone:{' '}
            <MuiLink href={`tel:${BUSINESS_INFO.phone}`}>{BUSINESS_INFO.phoneFormatted}</MuiLink>
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            <MuiLink component={Link} to="/contact">
              Contact Us Online
            </MuiLink>
          </Typography>
        </Container>
      </Box>
    </>
  );
}
