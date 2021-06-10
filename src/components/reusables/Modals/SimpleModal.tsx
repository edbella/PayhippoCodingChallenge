import React, { ReactNode } from "react";
import {
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	IconButton,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
	dialogContent: {
		backgroundColor: "transparent",
		[theme.breakpoints.up("md")]: {
			padding: theme.spacing(6),
		},
		padding: theme.spacing(3),
	},
	dialogFooter: {
		[theme.breakpoints.up("md")]: {
			padding: `${theme.spacing(6)}px ${theme.spacing(6)}px`,
		},
		"&.justify-between": {
			justifyContent: "space-between",
		},
		backgroundColor: "transparent",
		padding: theme.spacing(3),
	},
	dialogHeader: {
		"& .MuiTypography-root": {
			color: theme.palette.text.primary,
			fontWeight: 400,
			fontSize: theme.typography.h4.fontSize
		},
		flex: "1 1 auto",
		padding: 0,
	},
	dialogHeaderParent: {
		"&.collapse": {
			display: "none",
		},
		alignItems: "center",
		backgroundColor: "transparent",
		borderBottom: `1px solid ${theme.palette.divider}`,
		display: "flex",
		padding: `${theme.spacing(2)}px ${theme.spacing(3)}px`,
	},
	dialogRoot: {
		"& .MuiBackdrop-root": {
			backdropFilter: "blur(2px)",
			backgroundColor: "rgba(0,0,0,0.9)",
		},
		"& .MuiDialog-paper": {
			borderRadius: 10,
			margin: "30px 0",
			width: "95% !important",
		},
		"&.transparent": {
			"& .MuiPaper-root": {
				backgroundColor: "transparent",
				boxShadow: "none",
			},
			backgroundColor: "transparent",
		},
	},
}));

export interface SimpleModalProps {
	open: boolean;
	selectedValue: string;
	onClose: () => void;
	title?: string;
	transparent?: boolean;
	className?: string;
	showCloseIcon: boolean;
	justifyActionsBetween?: boolean;
	footer?: JSX.Element;
	children?: JSX.Element[];
}

const SimpleModal = ({
	title,
	children,
	className,
	footer,
	open,
	onClose,
	showCloseIcon = true,
	justifyActionsBetween = false,
	transparent = false,
	...rest
}: {
	title?: string;
	transparent?: boolean;
	open: boolean;
	className?: string;
	showCloseIcon?: boolean;
	justifyActionsBetween?: boolean;
	footer?: JSX.Element;
	onClose: () => void | React.MouseEventHandler<HTMLAnchorElement>;
	children ?: JSX.Element | ReactNode;
}) => {
	const classes = useStyles();
	return (
		<Dialog
			maxWidth="sm"
			{...rest}
			onClose={onClose}
			fullWidth
			className={clsx(classes.dialogRoot, transparent && "transparent", className)}
			open={open}
			scroll="paper"
			disableBackdropClick
		>
			<div
				className={clsx(
					classes.dialogHeaderParent,
					!title && !showCloseIcon && "collapse"
				)}
			>
				{title && (
					<DialogTitle className={classes.dialogHeader}>{title}</DialogTitle>
				)}
				{showCloseIcon && (
					<IconButton onClick={onClose} style={{ marginLeft: "auto" }}>
						<CloseIcon style={{ fontSize: 30 }} />
					</IconButton>
				)}
			</div>
			<DialogContent className={classes.dialogContent}>{children}</DialogContent>
			{footer && (
				<DialogActions
					className={clsx(
						classes.dialogFooter,
						justifyActionsBetween ? "justify-between" : ""
					)}
				>
					{footer}
				</DialogActions>
			)}
		</Dialog>
	);
};

export default SimpleModal;
