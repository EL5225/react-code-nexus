import { ReactElement } from "react";
import { FieldValues, useController } from "react-hook-form";
import { TTextFieldProps } from "./types";

export const TextField = <T extends FieldValues>({
  type = "text",
  label,
  ...props
}: TTextFieldProps<T>): ReactElement => {
  const { field } = useController({
    ...props,
    rules: {
      required: true,
    },
  });

  return (
    <div className="flex flex-col">
      <label className="text-start font-semibold" htmlFor={props.name}>
        {label}
      </label>
      <div className="relative mt-2 rounded-md border focus-within:border text-gray-600 border-gray-500 focus-within:text-blue-600 focus-within:border-blue-600">
        <div className="absolute inset-y-0 start-0 flex items-center ps-4 font-thin text-xl">
          {props.icon}
        </div>
        <input
          type={type}
          {...{ ...props, ...field }}
          className="w-full rounded-md p-2 pe-8 ps-14 text-base text-black font-normal focus:border-0 focus:outline-none focus:ring-0"
        />
      </div>

      {props.message && (
        <span className="text-red-600 font-medium text-sm text-left mt-2">
          {props.message}
        </span>
      )}
    </div>
  );
};
