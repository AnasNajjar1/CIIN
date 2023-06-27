import { OptionsTypeReactMutation } from "./../../../utils/constantsTypes";
import { useMutation, useQuery } from "react-query";
import { Contact } from "../../../services/apiTypes/types";
import { OptionsTypeReactQuery } from "../../../utils/constantsTypes";
import {
  addContact,
  deleteContact,
  getContacts,
  updateContact,
} from "../../../services/api/company/contactsApi";

export enum ServerStateCompanyContactsEnum {
  CompanyContacts = "CompanyContacts",
}
export const useGetContacts = (options?: OptionsTypeReactQuery<Contact[]>) =>
  useQuery<Contact[], Error>(
    [ServerStateCompanyContactsEnum.CompanyContacts],
    () => getContacts(),
    options,
  );
export const useUpdateContact = <TQuery>(
  options?: OptionsTypeReactMutation<TQuery>,
) => useMutation(updateContact, options);
export const useAddContact = <TQuery>(
  options?: OptionsTypeReactMutation<TQuery>,
) => useMutation(addContact, options);
export const useDeleteContact = <TQuery>(
  options?: OptionsTypeReactMutation<TQuery>,
) => useMutation(deleteContact, options);
