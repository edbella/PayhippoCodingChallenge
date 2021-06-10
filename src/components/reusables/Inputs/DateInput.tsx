import { FocusEventHandler } from "react";
import { DatePicker } from "@material-ui/pickers";
import TodayIcon from "@material-ui/icons/Today";
import {
	IconButton,
	InputAdornment,
	makeStyles,
	TextFieldProps,
} from "@material-ui/core";
import { transformNonEventChange } from "utils/libs";
import dayjs from "utils/libs/dayJs";
import TextInput from "./TextInput";
import { FormikErrors } from "formik";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";
import omit from "lodash.omit";

const useStyles = makeStyles((theme) => ({
	root: {
		backdropFilter: "blur(30px)",
		maxWidth: theme.breakpoints.width("sm"),
	},
}));

const DateInput = ({
	onChange,
	value,
	label,
	hasError,
	errorMessage,
	name,
	onBlur,
	format = "LL",
	parseValue = true,
	...rest
}: {
	onChange: Function;
	value?: string | number;
	label?: string;
	hasError?: boolean;
	errorMessage?: string | string[] | FormikErrors<any> | FormikErrors<any>[];
	name: string;
	onBlur?: FocusEventHandler<HTMLInputElement>;
	format?: string;
	parseValue?: boolean;
	disableFuture?: boolean;
	disabled?: boolean;
	placeholder?: string;
	endAdornment?: JSX.Element;
	inputProps?: object;
	type?: string;
}) => {
	const classes = useStyles();

	/**
	 * Handles the datepicker onchange event
	 *
	 * @param {Date} date Date object or string
	 * @returns {Date | string} Date object or string
	 */
	const handleDateChange = (date: Date | string | number | undefined | MaterialUiPickersDate | any): Function => {
		if (parseValue) {
			return onChange(
				transformNonEventChange({ name, value: dayjs(date).format(format) })
			);
		}

		return onChange(
			transformNonEventChange({ name, value: dayjs.utc(date).format() })
		);
	};

	return (
		<DatePicker
			{...omit(rest, ["PopoverProps", "InputProps"])}
			inputVariant="filled"
			onChange={(d) => handleDateChange(d)}
			value={value}
			format={format}
			PopoverProps={{
				classes: {
					root: classes.root,
				},
			}}
			TextFieldComponent={(props: TextFieldProps) => {
				return (
					<TextInput
						{...omit(props, ["PopoverProps", "InputProps", "helperText"])}
						label={label}
						hasError={hasError}
						errorMessage={errorMessage}
						onBlur={onBlur}
						endAdornment={
							<InputAdornment position="end">
								<IconButton
									aria-label="Show Calendar"
									style={{ padding: 10 }}
									disableRipple
								>
									<TodayIcon color="disabled" fontSize="small" />
								</IconButton>
							</InputAdornment>
						}
					/>
				);
			}}
			animateYearScrolling
			autoOk
			clearable
		/>
	);
};

export default DateInput;
