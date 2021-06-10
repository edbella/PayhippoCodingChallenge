import { Typography } from "@material-ui/core";
import { SelectField, TextInput } from "components/reusables";
import PhoneInput from "components/reusables/Inputs/PhoneInput";
import { FormikProps } from "formik";
import { businessDetailsFormFields } from "../constants";

const BusinessDetails = ({ formik }: { formik: FormikProps<any> }) => {
	const { handleChange, handleBlur, errors, touched, values } = formik;

	return (
		<>
			<Typography align="center" variant="h3">
				Tell us about your business.
			</Typography>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto">
				{businessDetailsFormFields?.map(
					({ key, label, placeholder, options, type, multiple }) => {

						if (type === "select") {
							return (
								<SelectField
									key={key}
									name={key}
									label={label}
									onChange={handleChange}
									onBlur={handleBlur}
									hasError={Boolean(errors?.[key] && touched?.[key])}
									errorMessage={errors?.[key]}
                  value={values?.[key]}
                  optionsList={options}
                  multiselect={multiple}
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

export default BusinessDetails;
