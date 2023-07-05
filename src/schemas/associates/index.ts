import * as yup from "yup";

export const associatesSchema = yup
  .object()
  .shape({
    name: yup
      .string()
      .trim()
      .required("Name is mandatory")
      .min(4, "Name should contain at least 4 characters")
      .max(50, "Name should contain at most 50 characters"),
  })
  .required();
