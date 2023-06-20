import * as yup from "yup";

export const companyInfoSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required("Name is mandatory")
    .min(4, "Name should contain at least 4 characters")
    .max(50, "Name should contain at most 50 characters"),
  notes: yup.string(),
  date: yup.string().required("AsOfDate is mandatory"),
  lastName: yup
    .string()
    .trim()
    .required("Last name is mandatory")
    .min(4, "Last name should contain at least 4 characters")
    .max(50, "Last name should contain at most 50 characters"),
  website: yup.string(),
  range: yup.string().required("Name is mandatory"),
  sector: yup.string(),
  industry: yup.string(),
});
