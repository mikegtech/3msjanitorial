import { alpha, styled, useTheme } from '@mui/material/styles';
import type { ReactNode } from 'react';
import { brandColors } from '../../theme';

interface CalendarThemeShellProps {
  children: ReactNode;
}

/**
 * MUI-themed wrapper for FullCalendar
 * Derives CSS variables from the MUI theme and applies consistent styling
 */
const CalendarWrapper = styled('div')(({ theme }) => ({
  // CSS custom properties derived from MUI theme
  '--fc-border-color': theme.palette.divider,
  '--fc-page-bg-color': theme.palette.background.paper,
  '--fc-neutral-bg-color': theme.palette.grey[50],
  '--fc-today-bg-color': alpha(brandColors.lightWash, 0.3),
  '--fc-highlight-color': alpha(brandColors.accent, 0.15),

  // Event colors
  '--fc-event-bg-color': brandColors.navy,
  '--fc-event-border-color': brandColors.deep,
  '--fc-event-text-color': '#ffffff',

  // Button colors
  '--fc-button-bg-color': brandColors.navy,
  '--fc-button-border-color': brandColors.navy,
  '--fc-button-text-color': '#ffffff',
  '--fc-button-hover-bg-color': brandColors.deep,
  '--fc-button-hover-border-color': brandColors.deep,
  '--fc-button-active-bg-color': brandColors.deep,
  '--fc-button-active-border-color': brandColors.deep,

  // Now indicator
  '--fc-now-indicator-color': theme.palette.error.main,

  // Apply styles to calendar container
  '& .fc': {
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.body2.fontSize,
  },

  // Toolbar styling
  '& .fc-toolbar': {
    marginBottom: theme.spacing(2),
    flexWrap: 'wrap',
    gap: theme.spacing(1),
  },

  '& .fc-toolbar-title': {
    fontFamily: theme.typography.h5.fontFamily,
    fontWeight: theme.typography.h5.fontWeight,
    fontSize: theme.typography.h5.fontSize,
    color: theme.palette.text.primary,
  },

  // Button styling to match MUI buttons
  '& .fc-button': {
    fontFamily: theme.typography.button.fontFamily,
    fontWeight: theme.typography.button.fontWeight,
    fontSize: '0.875rem',
    textTransform: 'none',
    borderRadius: `${theme.shape.borderRadius}px`,
    padding: '6px 16px',
    transition: theme.transitions.create(
      ['background-color', 'box-shadow', 'border-color'],
      { duration: theme.transitions.duration.short }
    ),
    boxShadow: 'none',

    '&:focus': {
      boxShadow: `0 0 0 2px ${alpha(brandColors.navy, 0.25)}`,
      outline: 'none',
    },

    '&:not(:disabled):active': {
      transform: 'scale(0.98)',
    },
  },

  '& .fc-button-primary': {
    backgroundColor: brandColors.navy,
    borderColor: brandColors.navy,
    color: '#ffffff',

    '&:hover': {
      backgroundColor: brandColors.deep,
      borderColor: brandColors.deep,
    },

    '&:disabled': {
      backgroundColor: theme.palette.grey[300],
      borderColor: theme.palette.grey[300],
      color: theme.palette.grey[500],
    },
  },

  '& .fc-button-primary:not(:disabled).fc-button-active': {
    backgroundColor: brandColors.deep,
    borderColor: brandColors.deep,

    '&:focus': {
      boxShadow: `0 0 0 2px ${alpha(brandColors.deep, 0.4)}`,
    },
  },

  // Button group styling
  '& .fc-button-group': {
    borderRadius: `${theme.shape.borderRadius}px`,
    overflow: 'hidden',

    '& .fc-button': {
      borderRadius: 0,

      '&:first-of-type': {
        borderTopLeftRadius: `${theme.shape.borderRadius}px`,
        borderBottomLeftRadius: `${theme.shape.borderRadius}px`,
      },

      '&:last-of-type': {
        borderTopRightRadius: `${theme.shape.borderRadius}px`,
        borderBottomRightRadius: `${theme.shape.borderRadius}px`,
      },
    },
  },

  // Day header styling
  '& .fc-col-header-cell': {
    backgroundColor: theme.palette.grey[50],
    padding: theme.spacing(1),

    '& .fc-col-header-cell-cushion': {
      fontWeight: 600,
      color: theme.palette.text.secondary,
      textDecoration: 'none',
    },
  },

  // Day cell styling
  '& .fc-daygrid-day': {
    transition: theme.transitions.create('background-color', {
      duration: theme.transitions.duration.short,
    }),
  },

  '& .fc-daygrid-day-number': {
    fontWeight: 500,
    color: theme.palette.text.primary,
    textDecoration: 'none',
    padding: theme.spacing(0.5, 1),
  },

  '& .fc-day-today': {
    backgroundColor: `${alpha(brandColors.lightWash, 0.3)} !important`,

    '& .fc-daygrid-day-number': {
      fontWeight: 700,
      color: brandColors.navy,
    },
  },

  '& .fc-day-other .fc-daygrid-day-number': {
    color: theme.palette.text.disabled,
  },

  // Event styling
  '& .fc-event': {
    borderRadius: `${Number(theme.shape.borderRadius) / 2}px`,
    border: 'none',
    padding: '2px 4px',
    fontSize: '0.8125rem',
    fontWeight: 500,
    cursor: 'pointer',
    transition: theme.transitions.create(['box-shadow', 'transform'], {
      duration: theme.transitions.duration.short,
    }),

    '&:hover': {
      boxShadow: theme.shadows[3],
      transform: 'scale(1.02)',
    },
  },

  '& .fc-event-main': {
    padding: '2px 4px',
  },

  '& .fc-daygrid-event': {
    marginTop: '2px',
  },

  // Time grid specific
  '& .fc-timegrid-slot': {
    height: '48px',
  },

  '& .fc-timegrid-slot-label-cushion': {
    fontWeight: 500,
    color: theme.palette.text.secondary,
    fontSize: '0.75rem',
  },

  '& .fc-timegrid-event': {
    borderRadius: `${Number(theme.shape.borderRadius) / 2}px`,
  },

  // Now indicator
  '& .fc-timegrid-now-indicator-line': {
    borderColor: theme.palette.error.main,
    borderWidth: '2px',
  },

  '& .fc-timegrid-now-indicator-arrow': {
    borderColor: theme.palette.error.main,
    borderWidth: '5px',
  },

  // Scrollbar styling
  '& .fc-scroller': {
    scrollbarWidth: 'thin',
    scrollbarColor: `${theme.palette.grey[300]} transparent`,

    '&::-webkit-scrollbar': {
      width: '8px',
      height: '8px',
    },

    '&::-webkit-scrollbar-track': {
      background: 'transparent',
    },

    '&::-webkit-scrollbar-thumb': {
      backgroundColor: theme.palette.grey[300],
      borderRadius: '4px',

      '&:hover': {
        backgroundColor: theme.palette.grey[400],
      },
    },
  },

  // Popover styling (for more events popover)
  '& .fc-popover': {
    borderRadius: `${theme.shape.borderRadius}px`,
    boxShadow: theme.shadows[4],
    border: `1px solid ${theme.palette.divider}`,
    overflow: 'hidden',
  },

  '& .fc-popover-header': {
    backgroundColor: theme.palette.grey[100],
    padding: theme.spacing(1, 1.5),
    fontWeight: 600,
  },

  '& .fc-popover-body': {
    padding: theme.spacing(1),
  },

  // Recurring event accent color
  '& .fc-event[data-recurring="true"]': {
    backgroundColor: brandColors.accent,
    borderColor: brandColors.accent,
  },
}));

export function CalendarThemeShell({ children }: CalendarThemeShellProps) {
  const theme = useTheme();

  return (
    <CalendarWrapper className="fc-mui" data-theme={theme.palette.mode}>
      {children}
    </CalendarWrapper>
  );
}
