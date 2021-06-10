import {
	MouseEvent,
	useState,
	FocusEventHandler,
	ChangeEventHandler,
	ReactNode,
	forwardRef,
} from "react";
import {
	FormControl,
	FormHelperText,
	IconButton,
	InputAdornment,
	InputBase,
	InputLabel,
	SvgIcon,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { ReactComponent as EyeIcon } from "assets/svgs/eye.svg";
import { ReactComponent as HiddenEyeIcon } from "assets/svgs/hidden-eye.svg";
import { uniqueId } from "lodash";
import { FormikErrors } from "formik";

const useStyles = makeStyles((theme) => ({
	iconButton: {
		padding: theme.spacing(1),
	},
	label: {
		"&.Mui-disabled": {
			color: theme.palette.grey[600],
		},
		"&.Mui-error": {
			color: theme.palette.error.main,
		},
		"&.Mui-focused": {
			color: theme.palette.primary.light,
		},
		alignItems: "center",
		color: theme.palette.grey[600],
		display: "flex",
		justifyContent: "Space-between",
		marginBottom: theme.spacing(1),
		position: "relative",
		transform: "translate(0, 0) scale(1)",
		width: "100%",
	},
	root: {
		"& .MuiInputBase-input": {
			"&::placeholder": {
				color: theme.palette.grey[400],
				fontWeight: 400,
			},
			height: "100%",
		},
		"& input[type=number]": {
			"&::-webkit-inner-spin-button, ::-webkit-outer-spin-button": {
				"-webkit-appearance": "none",
				margin: 0,
			},
			"-moz-appearance": "textfield",
		},
		"&.Mui-disabled": {
			backgroundColor: theme.palette.grey[50],
			color: theme.palette.grey[600],
		},
		"&.Mui-error": {
			borderColor: theme.palette.error.main,
		},
		"&.Mui-focused": {
			backgroundColor: theme.palette.grey[50],
			borderColor: theme.palette.primary.light,
		},
		"&.password-field": {
			padding: "5px 0 5px 12px",
		},
		"&.text-center": {
			"& .MuiInputBase-input": {
				textAlign: "center",
			},
		},
		backgroundColor: theme.palette.common.white,
		border: "1px solid #ced4da",
		borderRadius: 4,
		color: theme.palette.grey[600],
		height: "fit-content",
		minWidth: 100,
		padding: "5px 0 5px 12px",
		position: "relative",
		transition: theme.transitions.create(["border-color", "box-shadow"]),
		width: "100%",
	},
}));

const TextInput = forwardRef(({
	label,
	disabled = false,
	hasError,
	errorMessage,
	className,
	endAdornment,
	inputProps,
	type = "text",
	name = uniqueId("text-input-"),
	additionalLabel,
	onBlur,
	...rest
}: {
	label?: string;
	disabled?: boolean;
	hasError?: boolean;
	errorMessage?: string | string[] | FormikErrors<any> | FormikErrors<any>[];
	className?: string;
	endAdornment?: JSX.Element | ReactNode;
	startAdornment?: JSX.Element;
	inputProps?: object;
	type?: string;
	name?: string;
	additionalLabel?: JSX.Element;
	onChange?: ChangeEventHandler<HTMLInputElement>;
	onBlur?: FocusEventHandler<HTMLInputElement>;
	placeholder?: string;
	value?: string | number | unknown;
}, ref) => {
	const classes = useStyles();
	// eslint-disable-next-line no-unused-vars
	const [showPassword, setShowPassword] = useState(false);

	const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
	};

	if (type === "password") {
		return (
			<>
				<FormControl fullWidth error={hasError} disabled={disabled}>
					{label && (
						<InputLabel shrink htmlFor={name} className={classes.label}>
							{label}
							{additionalLabel}
						</InputLabel>
					)}
					<InputBase
						{...rest}
						ref={ref}
						onBlur={onBlur}
						inputProps={{
							...inputProps,
							autoComplete: "off",
						}}
						autoComplete="off"
						type={showPassword ? "text" : type}
						className={clsx(classes.root, "password-field", className)}
						id={name}
						endAdornment={
							<InputAdornment position="end">
								<IconButton
									tabIndex="-1"
									disabled={disabled}
									aria-label="toggle password visibility"
									onClick={() => setShowPassword((prevState) => !prevState)}
									onMouseDown={handleMouseDownPassword}
									className={classes.iconButton}
								>
									{showPassword ? (
										<SvgIcon color="action" fontSize="small">
											<HiddenEyeIcon />
										</SvgIcon>
									) : (
										<SvgIcon color="action" fontSize="small">
											<EyeIcon />
										</SvgIcon>
									)}
								</IconButton>
							</InputAdornment>
						}
					/>
					{errorMessage && hasError && (
						<FormHelperText>{errorMessage}</FormHelperText>
					)}
				</FormControl>
			</>
		);
	}

	return (
		<FormControl fullWidth error={hasError} disabled={disabled}>
			{label && (
				<InputLabel shrink htmlFor={name} className={classes.label}>
					{label}
					{additionalLabel}
				</InputLabel>
			)}
			<InputBase
				{...rest}
				ref={ref}
				inputProps={{
					...inputProps,
					autoComplete: "off",
				}}
				autoComplete="off"
				type={type}
				className={clsx(classes.root, endAdornment && "password-field", className)}
				endAdornment={endAdornment}
				id={name}
			/>
			{errorMessage && hasError && <FormHelperText>{errorMessage}</FormHelperText>}
		</FormControl>
	);
});

export default TextInput;
