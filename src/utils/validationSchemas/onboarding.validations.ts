import * as Yup from "yup";

export const onboardingValidationSchema = Yup.object({
  firstName: Yup.string().required("Please provide your first name"),
  lastName: Yup.string().required("Please provide your last name"),
  email: Yup.string().required("Please provide your email"),
  gender: Yup.string().required("Please tell us your gender"),
  maritalStatus: Yup.string().required("Please provide your marital status"),
  qualification: Yup.string().required("Please tell us your qualifications"),
  dob: Yup.date()
  .typeError("Date of Birth cannot be left blank")
  .required("Date of Birth cannot be left blank"),
  phoneNumber: Yup.string().required("Please provide your phone number").length(10, "Invalid phone number provided"),
});

export const onboardingOtpValidationSchema = Yup.object({
  otp: Yup.string().required("Please provide OTP code").length(6, "Invalid OTP provided"),
});

export const onboardingBusinessValidationSchema = Yup.object({
  businessName: Yup.string().required("Please provide your business name"),
  businessAddress: Yup.string().required("Please provide business address"),
  businessOwnerAddress: Yup.string().required("Please provide business owners' address"),
  businessType: Yup.string().required("Please specify type of business"),
  lendingPlatforms: Yup.array(Yup.string()),
  phoneNumber: Yup.string().required("Please provide your business phone number").length(10, "Invalid phone number provided"),
});

export const onboardingBVNValidationSchema = Yup.object({
  bvn: Yup.string().required("Please provide BVN").length(11, "Invalid BVN provided"),
});