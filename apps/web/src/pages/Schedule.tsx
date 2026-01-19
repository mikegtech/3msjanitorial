import type { EventClickArg, EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import FullCalendar from '@fullcalendar/react';
import rrulePlugin from '@fullcalendar/rrule';
import timeGridPlugin from '@fullcalendar/timegrid';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CloseIcon from '@mui/icons-material/Close';
import EventRepeatIcon from '@mui/icons-material/EventRepeat';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import RefreshIcon from '@mui/icons-material/Refresh';
import SaveIcon from '@mui/icons-material/Save';
import ScheduleIcon from '@mui/icons-material/Schedule';
import {
  Alert,
  AlertTitle,
  Box,
  Button,
  Chip,
  Container,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Snackbar,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import {
  type ScheduleImport,
  ScheduleImportSchema,
  exampleScheduleImport,
} from '@3msjanitorial/contracts';
import { CalendarThemeShell } from '../components/calendar/CalendarThemeShell';
import { brandColors } from '../theme';
import {
  isScheduleEventExtendedProps,
  scheduleToFullCalendarEvents,
} from '../utils/scheduleAdapter';

const STORAGE_KEY = '3ms-schedule-json';

interface ValidationError {
  path: string;
  message: string;
}

interface EventDialogData {
  title: string;
  start: string;
  end?: string;
  location?: string;
  description?: string;
  isRecurring: boolean;
  metadata?: Record<string, unknown>;
}

export function Schedule() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const calendarRef = useRef<FullCalendar>(null);

  // State
  const [jsonText, setJsonText] = useState('');
  const [validationErrors, setValidationErrors] = useState<ValidationError[]>(
    []
  );
  const [isValid, setIsValid] = useState(false);
  const [events, setEvents] = useState<EventInput[]>([]);
  const [snackbar, setSnackbar] = useState<{
    open: boolean;
    message: string;
    severity: 'success' | 'error' | 'info';
  }>({ open: false, message: '', severity: 'info' });
  const [eventDialog, setEventDialog] = useState<{
    open: boolean;
    data: EventDialogData | null;
  }>({ open: false, data: null });

  // Load from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setJsonText(stored);
      validateAndParse(stored);
    } else {
      // Fall back to example
      const exampleJson = JSON.stringify(exampleScheduleImport, null, 2);
      setJsonText(exampleJson);
      validateAndParse(exampleJson);
    }
  }, []);

  // Validate and parse JSON
  const validateAndParse = useCallback((text: string) => {
    setValidationErrors([]);
    setIsValid(false);
    setEvents([]);

    if (!text.trim()) {
      setValidationErrors([{ path: '', message: 'JSON input is empty' }]);
      return;
    }

    // Try to parse JSON
    let parsed: unknown;
    try {
      parsed = JSON.parse(text);
    } catch (e) {
      const error = e as SyntaxError;
      setValidationErrors([
        {
          path: '',
          message: `Invalid JSON: ${error.message}`,
        },
      ]);
      return;
    }

    // Validate with Zod
    const result = ScheduleImportSchema.safeParse(parsed);

    if (!result.success) {
      const errors: ValidationError[] = result.error.errors.map((err) => ({
        path: err.path.join('.') || 'root',
        message: err.message,
      }));
      setValidationErrors(errors);
      return;
    }

    // Successfully validated
    setIsValid(true);
    const schedule: ScheduleImport = result.data;
    const fcEvents = scheduleToFullCalendarEvents(schedule);
    setEvents(fcEvents);
  }, []);

  // Handle text change
  const handleJsonChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setJsonText(e.target.value);
      // Clear validation state when editing
      setIsValid(false);
      setValidationErrors([]);
    },
    []
  );

  // Validate button
  const handleValidate = useCallback(() => {
    validateAndParse(jsonText);
    if (validationErrors.length === 0 && jsonText.trim()) {
      setSnackbar({
        open: true,
        message: 'Schedule validated successfully!',
        severity: 'success',
      });
    }
  }, [jsonText, validateAndParse, validationErrors.length]);

  // Save button
  const handleSave = useCallback(() => {
    if (!isValid) {
      setSnackbar({
        open: true,
        message: 'Please validate the JSON first',
        severity: 'error',
      });
      return;
    }
    localStorage.setItem(STORAGE_KEY, jsonText);
    setSnackbar({
      open: true,
      message: 'Schedule saved to local storage',
      severity: 'success',
    });
  }, [isValid, jsonText]);

  // Reset to example
  const handleReset = useCallback(() => {
    const exampleJson = JSON.stringify(exampleScheduleImport, null, 2);
    setJsonText(exampleJson);
    validateAndParse(exampleJson);
    setSnackbar({
      open: true,
      message: 'Reset to example schedule',
      severity: 'info',
    });
  }, [validateAndParse]);

  // Import file
  const handleImportFile = useCallback(() => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json,application/json';
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (event) => {
        const text = event.target?.result as string;
        setJsonText(text);
        validateAndParse(text);
        setSnackbar({
          open: true,
          message: `Imported ${file.name}`,
          severity: 'info',
        });
      };
      reader.onerror = () => {
        setSnackbar({
          open: true,
          message: 'Failed to read file',
          severity: 'error',
        });
      };
      reader.readAsText(file);
    };
    input.click();
  }, [validateAndParse]);

  // Event click handler
  const handleEventClick = useCallback((info: EventClickArg) => {
    const { event } = info;
    const extendedProps = event.extendedProps as unknown;

    let location: string | undefined;
    let description: string | undefined;
    let metadata: Record<string, unknown> | undefined;
    let isRecurring = false;

    if (isScheduleEventExtendedProps(extendedProps)) {
      location = extendedProps.location;
      description = extendedProps.description;
      metadata = extendedProps.metadata;
      isRecurring = extendedProps.isRecurring;
    }

    const data: EventDialogData = {
      title: event.title,
      start: event.start?.toISOString() || '',
      end: event.end?.toISOString(),
      location,
      description,
      isRecurring,
      metadata,
    };

    setEventDialog({ open: true, data });
  }, []);

  // Format date for display
  const formatDateTime = useCallback((isoString: string) => {
    const date = new Date(isoString);
    return date.toLocaleString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      timeZoneName: 'short',
    });
  }, []);

  // Event count
  const eventCounts = useMemo(() => {
    let oneOff = 0;
    let recurring = 0;
    for (const event of events) {
      if (event.rrule) {
        recurring++;
      } else {
        oneOff++;
      }
    }
    return { oneOff, recurring, total: events.length };
  }, [events]);

  return (
    <Box sx={{ py: { xs: 3, md: 4 } }}>
      <Container maxWidth="xl">
        {/* Page Header */}
        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}
          >
            <CalendarMonthIcon
              sx={{ fontSize: '1.2em', color: 'primary.main' }}
            />
            Schedule Preview
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Import and visualize cleaning schedules. Paste JSON or upload a file
            to see events rendered on the calendar.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {/* Left Panel - JSON Editor */}
          <Grid size={{ xs: 12, md: 5, lg: 4 }}>
            <Paper
              variant="outlined"
              sx={{ p: 2, position: 'sticky', top: 88 }}
            >
              <Typography variant="h6" gutterBottom>
                Schedule JSON
              </Typography>

              <TextField
                multiline
                fullWidth
                minRows={isMobile ? 8 : 16}
                maxRows={isMobile ? 12 : 24}
                value={jsonText}
                onChange={handleJsonChange}
                placeholder="Paste schedule JSON here..."
                sx={{
                  mb: 2,
                  '& .MuiInputBase-root': {
                    fontFamily: 'monospace',
                    fontSize: '0.8125rem',
                  },
                }}
                error={validationErrors.length > 0}
              />

              {/* Action Buttons */}
              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                <Button
                  variant="contained"
                  onClick={handleValidate}
                  startIcon={<CheckCircleIcon />}
                  size="small"
                >
                  Validate
                </Button>
                <Button
                  variant="contained"
                  onClick={handleSave}
                  startIcon={<SaveIcon />}
                  size="small"
                  disabled={!isValid}
                >
                  Save
                </Button>
                <Button
                  variant="outlined"
                  onClick={handleReset}
                  startIcon={<RefreshIcon />}
                  size="small"
                >
                  Reset
                </Button>
                <Button
                  variant="outlined"
                  onClick={handleImportFile}
                  startIcon={<FileUploadIcon />}
                  size="small"
                >
                  Import
                </Button>
              </Stack>

              {/* Validation Errors */}
              {validationErrors.length > 0 && (
                <Alert severity="error" sx={{ mt: 2 }}>
                  <AlertTitle>Validation Errors</AlertTitle>
                  <List dense disablePadding>
                    {validationErrors.map((err, idx) => (
                      <ListItem
                        key={`${err.path}-${idx}`}
                        disablePadding
                        sx={{ py: 0.25 }}
                      >
                        <ListItemText
                          primary={
                            <Typography variant="body2" component="span">
                              {err.path && (
                                <Box
                                  component="code"
                                  sx={{
                                    bgcolor: 'error.light',
                                    color: 'error.contrastText',
                                    px: 0.5,
                                    borderRadius: 0.5,
                                    mr: 1,
                                    fontSize: '0.75rem',
                                  }}
                                >
                                  {err.path}
                                </Box>
                              )}
                              {err.message}
                            </Typography>
                          }
                        />
                      </ListItem>
                    ))}
                  </List>
                </Alert>
              )}

              {/* Success State */}
              {isValid && (
                <Alert severity="success" sx={{ mt: 2 }}>
                  <AlertTitle>Valid Schedule</AlertTitle>
                  <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
                    <Chip
                      size="small"
                      label={`${eventCounts.oneOff} one-off`}
                      icon={<ScheduleIcon />}
                    />
                    <Chip
                      size="small"
                      label={`${eventCounts.recurring} recurring`}
                      icon={<EventRepeatIcon />}
                      sx={{ bgcolor: brandColors.accent, color: 'white' }}
                    />
                  </Stack>
                </Alert>
              )}
            </Paper>
          </Grid>

          {/* Right Panel - Calendar */}
          <Grid size={{ xs: 12, md: 7, lg: 8 }}>
            <Paper variant="outlined" sx={{ p: 2 }}>
              <CalendarThemeShell>
                <FullCalendar
                  ref={calendarRef}
                  plugins={[
                    dayGridPlugin,
                    timeGridPlugin,
                    interactionPlugin,
                    rrulePlugin,
                  ]}
                  initialView="dayGridMonth"
                  headerToolbar={{
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay',
                  }}
                  events={events}
                  eventClick={handleEventClick}
                  nowIndicator
                  height="auto"
                  aspectRatio={isMobile ? 1 : 1.5}
                  eventTimeFormat={{
                    hour: 'numeric',
                    minute: '2-digit',
                    meridiem: 'short',
                  }}
                  dayMaxEvents={3}
                  eventDidMount={(info) => {
                    // Add data attribute for recurring events
                    const props = info.event.extendedProps as unknown;
                    if (
                      isScheduleEventExtendedProps(props) &&
                      props.isRecurring
                    ) {
                      info.el.setAttribute('data-recurring', 'true');
                    }
                  }}
                />
              </CalendarThemeShell>
            </Paper>
          </Grid>
        </Grid>

        {/* Event Detail Dialog */}
        <Dialog
          open={eventDialog.open}
          onClose={() => setEventDialog({ open: false, data: null })}
          maxWidth="sm"
          fullWidth
        >
          {eventDialog.data && (
            <>
              <DialogTitle
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  bgcolor: eventDialog.data.isRecurring
                    ? brandColors.accent
                    : brandColors.navy,
                  color: 'white',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  {eventDialog.data.isRecurring ? (
                    <EventRepeatIcon />
                  ) : (
                    <ScheduleIcon />
                  )}
                  {eventDialog.data.title}
                </Box>
                <IconButton
                  size="small"
                  onClick={() => setEventDialog({ open: false, data: null })}
                  sx={{ color: 'white' }}
                >
                  <CloseIcon />
                </IconButton>
              </DialogTitle>
              <DialogContent sx={{ pt: 2 }}>
                <List disablePadding>
                  {/* Time */}
                  <ListItem disablePadding sx={{ py: 1 }}>
                    <ListItemIcon sx={{ minWidth: 40 }}>
                      <ScheduleIcon color="action" />
                    </ListItemIcon>
                    <ListItemText
                      primary="Time"
                      secondary={
                        <>
                          {formatDateTime(eventDialog.data.start)}
                          {eventDialog.data.end && (
                            <>
                              <br />
                              to {formatDateTime(eventDialog.data.end)}
                            </>
                          )}
                        </>
                      }
                    />
                  </ListItem>

                  {/* Location */}
                  {eventDialog.data.location && (
                    <ListItem disablePadding sx={{ py: 1 }}>
                      <ListItemIcon sx={{ minWidth: 40 }}>
                        <LocationOnIcon color="action" />
                      </ListItemIcon>
                      <ListItemText
                        primary="Location"
                        secondary={eventDialog.data.location}
                      />
                    </ListItem>
                  )}

                  {/* Recurring Badge */}
                  {eventDialog.data.isRecurring && (
                    <ListItem disablePadding sx={{ py: 1 }}>
                      <ListItemIcon sx={{ minWidth: 40 }}>
                        <EventRepeatIcon color="action" />
                      </ListItemIcon>
                      <ListItemText
                        primary="Recurrence"
                        secondary="This is a recurring event"
                      />
                    </ListItem>
                  )}

                  {/* Description */}
                  {eventDialog.data.description && (
                    <>
                      <Divider sx={{ my: 1 }} />
                      <ListItem
                        disablePadding
                        sx={{ py: 1, flexDirection: 'column', alignItems: 'flex-start' }}
                      >
                        <Typography
                          variant="subtitle2"
                          color="text.secondary"
                          sx={{ mb: 0.5 }}
                        >
                          Description
                        </Typography>
                        <Typography variant="body2">
                          {eventDialog.data.description}
                        </Typography>
                      </ListItem>
                    </>
                  )}

                  {/* Metadata */}
                  {eventDialog.data.metadata &&
                    Object.keys(eventDialog.data.metadata).length > 0 && (
                      <>
                        <Divider sx={{ my: 1 }} />
                        <ListItem
                          disablePadding
                          sx={{ py: 1, flexDirection: 'column', alignItems: 'flex-start' }}
                        >
                          <Typography
                            variant="subtitle2"
                            color="text.secondary"
                            sx={{ mb: 0.5 }}
                          >
                            Metadata
                          </Typography>
                          <Stack direction="row" spacing={0.5} flexWrap="wrap" useFlexGap>
                            {Object.entries(eventDialog.data.metadata).map(
                              ([key, value]) => (
                                <Chip
                                  key={key}
                                  size="small"
                                  label={`${key}: ${String(value)}`}
                                  variant="outlined"
                                />
                              )
                            )}
                          </Stack>
                        </ListItem>
                      </>
                    )}
                </List>
              </DialogContent>
            </>
          )}
        </Dialog>

        {/* Snackbar */}
        <Snackbar
          open={snackbar.open}
          autoHideDuration={4000}
          onClose={() => setSnackbar((s) => ({ ...s, open: false }))}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert
            severity={snackbar.severity}
            variant="filled"
            onClose={() => setSnackbar((s) => ({ ...s, open: false }))}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
}
