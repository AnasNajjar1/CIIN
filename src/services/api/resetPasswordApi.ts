import axios from "../request";
import { ResetPasswordRequest } from "../apiTypes/types";

export const resetPassword = async (
  resetPasswordRequest: ResetPasswordRequest,
) => {
  const { id, token, ...rest } = resetPasswordRequest;
  const response = await axios.put<void>(`change_password/${id}/`, rest, {
    headers: { Authorization: `token ${token}` },
  });
  return response.data;
};
