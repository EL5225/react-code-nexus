import { FC } from "react";
import logo from "@/assets/logo.png";
import { TImageProps } from "./types";

export const TextLogo: FC<TImageProps> = ({ ...props }) => {
  return <img src={logo} alt="logo" {...props} />;
};
