import { OptionsTypeReactMutation } from "../../../utils/constantsTypes";
import { useMutation, useQuery } from "react-query";
import { Associate } from "../../../services/apiTypes/types";
import { OptionsTypeReactQuery } from "../../../utils/constantsTypes";
import {
  addAssociate,
  deleteAssociate,
  getAssociates,
  updateAssociate,
} from "../../../services/api/company/associatesApi";

export enum ServerStateCompanyAssociatesEnum {
  CompanyAssociates = "CompanyAssociates",
}
export const useGetAssociates = (options?: OptionsTypeReactQuery<Associate[]>) =>
  useQuery<Associate[], Error>(
    [ServerStateCompanyAssociatesEnum.CompanyAssociates],
    () => getAssociates(),
    options,
  );
export const useUpdateAssociate = <TQuery>(
  options?: OptionsTypeReactMutation<TQuery>,
) => useMutation(updateAssociate, options);
export const useAddAssociate = <TQuery>(
  options?: OptionsTypeReactMutation<TQuery>,
) => useMutation(addAssociate, options);
export const useDeleteAssociate = <TQuery>(
  options?: OptionsTypeReactMutation<TQuery>,
) => useMutation(deleteAssociate, options);
