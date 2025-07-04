import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff6f61', // Warm coral/orange for energy
      contrastText: '#fff',
    },
    secondary: {
      main: '#4caf50', // Fresh green
      contrastText: '#fff',
    },
    background: {
      default: '#f0f8ff', // Light baby blue background
      paper: '#ffffff',   // White paper background
    },
    info: {
      main: '#2196f3', // Bright blue for info
    },
    error: {
      main: '#f44336', // Red error color
    },
    success: {
      main: '#4caf50',
    },
  },
  typography: {
    fontFamily: `"Comic Sans MS", "Comic Sans", cursive, "Roboto", "Helvetica", "Arial", sans-serif`,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    h1: {
      fontWeight: 700,
      fontSize: '3rem',
      color: '#ff6f61',
      letterSpacing: '0.1em',
    },
    h2: {
      fontWeight: 600,
      fontSize: '2rem',
      color: '#4caf50',
    },
    button: {
      fontWeight: 700,
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 16, // Rounded corners for friendlier look
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: '12px 24px',
          boxShadow: '0 4px 10px rgba(255, 111, 97, 0.3)',
          '&:hover': {
            boxShadow: '0 6px 15px rgba(255, 111, 97, 0.5)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 8px 20px rgba(0,0,0,0.12)',
        },
      },
    },
  },
});

export default theme;