import * as yup from "yup";

export const previousTrackingSchema = yup.object().shape({
  contactName: yup
    .string()
    .trim()
    .required("Contact Name is mandatory")
    .min(4, "Contact Name should contain at least 4 characters")
    .max(50, "Contact Name should contain at most 50 characters"),
  date: yup.string(),
  notes: yup.string(),
});
