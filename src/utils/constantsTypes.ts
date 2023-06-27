import { QueryKey, UseMutationOptions, UseQueryOptions } from "react-query";

export type sidebarMenuListType = {
  icon: string;
  title: string;
  link: string;
};
export type Option = {
  value: string;
  label: string;
};
export type OptionsTypeReactQuery<T> =
  | Omit<UseQueryOptions<T, Error, T, QueryKey>, "queryKey" | "queryFn">
  | undefined;
export type OptionsTypeReactMutation<TQuery> =
  | Omit<UseMutationOptions<any, Error, TQuery, unknown>, "mutationFn">
  | undefined;
