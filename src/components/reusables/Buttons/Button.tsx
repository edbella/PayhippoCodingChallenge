import { FC } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button as MuiButton, ButtonProps } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles(theme => ({
  primary: {
    "&.danger-button": {
      backgroundColor: theme.palette.error.main,
      color: theme.palette.common.white,
    },
    color: theme.palette.common.white,
  },
  root: {
    minWidth: theme.spacing(14),
    padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
    [theme.breakpoints.up("md")]: {
      minWidth: theme.spacing(20),
      padding: `${theme.spacing(1)}px ${theme.spacing(4)}px`,
    },
    textTransform: "unset",
  },
  secondary: {
    "&.Mui-disabled": {
      "&:hover": {
        backgroundColor: "#EDEFF0",
        borderColor: "#EDEFF0",
        color: theme.palette.action.disabled,
      },
      backgroundColor: "#EDEFF0",
      color: theme.palette.action.disabled,
    },
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
      borderColor: theme.palette.error.main,
    },
    backgroundColor: theme.palette.secondary.main,
    borderColor: "#e4e4e4",
    color: theme.palette.primary.main,
  },
}));

interface IProps extends ButtonProps {
  className?: string,
  text?: string,
  loading?: boolean,
  loadingText?: string,
  disabled?: boolean,
  htmlType?: any,
  danger?: boolean,
}

const Button: FC<IProps> = ({
  className,
  text,
  loading,
  loadingText = "Please wait...",
  disabled = false,
  type = "primary",
  htmlType = "button",
  danger,
  ...rest
}) => {
  const classes = useStyles();

  return (
    <MuiButton
      {...rest}
      type={htmlType}
      variant="contained"
      color="primary"
      className={clsx(classes.root, (type === "secondary" ? classes.secondary : classes.primary), className, danger ? "danger-button" : "")}
      disabled={disabled || loading}
    >
      {loading ? loadingText : text}
    </MuiButton>
  );
};

export default Button;
