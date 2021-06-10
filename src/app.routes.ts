import { lazy } from "react";

const SignUpComponent = lazy(() => import("views/onboarding/Signup"));
const SignUpBusinessComponent = lazy(() => import("views/onboarding/RegisterBusiness"));

const appRoutes = [
  {
    path: "/signup",
    component: SignUpComponent,
    title: "Sign Up"
  },
  {
    path: "/signup/business-details",
    component: SignUpBusinessComponent,
    title: "Register Business"
  }
];

export default appRoutes;