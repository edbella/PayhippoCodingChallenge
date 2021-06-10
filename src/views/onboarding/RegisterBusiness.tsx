import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { Button, DocumentHeader } from "components/reusables";
import { GlassCard } from "components/reusables/Cards";
import { useFormik } from "formik";
import { useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import useSteps from "utils/hooks/useSteps";
import useToggle from "utils/hooks/useToggle";
import {
	onboardingBVNValidationSchema,
	onboardingBusinessValidationSchema,
} from "utils/validationSchemas/onboarding.validations";
import BusinessDetails from "./components/BusinessDetails";
import BvnVerification from "./components/BvnVerification";

export interface HistoryProps {
	history: RouteComponentProps["history"];
	location: RouteComponentProps["location"];
	match: RouteComponentProps["match"];
}

const RegisterBusiness = ({
	title,
	history,
}: {
	title: string;
	history: RouteComponentProps["history"];
}) => {
	const { currentStep, nextStep } = useSteps(2);
	const [showSuccessAlert, toggleSuccessAlert] = useToggle();

	useEffect(() => {
		const userData = localStorage.getItem("userData");
		!userData && history.push("/signup");
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const formik = useFormik({
		initialValues: {
			businessName: "",
			phoneNumber: "",
			businessAddress: "",
			businessOwnerAddress: "",
			businessType: "",
			lendingPlatforms: [],
			bvn: "",
		},
		onSubmit: () => {
			if (currentStep === 1) {
				return nextStep();
			}
			return toggleSuccessAlert();
		},
		validationSchema:
			currentStep === 1
				? onboardingBusinessValidationSchema
				: onboardingBVNValidationSchema,
	});

	const { handleSubmit } = formik;

	return (
		<>
			<DocumentHeader title={title} />
			<div className="flex flex-col h-full justify-center items-center">
				<GlassCard>
					<div className="space-y-10 xl:space-y-14">
						{currentStep === 1 ? (
							<BusinessDetails formik={formik} />
						) : (
							<BvnVerification formik={formik} />
						)}
						<div className="text-center">
							<Button text="Next" onClick={() => handleSubmit()} />
						</div>
					</div>
				</GlassCard>
			</div>

			<Snackbar
				open={showSuccessAlert}
				autoHideDuration={7000}
				onClose={toggleSuccessAlert}
				anchorOrigin={{
					vertical: "top",
					horizontal: "center",
				}}
				onExited={() => {
					localStorage.clear();
					history.push("/signup");
				}}
			>
				<Alert variant="filled" color="success" onClose={toggleSuccessAlert} severity="success">
					Account Created Successfully
				</Alert>
			</Snackbar>
		</>
	);
};

export default RegisterBusiness;
