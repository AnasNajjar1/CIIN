import * as yup from "yup";

export const signUpSchema = yup
    .object()
    .shape({
        name: yup
            .string()
            .trim()
            .required("Username is mandatory")
            .min(8, "Username should contain at least 8 characters")
            .max(50, "Username should contain at most 50 characters"),
        title: yup
            .string()
            .trim()
            .required("Password is mandatory")
            .min(8, "Password should contain at least 8 characters"),
        company: yup
            .string()
            .trim()
            .required("Password is mandatory")
            .min(8, "Password should contain at least 8 characters"),
        phone: yup
            .string()
            .trim()
            .required("Password is mandatory")
            .min(8, "Password should contain at least 8 characters"),
        email: yup
            .string()
            .trim()
            .required("Password is mandatory")
            .min(8, "Password should contain at least 8 characters"),
    })
    .required();
