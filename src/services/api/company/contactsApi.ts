import { Contact, RequestAddContact } from "../../apiTypes/types";
import axios from "../../request";
const basePath = "contacts/";
export const getContacts = async () => {
  const response = await axios.get<Contact[]>(basePath);
  return response.data;
};
export const updateContact = async (request: Contact) => {
  const { id, ...body } = request;
  const response = await axios.put(`${basePath}${id}/test`, body);
  return response.data;
};
export const addContact = async (request: RequestAddContact) => {
  const response = await axios.post(basePath, request);
  return response.data;
};
export const deleteContact = async (id: string) => {
  const response = await axios.delete(`${basePath}${id}/`);
  return response.data;
};
