import { FC } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { ContentLayout } from "@/layouts";
import { Button, TextField, TextLogo } from "@/components";
import { type TLoginSchema, loginSchema } from "./schema";

export const LoginModule: FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TLoginSchema>({
    mode: "all",
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <ContentLayout>
      <div className="w-full h-full flex flex-col justify-center items-center gap-4">
        <TextLogo />
        <div className="w-full p-5 sm:w-[30.5rem] lg:mt-0 sm:border rounded-xl sm:px-14 text-center">
          <h1 className="text-3xl font-semibold m-2">Welcome Back</h1>
          <p className="font-medium text-[#4D4D4D]">
            Enter Your Credentials to access your account.
          </p>
          <form onSubmit={onSubmit} className="flex flex-col gap-6 mt-10">
            <TextField
              name="email"
              icon={<AiOutlineMail />}
              control={control}
              label="Your Email"
              placeholder="Enter your email"
              message={errors.email?.message}
            />

            <TextField
              name="password"
              icon={<AiOutlineLock />}
              control={control}
              label="Password"
              type="password"
              placeholder="Enter your password"
              message={errors.password?.message}
            />
            <Button
              disabled={isSubmitting}
              className="w-full border rounded-md py-2 my-5 text-xl text-white bg-gradient-to-r from-[#3440FF] to-[#00BED1] hover:shadow-md disabled:bg-sky-950"
            >
              Sign in
            </Button>
          </form>
          <h2 className="text-sm font-medium">
            Do not have an account?{" "}
            <Link to="/signup" className="text-[#009EFF] cursor-pointer hover:underline">
              Sign up
            </Link>
          </h2>
        </div>
      </div>
    </ContentLayout>
  );
};
