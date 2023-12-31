import { ReactNode } from "react";
import { FieldValues, UseControllerProps } from "react-hook-form";

export type TTextFieldProps<T extends FieldValues> = UseControllerProps<T> & {
  name: string;
  label: string;
  placeholder?: string;
  message?: string;
  icon?: ReactNode;
  type?: "text" | "email" | "password";
  onChange?: () => void;
};
