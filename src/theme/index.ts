import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";

import palette from "./palette";
import overrides from "./overrides";
import breakpoints from "./breakpoints";
import typography from "./typography";

const theme = createMuiTheme({
  breakpoints,
  overrides,
  palette,
  typography,
});

const responsiveTheme = responsiveFontSizes(theme);

export default responsiveTheme;
