import * as yup from "yup";

export const contactSchema = yup
  .object()
  .shape({
    first_name: yup
      .string()
      .trim()
      .required("First name is mandatory")
      .min(3, "First name should contain at least 3 characters"),
    last_name: yup
      .string()
      .trim()
      .required("Last name is mandatory")
      .min(3, "Last name should contain at least 3 characters"),
    phone_number: yup.string().matches(/^\+(?:[0-9] ?){6,14}[0-9]$/, {
      message:
        "Provide phone number in international format (e.g. +1 234 567 890)",
      excludeEmptyString: true,
    }),
    ext: yup.string().matches(/^-?\d+$/, {
      message: "A valid integer is required",
      excludeEmptyString: true,
    }),
  })
  .required();
