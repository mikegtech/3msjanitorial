import MenuIcon from '@mui/icons-material/Menu';
import PhoneIcon from '@mui/icons-material/Phone';
import {
  alpha,
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
  useScrollTrigger,
  useTheme,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BUSINESS_INFO } from '../../constants/business';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'About', path: '/about' },
  { label: 'Reviews', path: '/reviews' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Service Area', path: '/service-area' },
  { label: 'Contact', path: '/contact' },
];

export function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const scrollTrigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 10,
  });

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ textAlign: 'center', py: 2 }}>
      <Typography
        variant="h6"
        sx={{
          my: 2,
          fontWeight: 700,
          color: 'primary.main',
          letterSpacing: '-0.01em',
        }}
      >
        3MS Janitorial
      </Typography>
      <List sx={{ px: 1 }}>
        {navItems.map((item) => (
          <ListItem key={item.path} disablePadding>
            <ListItemButton
              component={Link}
              to={item.path}
              selected={location.pathname === item.path}
              sx={{
                textAlign: 'center',
                borderRadius: 2,
                my: 0.5,
                transition: theme.transitions.create(['background-color', 'color'], {
                  duration: theme.transitions.duration.short,
                }),
              }}
            >
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontWeight: location.pathname === item.path ? 600 : 400,
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding sx={{ mt: 2 }}>
          <ListItemButton
            component="a"
            href={`tel:${BUSINESS_INFO.phone}`}
            sx={{
              textAlign: 'center',
              borderRadius: 2,
              bgcolor: alpha(theme.palette.secondary.main, 0.1),
              color: 'secondary.main',
              '&:hover': {
                bgcolor: alpha(theme.palette.secondary.main, 0.2),
              },
            }}
          >
            <PhoneIcon sx={{ mr: 1, fontSize: 20 }} />
            <ListItemText
              primary={BUSINESS_INFO.phoneFormatted}
              primaryTypographyProps={{ fontWeight: 600 }}
            />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="sticky"
        color="inherit"
        elevation={0}
        sx={{
          bgcolor: scrollTrigger
            ? alpha(theme.palette.background.paper, 0.95)
            : alpha(theme.palette.background.paper, 0.8),
          backdropFilter: 'blur(12px)',
          borderBottom: `1px solid ${
            scrollTrigger ? theme.palette.divider : 'transparent'
          }`,
          transition: theme.transitions.create(
            ['background-color', 'border-color', 'box-shadow'],
            { duration: theme.transitions.duration.short }
          ),
          boxShadow: scrollTrigger ? theme.shadows[2] : 'none',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            disableGutters
            sx={{
              justifyContent: 'space-between',
              minHeight: { xs: 64, md: 72 },
              transition: theme.transitions.create('min-height', {
                duration: theme.transitions.duration.short,
              }),
            }}
          >
            <Typography
              variant="h6"
              component={Link}
              to="/"
              sx={{
                fontWeight: 700,
                color: 'primary.main',
                textDecoration: 'none',
                fontSize: { xs: '1.1rem', md: '1.25rem' },
                letterSpacing: '-0.01em',
                transition: theme.transitions.create('color', {
                  duration: theme.transitions.duration.short,
                }),
                '&:hover': {
                  color: 'primary.dark',
                },
              }}
            >
              3MS Janitorial
            </Typography>

            {isMobile ? (
              <IconButton
                color="inherit"
                aria-label="open navigation menu"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{
                  transition: theme.transitions.create('background-color', {
                    duration: theme.transitions.duration.short,
                  }),
                }}
              >
                <MenuIcon />
              </IconButton>
            ) : (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                {navItems.map((item) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <Button
                      key={item.path}
                      component={Link}
                      to={item.path}
                      sx={{
                        color: isActive ? 'primary.main' : 'text.primary',
                        fontWeight: isActive ? 600 : 500,
                        minWidth: 'auto',
                        px: 1.5,
                        py: 1,
                        borderRadius: 2,
                        position: 'relative',
                        transition: theme.transitions.create(
                          ['color', 'background-color'],
                          { duration: theme.transitions.duration.short }
                        ),
                        '&:hover': {
                          bgcolor: alpha(theme.palette.primary.main, 0.08),
                          color: 'primary.main',
                        },
                        '&::after': isActive
                          ? {
                              content: '""',
                              position: 'absolute',
                              bottom: 4,
                              left: '50%',
                              transform: 'translateX(-50%)',
                              width: 20,
                              height: 2,
                              borderRadius: 1,
                              bgcolor: 'primary.main',
                            }
                          : undefined,
                      }}
                    >
                      {item.label}
                    </Button>
                  );
                })}
                <Button
                  variant="contained"
                  color="secondary"
                  component="a"
                  href={`tel:${BUSINESS_INFO.phone}`}
                  startIcon={<PhoneIcon />}
                  sx={{ ml: 1.5 }}
                >
                  Call Now
                </Button>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 280,
            borderRadius: '16px 0 0 16px',
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}
