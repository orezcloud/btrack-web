import {
  amber, grey, green, indigo, red, common,
  yellow, purple
} from '@mui/material/colors';

const colors = {
  white: common.white,
  background: grey[50],
  primary: indigo[900],
  purple: purple[600],
  purpleLight: purple[200],

  secondary: green[800],
  medium: yellow[700],
  negative: red[500],
  neutral: grey[500],

  positive: green[700],
  geometry: '#3bb2d0',
};

export default {
  background: {
    default: colors.background,
  },
  primary: {
    main: colors.primary,
  },
  secondary: {
    main: colors.secondary,
    contrastText: colors.white,
  },
  colors,
};
