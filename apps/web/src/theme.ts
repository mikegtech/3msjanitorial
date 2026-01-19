import { alpha, createTheme } from '@mui/material/styles';

// =============================================================================
// COLOR PALETTE
// Aurora-inspired with professional service-industry tones
// =============================================================================

const palette = {
  primary: {
    main: '#1565C0',
    light: '#42a5f5',
    dark: '#0d47a1',
    50: '#e3f2fd',
    100: '#bbdefb',
    200: '#90caf9',
    300: '#64b5f6',
    400: '#42a5f5',
    500: '#1565C0',
    600: '#1565C0',
    700: '#1976d2',
    800: '#1565c0',
    900: '#0d47a1',
    contrastText: '#ffffff',
  },
  secondary: {
    main: '#2e7d32',
    light: '#4caf50',
    dark: '#1b5e20',
    50: '#e8f5e9',
    100: '#c8e6c9',
    200: '#a5d6a7',
    300: '#81c784',
    400: '#66bb6a',
    500: '#4caf50',
    600: '#43a047',
    700: '#388e3c',
    800: '#2e7d32',
    900: '#1b5e20',
    contrastText: '#ffffff',
  },
  grey: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
  },
};

// =============================================================================
// THEME CONFIGURATION
// =============================================================================

export const theme = createTheme({
  // ---------------------------------------------------------------------------
  // Palette
  // ---------------------------------------------------------------------------
  palette: {
    primary: palette.primary,
    secondary: palette.secondary,
    background: {
      default: '#fafbfc',
      paper: '#ffffff',
    },
    text: {
      primary: palette.grey[900],
      secondary: palette.grey[600],
    },
    divider: alpha(palette.grey[500], 0.12),
    error: {
      main: '#d32f2f',
      light: '#ef5350',
      dark: '#c62828',
    },
    warning: {
      main: '#ed6c02',
      light: '#ff9800',
      dark: '#e65100',
    },
    success: {
      main: '#2e7d32',
      light: '#4caf50',
      dark: '#1b5e20',
    },
    info: {
      main: '#0288d1',
      light: '#03a9f4',
      dark: '#01579b',
    },
    grey: palette.grey,
  },

  // ---------------------------------------------------------------------------
  // Typography
  // ---------------------------------------------------------------------------
  typography: {
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    h1: {
      fontFamily: '"Poppins", "Inter", sans-serif',
      fontWeight: 700,
      fontSize: '3rem',
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontFamily: '"Poppins", "Inter", sans-serif',
      fontWeight: 700,
      fontSize: '2.25rem',
      lineHeight: 1.3,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontFamily: '"Poppins", "Inter", sans-serif',
      fontWeight: 600,
      fontSize: '1.75rem',
      lineHeight: 1.4,
      letterSpacing: '-0.01em',
    },
    h4: {
      fontFamily: '"Poppins", "Inter", sans-serif',
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.4,
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.25rem',
      lineHeight: 1.5,
    },
    h6: {
      fontWeight: 600,
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    subtitle1: {
      fontSize: '1rem',
      fontWeight: 500,
      lineHeight: 1.5,
    },
    subtitle2: {
      fontSize: '0.875rem',
      fontWeight: 500,
      lineHeight: 1.5,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.7,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.7,
    },
    button: {
      fontWeight: 600,
      textTransform: 'none',
      letterSpacing: '0.01em',
    },
    caption: {
      fontSize: '0.75rem',
      lineHeight: 1.5,
      letterSpacing: '0.02em',
    },
    overline: {
      fontSize: '0.75rem',
      fontWeight: 600,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
    },
  },

  // ---------------------------------------------------------------------------
  // Shape
  // ---------------------------------------------------------------------------
  shape: {
    borderRadius: 12,
  },

  // ---------------------------------------------------------------------------
  // Shadows (refined for subtle depth)
  // ---------------------------------------------------------------------------
  shadows: [
    'none',
    '0 1px 2px 0 rgba(0,0,0,0.05)',
    '0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1)',
    '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)',
    '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)',
    '0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)',
    '0 25px 50px -12px rgba(0,0,0,0.25)',
    '0 25px 50px -12px rgba(0,0,0,0.25)',
    '0 25px 50px -12px rgba(0,0,0,0.25)',
    '0 25px 50px -12px rgba(0,0,0,0.25)',
    '0 25px 50px -12px rgba(0,0,0,0.25)',
    '0 25px 50px -12px rgba(0,0,0,0.25)',
    '0 25px 50px -12px rgba(0,0,0,0.25)',
    '0 25px 50px -12px rgba(0,0,0,0.25)',
    '0 25px 50px -12px rgba(0,0,0,0.25)',
    '0 25px 50px -12px rgba(0,0,0,0.25)',
    '0 25px 50px -12px rgba(0,0,0,0.25)',
    '0 25px 50px -12px rgba(0,0,0,0.25)',
    '0 25px 50px -12px rgba(0,0,0,0.25)',
    '0 25px 50px -12px rgba(0,0,0,0.25)',
    '0 25px 50px -12px rgba(0,0,0,0.25)',
    '0 25px 50px -12px rgba(0,0,0,0.25)',
    '0 25px 50px -12px rgba(0,0,0,0.25)',
    '0 25px 50px -12px rgba(0,0,0,0.25)',
    '0 25px 50px -12px rgba(0,0,0,0.25)',
  ],

  // ---------------------------------------------------------------------------
  // Transitions
  // ---------------------------------------------------------------------------
  transitions: {
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195,
    },
    easing: {
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
    },
  },

  // ---------------------------------------------------------------------------
  // Component Overrides
  // ---------------------------------------------------------------------------
  components: {
    // -------------------------------------------------------------------------
    // Global baseline
    // -------------------------------------------------------------------------
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          scrollBehavior: 'smooth',
        },
        body: {
          // CSS custom properties for FullCalendar theming (Phase 3)
          '--fc-border-color': palette.grey[200],
          '--fc-button-bg-color': palette.primary.main,
          '--fc-button-border-color': palette.primary.main,
          '--fc-button-hover-bg-color': palette.primary.dark,
          '--fc-button-hover-border-color': palette.primary.dark,
          '--fc-button-active-bg-color': palette.primary.dark,
          '--fc-event-bg-color': palette.primary.main,
          '--fc-event-border-color': palette.primary.main,
          '--fc-today-bg-color': alpha(palette.primary.main, 0.08),
          '--fc-neutral-bg-color': palette.grey[50],
          '--fc-page-bg-color': '#ffffff',
        },
      },
    },

    // -------------------------------------------------------------------------
    // Buttons
    // -------------------------------------------------------------------------
    MuiButton: {
      defaultProps: {
        disableElevation: false,
      },
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: 10,
          padding: '10px 24px',
          fontSize: '0.9375rem',
          fontWeight: 600,
          transition: theme.transitions.create(
            ['background-color', 'box-shadow', 'border-color', 'transform'],
            { duration: theme.transitions.duration.short }
          ),
          '&:active': {
            transform: 'scale(0.98)',
          },
        }),
        containedPrimary: ({ theme }) => ({
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
          boxShadow: `0 4px 14px 0 ${alpha(theme.palette.primary.main, 0.4)}`,
          '&:hover': {
            background: `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`,
            boxShadow: `0 6px 20px ${alpha(theme.palette.primary.main, 0.5)}`,
          },
        }),
        containedSecondary: ({ theme }) => ({
          background: `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, ${theme.palette.secondary.dark} 100%)`,
          boxShadow: `0 4px 14px 0 ${alpha(theme.palette.secondary.main, 0.4)}`,
          '&:hover': {
            background: `linear-gradient(135deg, ${theme.palette.secondary.light} 0%, ${theme.palette.secondary.main} 100%)`,
            boxShadow: `0 6px 20px ${alpha(theme.palette.secondary.main, 0.5)}`,
          },
        }),
        outlined: ({ theme }) => ({
          borderWidth: 1.5,
          '&:hover': {
            borderWidth: 1.5,
            backgroundColor: alpha(theme.palette.primary.main, 0.04),
          },
        }),
        outlinedPrimary: ({ theme }) => ({
          '&:hover': {
            backgroundColor: alpha(theme.palette.primary.main, 0.08),
          },
        }),
        text: ({ theme }) => ({
          '&:hover': {
            backgroundColor: alpha(theme.palette.primary.main, 0.08),
          },
        }),
        sizeLarge: {
          padding: '12px 32px',
          fontSize: '1rem',
        },
        sizeSmall: {
          padding: '6px 16px',
          fontSize: '0.8125rem',
        },
      },
    },

    // -------------------------------------------------------------------------
    // Cards
    // -------------------------------------------------------------------------
    MuiCard: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: 16,
          border: `1px solid ${theme.palette.divider}`,
          backgroundColor: theme.palette.background.paper,
          transition: theme.transitions.create(
            ['box-shadow', 'transform', 'border-color'],
            { duration: theme.transitions.duration.short }
          ),
          '&:hover': {
            borderColor: alpha(theme.palette.primary.main, 0.2),
            boxShadow: `0 12px 24px -4px ${alpha(theme.palette.grey[500], 0.16)}`,
            transform: 'translateY(-2px)',
          },
        }),
      },
    },

    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: 24,
          '&:last-child': {
            paddingBottom: 24,
          },
        },
      },
    },

    // -------------------------------------------------------------------------
    // Paper
    // -------------------------------------------------------------------------
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundImage: 'none',
          transition: theme.transitions.create(['box-shadow', 'border-color'], {
            duration: theme.transitions.duration.short,
          }),
        }),
        rounded: {
          borderRadius: 16,
        },
        outlined: ({ theme }) => ({
          borderColor: theme.palette.divider,
        }),
      },
    },

    // -------------------------------------------------------------------------
    // AppBar
    // -------------------------------------------------------------------------
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: alpha(theme.palette.background.paper, 0.8),
          backdropFilter: 'blur(8px)',
          borderBottom: `1px solid ${theme.palette.divider}`,
          transition: theme.transitions.create(['background-color', 'box-shadow'], {
            duration: theme.transitions.duration.short,
          }),
        }),
      },
    },

    // -------------------------------------------------------------------------
    // Toolbar
    // -------------------------------------------------------------------------
    MuiToolbar: {
      styleOverrides: {
        root: {
          minHeight: 64,
          '@media (min-width: 600px)': {
            minHeight: 72,
          },
        },
      },
    },

    // -------------------------------------------------------------------------
    // Container
    // -------------------------------------------------------------------------
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: 16,
          paddingRight: 16,
          '@media (min-width: 600px)': {
            paddingLeft: 24,
            paddingRight: 24,
          },
          '@media (min-width: 1200px)': {
            paddingLeft: 32,
            paddingRight: 32,
          },
        },
      },
    },

    // -------------------------------------------------------------------------
    // Typography
    // -------------------------------------------------------------------------
    MuiTypography: {
      styleOverrides: {
        gutterBottom: {
          marginBottom: '0.75em',
        },
      },
    },

    // -------------------------------------------------------------------------
    // Accordion
    // -------------------------------------------------------------------------
    MuiAccordion: {
      defaultProps: {
        elevation: 0,
        disableGutters: true,
      },
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.palette.background.paper,
          border: `1px solid ${theme.palette.divider}`,
          borderRadius: '12px !important',
          marginBottom: 8,
          '&:before': {
            display: 'none',
          },
          '&.Mui-expanded': {
            margin: '0 0 8px 0',
          },
          transition: theme.transitions.create(['border-color', 'box-shadow'], {
            duration: theme.transitions.duration.short,
          }),
          '&:hover': {
            borderColor: alpha(theme.palette.primary.main, 0.3),
          },
        }),
      },
    },

    MuiAccordionSummary: {
      styleOverrides: {
        root: ({ theme }) => ({
          padding: '0 20px',
          minHeight: 56,
          '&.Mui-expanded': {
            minHeight: 56,
          },
          transition: theme.transitions.create('background-color', {
            duration: theme.transitions.duration.short,
          }),
          '&:hover': {
            backgroundColor: alpha(theme.palette.primary.main, 0.04),
          },
        }),
        content: {
          margin: '16px 0',
          '&.Mui-expanded': {
            margin: '16px 0',
          },
        },
      },
    },

    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          padding: '0 20px 20px',
        },
      },
    },

    // -------------------------------------------------------------------------
    // TextField & Inputs
    // -------------------------------------------------------------------------
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: 10,
          transition: theme.transitions.create(['border-color', 'box-shadow'], {
            duration: theme.transitions.duration.short,
          }),
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: alpha(theme.palette.primary.main, 0.4),
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderWidth: 2,
          },
        }),
        notchedOutline: ({ theme }) => ({
          borderColor: theme.palette.divider,
          transition: theme.transitions.create('border-color', {
            duration: theme.transitions.duration.short,
          }),
        }),
      },
    },

    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          transition: theme.transitions.create(['color', 'transform'], {
            duration: theme.transitions.duration.short,
          }),
        }),
      },
    },

    // -------------------------------------------------------------------------
    // Select
    // -------------------------------------------------------------------------
    MuiSelect: {
      styleOverrides: {
        select: {
          borderRadius: 10,
        },
      },
    },

    // -------------------------------------------------------------------------
    // Checkbox & Radio
    // -------------------------------------------------------------------------
    MuiCheckbox: {
      styleOverrides: {
        root: ({ theme }) => ({
          transition: theme.transitions.create(['color', 'transform'], {
            duration: theme.transitions.duration.shortest,
          }),
          '&:hover': {
            transform: 'scale(1.1)',
          },
        }),
      },
    },

    // -------------------------------------------------------------------------
    // Avatar
    // -------------------------------------------------------------------------
    MuiAvatar: {
      styleOverrides: {
        root: {
          fontWeight: 600,
        },
      },
    },

    // -------------------------------------------------------------------------
    // Chip
    // -------------------------------------------------------------------------
    MuiChip: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: 8,
          fontWeight: 500,
          transition: theme.transitions.create(['background-color', 'box-shadow'], {
            duration: theme.transitions.duration.short,
          }),
        }),
        filled: ({ theme }) => ({
          '&:hover': {
            boxShadow: `0 2px 8px ${alpha(theme.palette.grey[500], 0.2)}`,
          },
        }),
      },
    },

    // -------------------------------------------------------------------------
    // Rating
    // -------------------------------------------------------------------------
    MuiRating: {
      styleOverrides: {
        root: {
          color: '#faaf00',
        },
      },
    },

    // -------------------------------------------------------------------------
    // Drawer
    // -------------------------------------------------------------------------
    MuiDrawer: {
      styleOverrides: {
        paper: {
          borderRadius: 0,
        },
      },
    },

    // -------------------------------------------------------------------------
    // List
    // -------------------------------------------------------------------------
    MuiListItemButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: 8,
          margin: '2px 8px',
          transition: theme.transitions.create(['background-color'], {
            duration: theme.transitions.duration.short,
          }),
          '&.Mui-selected': {
            backgroundColor: alpha(theme.palette.primary.main, 0.08),
            '&:hover': {
              backgroundColor: alpha(theme.palette.primary.main, 0.12),
            },
          },
        }),
      },
    },

    // -------------------------------------------------------------------------
    // Divider
    // -------------------------------------------------------------------------
    MuiDivider: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderColor: theme.palette.divider,
        }),
      },
    },

    // -------------------------------------------------------------------------
    // Alert
    // -------------------------------------------------------------------------
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
        standardSuccess: ({ theme }) => ({
          backgroundColor: alpha(theme.palette.success.main, 0.12),
          color: theme.palette.success.dark,
        }),
        standardError: ({ theme }) => ({
          backgroundColor: alpha(theme.palette.error.main, 0.12),
          color: theme.palette.error.dark,
        }),
        standardWarning: ({ theme }) => ({
          backgroundColor: alpha(theme.palette.warning.main, 0.12),
          color: theme.palette.warning.dark,
        }),
        standardInfo: ({ theme }) => ({
          backgroundColor: alpha(theme.palette.info.main, 0.12),
          color: theme.palette.info.dark,
        }),
      },
    },

    // -------------------------------------------------------------------------
    // Tooltip
    // -------------------------------------------------------------------------
    MuiTooltip: {
      styleOverrides: {
        tooltip: ({ theme }) => ({
          backgroundColor: theme.palette.grey[800],
          borderRadius: 8,
          fontSize: '0.75rem',
          padding: '8px 12px',
        }),
      },
    },

    // -------------------------------------------------------------------------
    // Tabs
    // -------------------------------------------------------------------------
    MuiTab: {
      styleOverrides: {
        root: ({ theme }) => ({
          textTransform: 'none',
          fontWeight: 500,
          minWidth: 'auto',
          padding: '12px 16px',
          transition: theme.transitions.create(['color', 'background-color'], {
            duration: theme.transitions.duration.short,
          }),
          '&:hover': {
            backgroundColor: alpha(theme.palette.primary.main, 0.04),
          },
        }),
      },
    },

    // -------------------------------------------------------------------------
    // Link
    // -------------------------------------------------------------------------
    MuiLink: {
      styleOverrides: {
        root: ({ theme }) => ({
          transition: theme.transitions.create('color', {
            duration: theme.transitions.duration.short,
          }),
        }),
      },
    },

    // -------------------------------------------------------------------------
    // Skeleton
    // -------------------------------------------------------------------------
    MuiSkeleton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
        rounded: {
          borderRadius: 12,
        },
      },
    },
  },
});

// =============================================================================
// THEME UTILITIES
// Export helper values for consistent usage across components
// =============================================================================

export const themeConstants = {
  headerHeight: {
    mobile: 64,
    desktop: 72,
  },
  sectionSpacing: {
    sm: { xs: 6, md: 8 },
    md: { xs: 8, md: 10 },
    lg: { xs: 10, md: 14 },
  },
  cardHover: {
    transform: 'translateY(-2px)',
    transition: 'all 0.3s ease',
  },
};
