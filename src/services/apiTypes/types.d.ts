import { Associate } from "./types.d";
export interface UserDetails {
  id: number;
  email: string;
}
export interface LoginResponse {
  token: string;
  user: UserDetails;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface ResetPasswordRequest {
  id: number;
  old_password: string;
  password: string;
  password2: string;
  token: string;
}
export interface Contact {
  id: string;
  phone_number: string;
  ext: number;
  fax: string;
  email: string;
  second_email: string;
  first_name: string;
  last_name: string;
  title: string;
  type: string;
  company: string;
  main_contact: boolean;
  previous_main_contact: boolean;
  previous_main_contact_date_left: string | null;
  notes: string;
  publish: boolean;
  management_db: boolean;
  non_management_db: boolean;
  management_dc_rrsp: boolean;
  non_management_dc_rrsp: boolean;
  consultant_db: boolean;
  management_benefits: boolean;
  non_management_benefits: boolean;
  consultant_dc_rrsp: boolean;
  other_job: boolean;
}

export type RequestAddContact = Omit<Contact, "id">;
export type AssociateType = "m" | "c" | "p" | "r" | "i" | "a";
export interface Associate {
  id: string;
  company: string;
  name: string;
  type: AssociateType;
  associate_specialty: string;
  plan_type: string;
  value: string;
}
export type RequestAddAssociate = Omit<Associate, "id">;
