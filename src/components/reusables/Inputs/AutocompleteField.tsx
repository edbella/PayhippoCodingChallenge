import { FocusEventHandler } from "react";
import { FormControl, FormHelperText } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { uniqueId } from "lodash";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { FormikErrors } from "formik";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextInput from "./TextInput";
import omit from "lodash.omit";
import { transformNonEventChange } from "utils/libs";

const useStyles = makeStyles((theme) => ({
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
		fontSize: "1rem",
		marginBottom: theme.spacing(1),
		position: "relative",
		textAlign: "left",
		transform: "translate(0, 0) scale(1) !important",
	},
	popper: {
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
			fontSize: "1rem",
		},
		borderRadius: 5,
		maxHeight: theme.spacing(40),
		padding: `${theme.spacing(1)}px !important`,
	},
	select: {
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
			borderColor: theme.palette.primary.light,
		},
		"&:hover": {
			"& .MuiOutlinedInput-notchedOutline": {
				borderColor: "#ced4da",
			},
		},
		height: "fit-content",
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
}));

const AutocompleteField = ({
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
  value,
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
	onChange?: any;
	valueKey?: string;
	valueLabel?: string;
	multiselect?: boolean;
	emptyTextLabel?: string;
	promptTextLabel?: string;
	optionsList: any;
	value?: string;
	inputValue?: string;
	filterSelectedOptions?: boolean;
}) => {
	const classes = useStyles();

	return (
		<FormControl
			className={clsx(classes.formControl, className)}
			error={hasError}
			fullWidth
		>
			<Autocomplete
				autoComplete
				disableClearable
				classes={{
					popper: classes.popper,
        }}
        inputValue={value}
				{...rest}
				popupIcon={<KeyboardArrowDownIcon />}
				id={id || name}
				onChange={(event: any, newValue: any) => {
					event.target.value = newValue?.[valueKey];
					onChange(transformNonEventChange({ name, value: newValue?.[valueKey] }));
					if (rest.onBlur) {
						rest.onBlur(event);
					}
				}}
				className={classes.select}
				options={optionsList}
				getOptionLabel={(option: any) => option?.[valueLabel] ?? ""}
				getOptionSelected={(option: any, value: unknown) =>
					option?.[valueKey] === value
				}
        renderInput={(params) => {
					return (
						<TextInput
							{...omit(params, ["InputLabelProps", "InputProps"])}
              ref={params.InputProps.ref}
							endAdornment={params.InputProps.endAdornment}
							label={label}
						/>
					);
				}}
				noOptionsText={emptyTextLabel}
			/>
			{errorMessage && hasError && <FormHelperText>{errorMessage}</FormHelperText>}
		</FormControl>
	);
};

export default AutocompleteField;
