import { makeStyles } from "@material-ui/core/styles";
import { Button as MuiButton, Typography } from "@material-ui/core";
import clsx from "clsx";
import { useHistory } from "react-router-dom";
import { MouseEventHandler } from "react";

const useStyles = makeStyles((theme) => ({
	primary: {
		"&.disabled": {
			"&:hover": {
				color: theme.palette.action.disabled,
			},
			color: theme.palette.action.disabled,
			pointerEvents: "none",
		},
		"&.underline": {
			"&:hover": {
				textDecoration: "underline",
			},
		},
		"&:hover": {
			backgroundColor: "transparent",
			color: theme.palette.primary.main,
		},
		transition: theme.transitions.create(["all"], {
			duration: 300,
		}),
		color: theme.palette.primary.light,
		backgroundColor: "transparent",
	},
	root: {
		display: "inline",
		fontSize: "inherit",
		minWidth: 0,
		padding: 0,
		textTransform: "none",
		cursor: "pointer",
	},
}));

const Link = ({
	className,
	text,
	disabled = false,
	underline = false,
	isInternal = true,
	href,
	...rest
}: {
	className?: string;
	text?: string;
	disabled?: boolean;
	underline?: boolean;
	href?: string;
	isInternal?: boolean;
	onClick?: MouseEventHandler<HTMLButtonElement> | any;
}) => {
	const classes = useStyles();
	const history = useHistory();

	if (href) {
		return (
			<a
				color="primary"
				{...rest}
				className={clsx(
					classes.root,
					classes.primary,
					underline && "underline",
					disabled && "disabled",
					className
				)}
				// disabled={disabled}
				// fullWidth={false}
				href={href}
				{...(isInternal && {
					onClick: (event) => {
						event.preventDefault();
						history.push(href);
					},
				})}
			>
				{text}
			</a>
		);
	}

	return (
		<MuiButton
			color="primary"
			{...rest}
			className={clsx(
				classes.root,
				classes.primary,
				underline && "underline",
				disabled && "disabled",
				className
			)}
			disabled={disabled}
			fullWidth={false}
		>
			<Typography color="inherit" variant="caption" component="p">{text}</Typography>
		</MuiButton>
	);
};

export default Link;
