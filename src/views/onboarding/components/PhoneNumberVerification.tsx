import { Typography } from "@material-ui/core";
import { Link, TextInput } from "components/reusables";
import { FormikProps } from "formik";

const PhoneNumberVerification = ({ formik }: { formik: FormikProps<any> }) => {
	const { handleChange, handleBlur, errors, touched, values } = formik;

	return (
		<>
			<Typography align="center" variant="h3">
				Verify your phone number.
			</Typography>

			<div className="md:max-w-3/4 xl:max-w-1/2 mx-auto space-y-6">
				<Typography variant="subtitle1" color="textPrimary" align="center">
					{`We’ve sent an SMS message with your verification code to +234${values?.phoneNumber}`}
				</Typography>

				<div className="space-y-2">
					<TextInput
						name="otp"
						onChange={handleChange}
						onBlur={handleBlur}
						value={values?.otp}
						label="OTP"
						placeholder="123456"
						hasError={Boolean(errors?.otp && touched?.otp)}
						errorMessage={errors?.otp}
					/>
					<Link text="Resend OTP" onClick={() => alert("OTP is 123456")} />
				</div>
			</div>
		</>
	);
};

export default PhoneNumberVerification;
