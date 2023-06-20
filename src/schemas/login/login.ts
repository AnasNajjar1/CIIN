import * as yup from "yup";

export const loginSchema = yup
  .object()
  .shape({
    username: yup
      .string()
      .trim()
      .required("Username is mandatory")
      .min(8, "Username should contain at least 8 characters")
      .max(50, "Username should contain at most 50 characters"),
    password: yup
      .string()
      .trim()
      .required("Password is mandatory")
      .min(8, "Password should contain at least 8 characters"),
  })
  .required();
