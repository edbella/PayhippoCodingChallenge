import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar, SvgIcon, Toolbar
} from "@material-ui/core";
import { ReactComponent as PayHippoLogo } from "assets/svgs/app-logo.svg";

const useStyles = makeStyles(theme => ({
  appBarRoot: {
    backgroundColor: "transparent",
    boxShadow: "none",
    [theme.breakpoints.up("xl")]: {
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6),
    },
  },
  logoIcon: {
    fontSize: theme.typography.h1.fontSize,
    width: "auto",
  },
  toolBar: {
    justifyContent: "space-between",
  },
}));

const NavigationBar = () => {
  const classes = useStyles();

  return (
    <>
        <AppBar className={classes.appBarRoot} position="relative">
          <Toolbar className={classes.toolBar}>
            {/* Logo Icon */}
              <SvgIcon className={classes.logoIcon} viewBox="0 0 163 50">
                <PayHippoLogo />
              </SvgIcon>

          </Toolbar>
        </AppBar>
    </>
  );
};

export default NavigationBar;
