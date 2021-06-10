import { colors } from "@material-ui/core";

const white = "#FFFFFF";
const black = "#000000";

const palette = {
  action: {
    disabled: "#A6A6A6",
    disabledBackground: "#EDEFF0",
  },
  hippo: {
    blue: "#1123AB",
    green: "#DE384C",
    red: "#D2353F",
    'secondary-blue': "#61D2FF",
    'contrast-blue': "#4A90E2",
    'primary-text': "#293336",
    'secondary-text': "#417184",
  },
  augmentColor: {
    main: "#174542",
  },
  background: {
    default: white,
    paper: white,
  },
  black,
  contrastThreshold: 5,
  divider: colors.grey[200],
  error: {
    main: "#D2353F",
  },
  icon: colors.blueGrey[600],
  info: {
    main: "#1E203B",
  },
  placeholder: {
    main: "#EDEDED",
  },
  primary: {
    contrastText: "#ffffff",
    light: "#4A90E2",
    main: "#1123AB",
  },
  secondary: {
    contrastText: "#1123AB",
    main: "#417184",
  },
  success: {
    main: "#4EA16F",
  },
  text: {
    link: "#4A90E2",
    primary: "#293336",
    secondary: "#417184",
  },
  tonalOffset: 0.2,
  warning: {
    main: "#F5A623",
  },
  white,
}

export default palette;
