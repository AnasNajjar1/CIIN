import { Associate, RequestAddAssociate } from "../../apiTypes/types";
import axios from "../../request";
const basePath = "associates/";
export const getAssociates = async () => {
  const response = await axios.get<Associate[]>(basePath);
  return response.data;
};
export const updateAssociate = async (request: Associate) => {
  const { id, ...body } = request;
  const response = await axios.put(`${basePath}${id}/`, body);
  return response.data;
};
export const addAssociate = async (request: RequestAddAssociate) => {
  const response = await axios.post(basePath, request);
  return response.data;
};
export const deleteAssociate = async (id: string) => {
  const response = await axios.delete(`${basePath}${id}/`);
  return response.data;
};
