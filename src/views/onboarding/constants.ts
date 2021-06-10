export const personalDetailsFormFields = [
  {
    key: "firstName",
    label: "First Name",
    placeholder: "John",
  },
  {
    key: "lastName",
    label: "Last Name",
    placeholder: "Doe",
  },
  {
    key: "email",
    label: "Email",
    placeholder: "johndoe@mailinator.com",
  },
  {
    key: "phoneNumber",
    label: "Phone Number",
    placeholder: "8012345678",
    type: "phone",
  },
  {
    key: "gender",
    label: "Gender",
    options: [
      {
        id: "male",
        value: "Male",
      },
      {
        id: "female",
        value: "Female",
      },
      {
        id: "indifferent",
        value: "Prefer not to say",
      },
    ],
    type: "select",
  },
  {
    key: "dob",
    label: "Date of Birth",
    type: "date",
  },
  {
    key: "maritalStatus",
    label: "Marital Status",
    options: [
      {
        id: "single",
        value: "Single",
      },
      {
        id: "married",
        value: "Married",
      },
      {
        id: "divorced",
        value: "Divorced",
      },
      {
        id: "widowed",
        value: "Widowed",
      },
    ],
    type: "select",
  },
  {
    key: "qualification",
    label: "Highest Attended Qualification",
    options: [
      {
        id: "first",
        value: "First School Leaving Certificate",
      },
      {
        id: "ssce",
        value: "SSCE",
      },
      {
        id: "ond",
        value: "OND",
      },
      {
        id: "bsc/hnd",
        value: "BSc/HND",
      },
      {
        id: "msc",
        value: "Msc",
      },
      {
        id: "phd",
        value: "PHD",
      },
    ],
    type: "select",
  },
]

export const businessDetailsFormFields = [
  {
    key: "businessName",
    label: "First Name",
    placeholder: "PayHippo",
  },
  {
    key: "phoneNumber",
    label: "Business Phone Number",
    placeholder: "8012345678",
    type: "phone",
  },
  {
    key: "businessAddress",
    label: "Business Address",
    options: [
      {
        id: "lagos",
        value: "Lagos, Nigeria",
      },
      {
        id: "ibadan",
        value: "Ibadan, Nigeria",
      },
      {
        id: "abuja",
        value: "Abuja, Nigeria",
      },
    ],
    type: "select",
  },
  {
    key: "businessOwnerAddress",
    label: "Business Home Owner Address",
    options: [
      {
        id: "lagos",
        value: "Lagos, Nigeria",
      },
      {
        id: "ibadan",
        value: "Ibadan, Nigeria",
      },
      {
        id: "abuja",
        value: "Abuja, Nigeria",
      },
    ],
    type: "select",
  },
  {
    key: "businessType",
    label: "Type of Business",
    options: [
      {
        id: "fintech",
        value: "FinTech",
      },
      {
        id: "oil",
        value: "Oil and Gas/Petroleum",
      },
      {
        id: "construction",
        value: "Construction",
      },
      {
        id: "government",
        value: "Government",
      },
    ],
    type: "select",
  },
  {
    key: "lendingPlatforms",
    label: "Other Lending Platform You Use",
    options: [
      {
        id: "quick",
        value: "Quick Pay",
      },
      {
        id: "renmoney",
        value: "Renmoney",
      },
      {
        id: "kiakia",
        value: "Kia Kia",
      },
      {
        id: "MFB",
        value: "Microfinance Bank",
      },
    ],
    type: "select",
    multiple: true,
  },
]