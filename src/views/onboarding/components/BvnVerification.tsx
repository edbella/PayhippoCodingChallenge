import { makeStyles, SvgIcon, Typography } from "@material-ui/core";
import { Button, Link, SimpleModal, TextInput } from "components/reusables";
import { FormikProps } from "formik";
import useToggle from "utils/hooks/useToggle";
import { ReactComponent as HelpSvg } from "assets/svgs/bvn-illustration.svg";

const useStyles = makeStyles({
	modalIcon: {
		fontSize: "19rem",
	},
});

const BvnVerification = ({ formik }: { formik: FormikProps<any> }) => {
	const classes = useStyles();
	const { handleChange, handleBlur, errors, touched, values } = formik;
	const [showBvnHelpModal, toggleBvnHelpModal] = useToggle();

	return (
		<>
			<Typography align="center" variant="h3">
				Verify your phone number.
			</Typography>

			<div className="md:max-w-3/4 xl:max-w-1/2 mx-auto space-y-6">
				<Typography variant="subtitle1" color="textPrimary" align="center">
					Industry regulations require we collect this information to verify your
					indentity
				</Typography>

				<div className="space-y-2">
					<TextInput
						name="bvn"
						onChange={handleChange}
						onBlur={handleBlur}
						value={values?.bvn}
						label="BVN"
						placeholder="22345678901"
						hasError={Boolean(errors?.bvn && touched?.bvn)}
						errorMessage={errors?.bvn}
					/>
					<Link text="Can't remember your BVN?" onClick={toggleBvnHelpModal} />
				</div>
			</div>

			<SimpleModal
				title="Forgotten Your BVN?"
				open={showBvnHelpModal}
				onClose={toggleBvnHelpModal}
			>
				<div className="space-y-8 text-center">
					<SvgIcon className={classes.modalIcon} viewBox="0 0 305 235">
						<HelpSvg />
					</SvgIcon>
					<div>
						<Typography variant="h5" gutterBottom>
							Here’s what you need to do.
						</Typography>

						<Typography variant="body1">
							Dial <span className="font-semibold">*565*0#</span> from your BVN
							registered phone number.
						</Typography>
					</div>

					<Button text="Okay" onClick={toggleBvnHelpModal} />
				</div>
			</SimpleModal>
		</>
	);
};

export default BvnVerification;
