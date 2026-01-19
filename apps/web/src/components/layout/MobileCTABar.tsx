import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import PhoneIcon from '@mui/icons-material/Phone';
import { Box, Button, Paper, useMediaQuery, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import { BUSINESS_INFO } from '../../constants/business';

export function MobileCTABar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  if (!isMobile) {
    return null;
  }

  return (
    <Paper
      elevation={8}
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: theme.zIndex.appBar,
        borderRadius: 0,
        borderTop: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          gap: 1,
          p: 1.5,
        }}
      >
        <Button
          variant="contained"
          color="secondary"
          fullWidth
          size="large"
          component="a"
          href={`tel:${BUSINESS_INFO.phone}`}
          startIcon={<PhoneIcon />}
          sx={{ py: 1.5 }}
        >
          Call Now
        </Button>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          size="large"
          component={Link}
          to="/contact"
          startIcon={<FormatQuoteIcon />}
          sx={{ py: 1.5 }}
        >
          Get Quote
        </Button>
      </Box>
    </Paper>
  );
}
