import * as yup from "yup";

export let validationSchemaOne = yup.object({
  firstName: yup
    .string()
    .required("Please enter your First Name")
    .min(3, "First name must contain at least 3 characters"),
  lastName: yup
    .string()
    .required("Please enter your Last Name")
    .min(3, "Last name must contain at least 3 characters"),
  emailAddress: yup
    .string()
    .email()
    .required("Please enter your valid email Address"),
  password: yup
    .string()
    .min(8, 'Must be at least 8 characters')
    .max(15, )
    .matches(/^.*[!@#$%^&*()_+\-=\]{};':"\\|,.<>?].*$/, 'At Least One Special Character')
    .matches(/^.*[0-9].*$/, 'At Least One Number')
    .required('Required'),
  confirmPassword: yup
     .string()
    .min(8, 'Must be at least 8 characters')
    .oneOf([yup.ref('password')], 'Password must match')
    .required('Required')
});

export let validationSchemaTwo = yup.object({
  address: yup
    .string()
    .required("This is a required field"),
  contact: yup
    .string()
    .min(10, 'must be atleast 11 characters')
    .max(10, 'it must be 11 characters')
    .required("This is a required field"),
  facebook: yup
    .string()
    .url()
    .required(),
});

export let validationSchemaThree = yup.object().shape({
  BankAccount: yup.string().required(),
  AccountNumber: yup
    .string()
    .min(13, "Your account number contains 13 characters")
    .required(),
  CreditCardNumber: yup
    .string()
    .min(16, "Your credit card number contains 16 characters")
    .required("This is a required field"),
  DebitCardNumber: yup
    .string()
    .min(16, "Your debit card number contains 16 characters")
    .max(16, 'Debit card number must be in 16 characters')
    .required("This is a required field"),
});