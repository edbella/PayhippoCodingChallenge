import { ChangeEvent, FocusEventHandler } from "react";
import {
	Chip,
	FormControl,
	FormHelperText,
	InputLabel,
	MenuItem,
	Select,
	Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { uniqueId } from "lodash";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { FormikErrors } from "formik";

const useStyles = makeStyles((theme) => ({
	chips: {
		display: 'flex',
		flexWrap: 'nowrap',
		overflowY: "scroll",
		overflow: "-moz-scrollbars-none",
		"-ms-overflow-style": "none",  /* Internet Explorer 10+ */
    scrollbarWidth: "none",  /* Firefox */
		"&::-webkit-scrollbar": { 
			display: "none", /* Safari and Chrome */
	},
	},
	chip: {
		margin: 2,
		borderRadius: 4,
		backgroundColor: "#eee",
		padding: 0,
		height: "auto",
		"& .MuiChip-label": {
			padding: "6px 7px",
		}
	},
	formControl: {
		margin: 0,
		minWidth: 120,
	},
	label: {
		"&.Mui-error": {
			color: theme.palette.error.main,
		},
		"&.Mui-focused": {
			color: theme.palette.primary.light,
		},
		color: theme.palette.grey[600],
		marginBottom: theme.spacing(1),
		position: "relative",
		textAlign: "left",
		transform: "translate(0, 0) scale(1) !important",
	},
	menu: {
		"& .MuiListItem-root": {
			"&.Mui-selected": {
				backgroundColor: "#F3F3F3",
			},
			fontWeight: 500,
		},
		"& .MuiMenuItem-root": {
			"&:hover": {
				backgroundColor: theme.palette.primary.contrastText,
			},
		},
		borderRadius: 5,
		maxHeight: theme.spacing(40),
		padding: `${theme.spacing(1)}px !important`,
	},
	select: {
		"& .MuiOutlinedInput-input": {
			padding: "12px",
		},
		"& .MuiOutlinedInput-notchedOutline": {
			borderColor: "#ced4da",
			borderWidth: "1px !important",
		},
		"& .MuiSelect-icon": {
			top: "calc(50% - 12px)",
		},
		"& .MuiSelect-select:focus": {
			backgroundColor: theme.palette.grey[50],
			borderColor: theme.palette.primary.light,
		},
		"&.Mui-disabled": {
			"& .MuiOutlinedInput-notchedOutline": {
				borderColor: "#ced4da !important",
			},
			backgroundColor: theme.palette.grey[50],
		},
		"&.Mui-focused": {
			"& .MuiOutlinedInput-notchedOutline": {
				borderColor: `${theme.palette.primary.light} !important`,
			},
			backgroundColor: theme.palette.grey[50],
			borderColor: theme.palette.primary.light,
		},
		"&:hover": {
			"& .MuiOutlinedInput-notchedOutline": {
				borderColor: "#ced4da",
			},
		},
		"&.multiple": {
			"& .MuiOutlinedInput-input": {
				padding: "6px 12px 6px 6px",
			},
			"&.Mui-focused": {
				backgroundColor: theme.palette.grey[50],
			},
			"& .MuiSelect-icon": {
				backgroundColor: "#fff",
			},
		},
		height: "fit-content",
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
}));

const SelectField = ({
	label,
	id,
	name = uniqueId("select-field-"),
	multiselect = false,
	optionsList = [],
	valueLabel = "value",
	hasError = false,
	errorMessage,
	onChange = () => {},
	className,
	valueKey = "value",
	emptyTextLabel = "No options to select",
	promptTextLabel = "Please select an option",
	...rest
}: {
	label?: string;
	id?: string;
	disabled?: boolean;
	hasError?: boolean;
	errorMessage?: string | string[] | FormikErrors<any> | FormikErrors<any>[];
	className?: string;
	endAdornment?: JSX.Element;
	inputProps?: object;
	type?: string;
	name?: string;
	additionalLabel?: JSX.Element;
	onBlur?: FocusEventHandler<HTMLInputElement>;
	onChange?: (
		event: ChangeEvent<{ name?: string | undefined; value: any | undefined }>
	) => void;
	valueKey?: string;
	valueLabel?: string;
	multiselect?: boolean;
	emptyTextLabel?: string;
	promptTextLabel?: string;
	optionsList: any;
	value?: string | number;
}) => {
	const classes = useStyles();

	if (multiselect) {
		return (
			<FormControl
				className={clsx(classes.formControl, className)}
				error={hasError}
			>
				<InputLabel
					id={`label-${name}`}
					shrink
					htmlFor={name}
					className={classes.label}
				>
					{label}
				</InputLabel>
				<Select
					variant="outlined"
					{...rest}
					labelId={`label-${name}`}
					IconComponent={KeyboardArrowDownIcon}
					id={id || name}
					name={name || id}
					onChange={onChange}
					className={clsx(classes.select, "multiple")}
					multiple
					MenuProps={{
						anchorOrigin: {
							horizontal: "center",
							vertical: "bottom",
						},
						classes: {
							list: classes.menu,
						},
						getContentAnchorEl: null,
						transformOrigin: {
							horizontal: "center",
							vertical: "top",
						},
					}}
					renderValue={(selected) => {
						if (!(selected as string[])?.length) {
							return (
								<div className="text-gray-300" style={{padding: 6}}>
									<Typography color="inherit">{promptTextLabel}</Typography>
								</div>
							);
						}
						return (
							<div className={classes.chips}>
								{(selected as string[]).map((value) => (
									<Chip key={value} label={value} className={classes.chip} />
								))}
							</div>
						);
					}}
					displayEmpty
				>
					{optionsList?.map((option: any) => (
						<MenuItem key={option?.id} value={option?.value}>
							{option?.[valueLabel]}
						</MenuItem>
					))}
				</Select>
				{errorMessage && hasError && (
					<FormHelperText>{errorMessage}</FormHelperText>
				)}
			</FormControl>
		);
	}

	return (
		<FormControl
			className={clsx(classes.formControl, className)}
			error={hasError}
			fullWidth
		>
			<InputLabel
				id={`label-${name}`}
				shrink
				htmlFor={name}
				className={classes.label}
			>
				{label}
			</InputLabel>
			<Select
				variant="outlined"
				{...rest}
				labelId={`label-${name}`}
				IconComponent={KeyboardArrowDownIcon}
				id={id || name}
				name={name || id}
				onChange={onChange}
				className={classes.select}
				MenuProps={{
					anchorOrigin: {
						horizontal: "left",
						vertical: "bottom",
					},
					classes: {
						list: classes.menu,
					},
					getContentAnchorEl: null,
					transformOrigin: {
						horizontal: "left",
						vertical: "top",
					},
				}}
				renderValue={(option) => {
					if (option) {
						const transformedOption = optionsList?.find(
							(opt: any) => opt?.[valueKey] === option
						);
						return transformedOption?.[valueLabel];
					}

					if (!optionsList?.length) {
						return (
							<div className="text-gray-300">
								<Typography color="inherit">{emptyTextLabel}</Typography>
							</div>
						);
					}

					return (
						<div className="text-gray-300">
							<Typography color="inherit">{promptTextLabel}</Typography>
						</div>
					);
				}}
				displayEmpty
			>
				{optionsList?.map((option: any) => (
					<MenuItem
						key={option?.id || option?.[valueKey] || option?.[valueLabel]}
						value={option?.[valueKey]}
					>
						{option?.[valueLabel]}
					</MenuItem>
				))}
			</Select>
			{errorMessage && hasError && <FormHelperText>{errorMessage}</FormHelperText>}
		</FormControl>
	);
};

export default SelectField;
