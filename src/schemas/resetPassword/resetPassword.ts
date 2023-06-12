import * as yup from "yup";

export const resetPasswordSchema = yup
  .object()
  .shape({
    old_password: yup
      .string()
      .trim()
      .required("Password is mandatory")
      .min(4, "Password should contain at least 8 characters"),
    password: yup
      .string()
      .trim()
      .required("Password is mandatory")
      .min(4, "Password should contain at least 8 characters"),
    password2: yup
      .string()
      .trim()
      .required("Password is mandatory")
      .min(4, "Password should contain at least 8 characters"),
  })
  .required();
