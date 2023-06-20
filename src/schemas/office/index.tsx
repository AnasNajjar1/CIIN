import * as yup from "yup";

export const officeSchema = yup
  .object()
  .shape({
    suite: yup.string(),
    address1: yup.string(),
    address2: yup.string(),
    country: yup.string(),
    province: yup.string(),
    city: yup.string(),
    postalCode: yup.string(),
    phone1: yup.string(),
    phone2: yup.string(),
    fax: yup.string(),
  })
  .required();
