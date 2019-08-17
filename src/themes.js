import { createMuiTheme } from '@material-ui/core/styles';

// for overriding custom themes
export const theme = createMuiTheme({
  palette: {
    secondary: {
      main: '#7FDBFF',
      contrastText: 'white',
    },
  },
});

// settings for particle effect
export const partOptions = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: ['#BD10E0', '#B8E986', '#50E3C2', '#FFD300', '#E86363'],
    },
    line_linked: {
      color: '#001f3f',
    },
    shape: {
      type: 'circle',
    },
    size: {
      value: 5,
    },
  },
  interactivity: {
    detect_on: 'window',
    events: {
      onhover: {
        enable: true,
        mode: 'grab',
      },
    },
    modes: {
      grab: {
        distance: '500',
      },
    },
  },
};
