import { Box, Container, Link as MuiLink, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { BUSINESS_INFO } from '../constants/business';

export function Terms() {
  return (
    <>
      <Box sx={{ bgcolor: 'primary.main', color: 'white', py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Typography variant="h1" sx={{ fontSize: { xs: '2rem', md: '3rem' } }}>
            Terms of Service
          </Typography>
          <Typography variant="h6" sx={{ mt: 2, fontWeight: 400, opacity: 0.95 }}>
            Last updated: January 2026
          </Typography>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="md">
          <Typography variant="body1" paragraph>
            Welcome to 3MS Janitorial Services. By accessing our website or using our services, you
            agree to be bound by these Terms of Service. Please read them carefully.
          </Typography>

          <Typography variant="h4" sx={{ mt: 4, mb: 2 }}>
            1. Services
          </Typography>
          <Typography variant="body1" paragraph>
            3MS Janitorial Services provides commercial cleaning and janitorial services to
            businesses in Greenville, TX and surrounding areas. The specific services, schedule, and
            pricing will be outlined in a separate service agreement between 3MS Janitorial Services
            and the client.
          </Typography>

          <Typography variant="h4" sx={{ mt: 4, mb: 2 }}>
            2. Quote Requests
          </Typography>
          <Typography variant="body1" paragraph>
            Submitting a quote request through our website does not constitute a binding agreement.
            All quotes are estimates based on information provided and are subject to change after
            an on-site assessment. Final pricing and terms will be confirmed in a written service
            agreement.
          </Typography>

          <Typography variant="h4" sx={{ mt: 4, mb: 2 }}>
            3. Use of Website
          </Typography>
          <Typography variant="body1" paragraph>
            You may use our website for lawful purposes only. You agree not to:
          </Typography>
          <Box component="ul" sx={{ pl: 3, mb: 2 }}>
            <li>
              <Typography variant="body1">
                Use the website in any way that violates applicable laws or regulations
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Attempt to gain unauthorized access to any part of the website
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Submit false or misleading information through our forms
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Interfere with the proper working of the website
              </Typography>
            </li>
          </Box>

          <Typography variant="h4" sx={{ mt: 4, mb: 2 }}>
            4. Intellectual Property
          </Typography>
          <Typography variant="body1" paragraph>
            All content on this website, including text, graphics, logos, and images, is the
            property of 3MS Janitorial Services and is protected by intellectual property laws. You
            may not reproduce, distribute, or create derivative works from our content without prior
            written permission.
          </Typography>

          <Typography variant="h4" sx={{ mt: 4, mb: 2 }}>
            5. Insurance and Bonding
          </Typography>
          <Typography variant="body1" paragraph>
            3MS Janitorial Services maintains comprehensive general liability insurance and is
            bonded for your protection. Proof of insurance is available upon request.
          </Typography>

          <Typography variant="h4" sx={{ mt: 4, mb: 2 }}>
            6. Limitation of Liability
          </Typography>
          <Typography variant="body1" paragraph>
            To the fullest extent permitted by law, 3MS Janitorial Services shall not be liable for
            any indirect, incidental, special, consequential, or punitive damages arising from your
            use of our website or services. Our total liability shall not exceed the amount paid for
            services in the six months preceding any claim.
          </Typography>

          <Typography variant="h4" sx={{ mt: 4, mb: 2 }}>
            7. Indemnification
          </Typography>
          <Typography variant="body1" paragraph>
            You agree to indemnify and hold harmless 3MS Janitorial Services, its officers,
            employees, and agents from any claims, damages, or expenses arising from your violation
            of these Terms or your use of our services.
          </Typography>

          <Typography variant="h4" sx={{ mt: 4, mb: 2 }}>
            8. Service Agreements
          </Typography>
          <Typography variant="body1" paragraph>
            Cleaning services are governed by individual service agreements that outline specific
            terms including scope of work, schedule, pricing, payment terms, and cancellation
            policies. In the event of conflict between these Terms and a service agreement, the
            service agreement shall prevail.
          </Typography>

          <Typography variant="h4" sx={{ mt: 4, mb: 2 }}>
            9. Modifications
          </Typography>
          <Typography variant="body1" paragraph>
            We reserve the right to modify these Terms at any time. Changes will be effective
            immediately upon posting to the website. Your continued use of the website after changes
            are posted constitutes acceptance of the modified Terms.
          </Typography>

          <Typography variant="h4" sx={{ mt: 4, mb: 2 }}>
            10. Governing Law
          </Typography>
          <Typography variant="body1" paragraph>
            These Terms shall be governed by and construed in accordance with the laws of the State
            of Texas, without regard to its conflict of law provisions. Any disputes shall be
            resolved in the courts of Hunt County, Texas.
          </Typography>

          <Typography variant="h4" sx={{ mt: 4, mb: 2 }}>
            11. Contact Information
          </Typography>
          <Typography variant="body1" paragraph>
            For questions about these Terms of Service, please contact us:
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
