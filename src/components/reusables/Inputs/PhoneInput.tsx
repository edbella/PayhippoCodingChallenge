import { IconButton, InputAdornment, Typography } from "@material-ui/core";
import TextInput from "./TextInput";

const PhoneInput = ({ ...rest }) => {
	return (
		<TextInput
			{...rest}
			startAdornment={
				<InputAdornment position="start">
					<IconButton disabled size="small">
						<Typography variant="body1" color="textPrimary" className="opacity-60">+234</Typography>
					</IconButton>
				</InputAdornment>
			}
		/>
	);
};

export default PhoneInput;
