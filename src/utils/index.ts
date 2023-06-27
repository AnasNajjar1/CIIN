import { Contact } from "../services/apiTypes/types";

export const getMainContact = (contacts: Contact[] | undefined) =>
  contacts ? contacts.find((contact) => contact.main_contact) : undefined;
export const getPreviousContact = (contacts: Contact[] | undefined) =>
  contacts
    ? contacts.find((contact) => contact.previous_main_contact)
    : undefined;
