import { FC } from "react";
import { TButtonProps } from "./types";

export const Button: FC<TButtonProps> = ({ children, ...props }) => {
  return (
    <button
      className="flex justify-center items-center p-4 rounded-md bg-green-500"
      {...props}>
      {children}
    </button>
  );
};
