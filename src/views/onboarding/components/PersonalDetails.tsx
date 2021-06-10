import { Typography } from "@material-ui/core";
import { AutocompletField, DateInput, TextInput } from "components/reusables";
import PhoneInput from "components/reusables/Inputs/PhoneInput";
import { FormikProps } from "formik";
import { personalDetailsFormFields } from "../constants";

const PersonalDetails = ({ formik }: { formik: FormikProps<any> }) => {
	const { handleChange, handleBlur, errors, touched, values } = formik;

	return (
		<>
			<Typography align="center" variant="h3">
				Tell us about you.
			</Typography>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto">
				{personalDetailsFormFields?.map(
					({ key, label, placeholder, options, type }) => {
						if (type === "date") {
							return (
								<DateInput
									key={key}
									name={key}
									label={label}
									onChange={handleChange}
									onBlur={handleBlur}
									hasError={Boolean(errors?.[key] && touched?.[key])}
									errorMessage={errors?.[key]}
									value={values?.[key]}
									disableFuture
								/>
							);
						}

						if (type === "select") {
							return (
								<AutocompletField
									key={key}
									name={key}
									label={label}
									onChange={handleChange}
									onBlur={handleBlur}
									hasError={Boolean(errors?.[key] && touched?.[key])}
									errorMessage={errors?.[key]}
                  value={values?.[key]}
                  optionsList={options}
                  filterSelectedOptions={false}
								/>
							);
            }
            
            if (type === "phone") {
              return (
                <PhoneInput
                  key={key}
                  name={key}
                  label={label}
                  onChange={handleChange}
                  placeholder={placeholder}
                  onBlur={handleBlur}
                  hasError={Boolean(errors?.[key] && touched?.[key])}
                  errorMessage={errors?.[key]}
                  value={values?.[key]}
                />
              );
            }

						return (
							<TextInput
								key={key}
								name={key}
								label={label}
								onChange={handleChange}
								placeholder={placeholder}
								onBlur={handleBlur}
								hasError={Boolean(errors?.[key] && touched?.[key])}
								errorMessage={errors?.[key]}
								value={values?.[key]}
							/>
						);
					}
				)}
			</div>
		</>
	);
};

export default PersonalDetails;
