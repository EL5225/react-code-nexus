import { FC } from "react";
import { TButtonProps } from "./types";
import { cn } from "@/libs";

export const Button: FC<TButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      className={cn("flex justify-center items-center p-4 rounded-md bg-green-500", className)}
      {...props}
    >
      {children}
    </button>
  );
};
