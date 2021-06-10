import { Typography } from "@material-ui/core";
import { Button, DocumentHeader, Link } from "components/reusables";
import { GlassCard } from "components/reusables/Cards";
import { useFormik } from "formik";
import { RouteComponentProps } from "react-router-dom";
import useSteps from "utils/hooks/useSteps";
import {
	onboardingOtpValidationSchema,
	onboardingValidationSchema,
} from "utils/validationSchemas/onboarding.validations";
import PersonalDetails from "./components/PersonalDetails";
import PhoneNumberVerification from "./components/PhoneNumberVerification";

export interface HistoryProps {
	history: RouteComponentProps["history"];
	location: RouteComponentProps["location"];
	match: RouteComponentProps["match"];
}

const Signup = ({
	title,
	history,
}: {
	title: string;
	history: RouteComponentProps["history"];
}) => {
	const { currentStep, nextStep } = useSteps(2);

	const formik = useFormik({
		initialValues: {
			firstName: "",
			lastName: "",
			email: "",
			phoneNumber: "",
			gender: "",
			dob: null,
			maritalStatus: "",
			qualification: "",
			otp: "",
		},
		onSubmit: (values) => {
			if (currentStep === 1) {
				return nextStep();
			}
			localStorage.setItem("userData", JSON.stringify(values));
			return history.push("/signup/business-details");
		},
		validationSchema:
			currentStep === 1
				? onboardingValidationSchema
				: onboardingOtpValidationSchema,
	});

	const { handleSubmit } = formik;

	return (
		<>
			<DocumentHeader title={title} />
			<div className="flex flex-col h-full justify-center items-center">
				<GlassCard>
					<div className="space-y-10 xl:space-y-14">
						{currentStep === 1 ? (
							<PersonalDetails formik={formik} />
						) : (
							<PhoneNumberVerification formik={formik} />
						)}
						<div className="text-center space-y-10">
							<Button text="Next" onClick={() => handleSubmit()} />
							<Typography>
								Already have an account? <Link text="Sign in" href="/signup" />
							</Typography>
						</div>
					</div>
				</GlassCard>
			</div>
		</>
	);
};

export default Signup;
