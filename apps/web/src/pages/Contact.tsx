import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import SendIcon from '@mui/icons-material/Send';
import {
  Alert,
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  InputLabel,
  Link as MuiLink,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import type {
  Lead,
  LeadSource,
  ServiceFrequency,
  ServiceType,
} from '@3msjanitorial/contracts';
import {
  LeadSchema,
  leadSourceLabels,
  serviceFrequencyLabels,
  serviceTypeLabels,
} from '@3msjanitorial/contracts';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BUSINESS_INFO } from '../constants/business';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  companyName: string;
  serviceType: ServiceType | '';
  serviceFrequency: ServiceFrequency | '';
  squareFootage: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  preferredContactMethod: 'phone' | 'email' | 'text';
  preferredContactTime: 'morning' | 'afternoon' | 'evening' | 'anytime';
  message: string;
  howDidYouHear: LeadSource | '';
  agreedToTerms: boolean;
};

type FormErrors = Partial<Record<keyof FormData | 'address', string>>;

const initialFormData: FormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  companyName: '',
  serviceType: '',
  serviceFrequency: '',
  squareFootage: '',
  street: '',
  city: '',
  state: 'TX',
  zipCode: '',
  preferredContactMethod: 'phone',
  preferredContactTime: 'anytime',
  message: '',
  howDidYouHear: '',
  agreedToTerms: false,
};

export function Contact() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | { target: { name: string; value: unknown } }
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: checked }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    const leadData: Partial<Lead> = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      companyName: formData.companyName || undefined,
      serviceType: formData.serviceType || undefined,
      serviceFrequency: formData.serviceFrequency || undefined,
      squareFootage: formData.squareFootage || undefined,
      address: {
        street: formData.street,
        city: formData.city,
        state: formData.state,
        zipCode: formData.zipCode,
      },
      preferredContactMethod: formData.preferredContactMethod,
      preferredContactTime: formData.preferredContactTime,
      message: formData.message || undefined,
      howDidYouHear: formData.howDidYouHear || undefined,
      agreedToTerms: formData.agreedToTerms as true,
    };

    const result = LeadSchema.safeParse(leadData);

    if (!result.success) {
      const newErrors: FormErrors = {};
      for (const issue of result.error.issues) {
        const path = issue.path.join('.');
        if (path.startsWith('address.')) {
          const field = issue.path[1] as string;
          newErrors[field as keyof FormErrors] = issue.message;
        } else {
          newErrors[path as keyof FormErrors] = issue.message;
        }
      }
      setErrors(newErrors);
      setIsSubmitting(false);
      return;
    }

    const submission = {
      ...result.data,
      id: crypto.randomUUID(),
      submittedAt: new Date().toISOString(),
      status: 'new' as const,
    };

    const existingLeads = JSON.parse(localStorage.getItem('leads') || '[]');
    localStorage.setItem('leads', JSON.stringify([...existingLeads, submission]));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <>
        <Box sx={{ bgcolor: 'primary.main', color: 'white', py: { xs: 6, md: 8 } }}>
          <Container maxWidth="lg">
            <Typography variant="h1" sx={{ fontSize: { xs: '2rem', md: '3rem' } }}>
              Request a Quote
            </Typography>
          </Container>
        </Box>
        <Box sx={{ py: { xs: 8, md: 12 } }}>
          <Container maxWidth="sm">
            <Paper sx={{ p: 4, textAlign: 'center' }}>
              <CheckCircleIcon sx={{ fontSize: 64, color: 'success.main', mb: 2 }} />
              <Typography variant="h3" gutterBottom>
                Thank You!
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                Your quote request has been submitted successfully. We'll review your information
                and get back to you within one business day.
              </Typography>
              <Typography variant="body1" sx={{ mb: 4 }}>
                Need immediate assistance? Call us at{' '}
                <MuiLink href={`tel:${BUSINESS_INFO.phone}`}>
                  {BUSINESS_INFO.phoneFormatted}
                </MuiLink>
              </Typography>
              <Button variant="contained" component={Link} to="/">
                Return to Home
              </Button>
            </Paper>
          </Container>
        </Box>
      </>
    );
  }

  return (
    <>
      <Box sx={{ bgcolor: 'primary.main', color: 'white', py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Typography variant="h1" sx={{ fontSize: { xs: '2rem', md: '3rem' } }}>
            Request a Quote
          </Typography>
          <Typography variant="h6" sx={{ mt: 2, fontWeight: 400, opacity: 0.95 }}>
            Fill out the form below and we'll get back to you within one business day.
          </Typography>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            <Grid size={{ xs: 12, md: 8 }}>
              <Paper sx={{ p: { xs: 3, md: 4 } }}>
                <Typography variant="h4" gutterBottom>
                  Tell Us About Your Needs
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
                  Fields marked with * are required
                </Typography>

                <Box component="form" onSubmit={handleSubmit} noValidate>
                  <Grid container spacing={3}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        required
                        fullWidth
                        label="First Name"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        error={!!errors.firstName}
                        helperText={errors.firstName}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        required
                        fullWidth
                        label="Last Name"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        error={!!errors.lastName}
                        helperText={errors.lastName}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        required
                        fullWidth
                        label="Email Address"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        error={!!errors.email}
                        helperText={errors.email}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        required
                        fullWidth
                        label="Phone Number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        error={!!errors.phone}
                        helperText={errors.phone}
                        placeholder="(903) 555-1234"
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <TextField
                        fullWidth
                        label="Company/Business Name"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        error={!!errors.companyName}
                        helperText={errors.companyName}
                      />
                    </Grid>

                    <Grid size={{ xs: 12 }}>
                      <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
                        Property Information
                      </Typography>
                    </Grid>

                    <Grid size={{ xs: 12 }}>
                      <TextField
                        required
                        fullWidth
                        label="Street Address"
                        name="street"
                        value={formData.street}
                        onChange={handleChange}
                        error={!!errors.street}
                        helperText={errors.street}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 5 }}>
                      <TextField
                        required
                        fullWidth
                        label="City"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        error={!!errors.city}
                        helperText={errors.city}
                      />
                    </Grid>
                    <Grid size={{ xs: 6, sm: 3 }}>
                      <TextField
                        required
                        fullWidth
                        label="State"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        error={!!errors.state}
                        helperText={errors.state}
                        inputProps={{ maxLength: 2 }}
                      />
                    </Grid>
                    <Grid size={{ xs: 6, sm: 4 }}>
                      <TextField
                        required
                        fullWidth
                        label="ZIP Code"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleChange}
                        error={!!errors.zipCode}
                        helperText={errors.zipCode}
                        placeholder="75401"
                      />
                    </Grid>

                    <Grid size={{ xs: 12 }}>
                      <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
                        Service Details
                      </Typography>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6 }}>
                      <FormControl fullWidth required error={!!errors.serviceType}>
                        <InputLabel>Type of Property</InputLabel>
                        <Select
                          name="serviceType"
                          value={formData.serviceType}
                          label="Type of Property"
                          onChange={(e) =>
                            handleChange({ target: { name: 'serviceType', value: e.target.value } })
                          }
                        >
                          {Object.entries(serviceTypeLabels).map(([value, label]) => (
                            <MenuItem key={value} value={value}>
                              {label}
                            </MenuItem>
                          ))}
                        </Select>
                        {errors.serviceType && (
                          <FormHelperText>{errors.serviceType}</FormHelperText>
                        )}
                      </FormControl>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <FormControl fullWidth required error={!!errors.serviceFrequency}>
                        <InputLabel>Service Frequency</InputLabel>
                        <Select
                          name="serviceFrequency"
                          value={formData.serviceFrequency}
                          label="Service Frequency"
                          onChange={(e) =>
                            handleChange({
                              target: { name: 'serviceFrequency', value: e.target.value },
                            })
                          }
                        >
                          {Object.entries(serviceFrequencyLabels).map(([value, label]) => (
                            <MenuItem key={value} value={value}>
                              {label}
                            </MenuItem>
                          ))}
                        </Select>
                        {errors.serviceFrequency && (
                          <FormHelperText>{errors.serviceFrequency}</FormHelperText>
                        )}
                      </FormControl>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        label="Approximate Square Footage"
                        name="squareFootage"
                        value={formData.squareFootage}
                        onChange={handleChange}
                        placeholder="e.g., 5,000 sq ft"
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <FormControl fullWidth>
                        <InputLabel>How Did You Hear About Us?</InputLabel>
                        <Select
                          name="howDidYouHear"
                          value={formData.howDidYouHear}
                          label="How Did You Hear About Us?"
                          onChange={(e) =>
                            handleChange({
                              target: { name: 'howDidYouHear', value: e.target.value },
                            })
                          }
                        >
                          {Object.entries(leadSourceLabels).map(([value, label]) => (
                            <MenuItem key={value} value={value}>
                              {label}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Grid>

                    <Grid size={{ xs: 12 }}>
                      <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
                        Contact Preferences
                      </Typography>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6 }}>
                      <FormControl fullWidth>
                        <InputLabel>Preferred Contact Method</InputLabel>
                        <Select
                          name="preferredContactMethod"
                          value={formData.preferredContactMethod}
                          label="Preferred Contact Method"
                          onChange={(e) =>
                            handleChange({
                              target: { name: 'preferredContactMethod', value: e.target.value },
                            })
                          }
                        >
                          <MenuItem value="phone">Phone Call</MenuItem>
                          <MenuItem value="email">Email</MenuItem>
                          <MenuItem value="text">Text Message</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <FormControl fullWidth>
                        <InputLabel>Best Time to Contact</InputLabel>
                        <Select
                          name="preferredContactTime"
                          value={formData.preferredContactTime}
                          label="Best Time to Contact"
                          onChange={(e) =>
                            handleChange({
                              target: { name: 'preferredContactTime', value: e.target.value },
                            })
                          }
                        >
                          <MenuItem value="morning">Morning (8am - 12pm)</MenuItem>
                          <MenuItem value="afternoon">Afternoon (12pm - 5pm)</MenuItem>
                          <MenuItem value="evening">Evening (5pm - 8pm)</MenuItem>
                          <MenuItem value="anytime">Anytime</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>

                    <Grid size={{ xs: 12 }}>
                      <TextField
                        fullWidth
                        multiline
                        rows={4}
                        label="Additional Information"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about any specific cleaning needs, special requirements, or questions you have..."
                      />
                    </Grid>

                    <Grid size={{ xs: 12 }}>
                      <FormControl error={!!errors.agreedToTerms}>
                        <FormControlLabel
                          control={
                            <Checkbox
                              name="agreedToTerms"
                              checked={formData.agreedToTerms}
                              onChange={handleCheckboxChange}
                            />
                          }
                          label={
                            <Typography variant="body2">
                              I agree to the{' '}
                              <MuiLink component={Link} to="/terms">
                                Terms of Service
                              </MuiLink>{' '}
                              and{' '}
                              <MuiLink component={Link} to="/privacy">
                                Privacy Policy
                              </MuiLink>{' '}
                              *
                            </Typography>
                          }
                        />
                        {errors.agreedToTerms && (
                          <FormHelperText>{errors.agreedToTerms}</FormHelperText>
                        )}
                      </FormControl>
                    </Grid>

                    {Object.keys(errors).length > 0 && (
                      <Grid size={{ xs: 12 }}>
                        <Alert severity="error">
                          Please correct the errors above before submitting.
                        </Alert>
                      </Grid>
                    )}

                    <Grid size={{ xs: 12 }}>
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        size="large"
                        disabled={isSubmitting}
                        endIcon={<SendIcon />}
                        sx={{ px: 4 }}
                      >
                        {isSubmitting ? 'Submitting...' : 'Submit Quote Request'}
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Paper>
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <Paper sx={{ p: 3, mb: 3 }}>
                <Typography variant="h5" gutterBottom>
                  Contact Information
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <PhoneIcon color="primary" />
                    <Box>
                      <Typography variant="body2" color="text.secondary">
                        Phone
                      </Typography>
                      <MuiLink href={`tel:${BUSINESS_INFO.phone}`} variant="body1">
                        {BUSINESS_INFO.phoneFormatted}
                      </MuiLink>
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <EmailIcon color="primary" />
                    <Box>
                      <Typography variant="body2" color="text.secondary">
                        Email
                      </Typography>
                      <MuiLink href={`mailto:${BUSINESS_INFO.email}`} variant="body1">
                        {BUSINESS_INFO.email}
                      </MuiLink>
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                    <LocationOnIcon color="primary" sx={{ mt: 0.25 }} />
                    <Box>
                      <Typography variant="body2" color="text.secondary">
                        Service Area
                      </Typography>
                      <Typography variant="body1">{BUSINESS_INFO.serviceArea}</Typography>
                    </Box>
                  </Box>
                </Box>
              </Paper>

              <Paper sx={{ p: 3, bgcolor: 'grey.50' }}>
                <Typography variant="h6" gutterBottom>
                  What Happens Next?
                </Typography>
                <Box component="ol" sx={{ pl: 2.5, m: 0 }}>
                  <li>
                    <Typography variant="body2" sx={{ mb: 1.5 }}>
                      <strong>We review your request</strong> and reach out within one business day.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body2" sx={{ mb: 1.5 }}>
                      <strong>We schedule a walkthrough</strong> of your property at your
                      convenience.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body2" sx={{ mb: 1.5 }}>
                      <strong>You receive a detailed quote</strong> customized to your specific
                      needs.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body2">
                      <strong>Once approved, we get started</strong> keeping your space spotless!
                    </Typography>
                  </li>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
