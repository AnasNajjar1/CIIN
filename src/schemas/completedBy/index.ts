import * as yup from "yup";

export const completedBySchema = yup
  .object()
  .shape({
    firstName: yup
      .string()
      .trim()
      .required("First name is mandatory")
      .min(4, "First name should contain at least 4 characters")
      .max(50, "First name should contain at most 50 characters"),
    lastName: yup
      .string()
      .trim()
      .required("First name is mandatory")
      .min(4, "First name should contain at least 4 characters")
      .max(50, "First name should contain at most 50 characters"),
    title: yup
      .string()
      .trim()
      .required("Title is mandatory")
      .min(4, "Title should contain at least 4 characters")
      .max(50, "Title should contain at most 50 characters"),
    email: yup
      .string()
      .trim()
      .required("Email is mandatory")
      .email("Invalid email"),
    phone: yup.string().matches(/^\d{3} \d{3}-\d{4}$/, {
      message:
        "Please enter a phone number in the following format : 123 123-1234",
      excludeEmptyString: true,
    }),
    ext: yup.string(),
    fax: yup.string(),
  })
  .required();
