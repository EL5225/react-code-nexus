import { FC } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { ContentLayout } from "@/layouts";
import { Button, TextLogo } from "@/components";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});

type TLoginSchema = z.infer<typeof loginSchema>;

export const LoginModule: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TLoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: TLoginSchema) => {
    console.log(data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
  };
  return (
    <ContentLayout>
      <div className="w-full flex flex-col justify-center items-center py-36 px-5 overflow-hidden">
        <TextLogo className="pt-36" />
        <div className="grid w-full px-5 py-5 mt-5 sm:w-[30.5rem] sm:mt-12 border rounded-xl sm:py-11 sm:px-14 text-center">
          <h1 className=" text-3xl font-semibold m-2">Welcome Back</h1>
          <p className="font-medium text-[#4D4D4D]">
            Enter Your Credentials to access your account.
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-11">
            <div className="flex flex-col mb-5">
              <label htmlFor="email" className="text-start font-semibold">
                Your Email
              </label>
              <div className="relative mt-2 rounded-md border focus-within:border text-gray-600 border-gray-500 focus-within:text-blue-600 focus-within:border-blue-600">
                <div className="absolute inset-y-0 start-0 flex items-center ps-4 font-thin text-xl">
                  <AiOutlineMail />
                </div>
                <input
                  id="email"
                  type="email"
                  {...register("email")}
                  autoComplete="email-doctor"
                  className="w-full rounded-md p-2 pe-8 ps-14 text-base text-black font-normal focus:border-0 focus:outline-none focus:ring-0"
                  placeholder="Enter your email"
                />
              </div>
              {errors.email && (
                <span className="text-red-500">{`${errors.email.message}`}</span>
              )}
            </div>
            <div className="flex flex-col mb-5">
              <label htmlFor="password" className="text-start font-semibold">
                Password
              </label>
              <div className="relative mt-2 rounded-md border focus-within:border text-gray-600 border-gray-500 focus-within:text-blue-600 focus-within:border-blue-600">
                <div className="absolute inset-y-0 start-0 flex items-center ps-4 font-thin text-xl">
                  <AiOutlineLock />
                </div>
                <input
                  id="password"
                  type="password"
                  {...register("password")}
                  autoComplete="password-doctor"
                  className="w-full rounded-md p-2 pe-8 ps-14 text-base text-black font-normal focus:border-0 focus:outline-none focus:ring-0"
                  placeholder="Enter your password"
                />
              </div>
              {errors.password && (
                <span className="text-red-500">
                  {`${errors.password.message}`}
                </span>
              )}
            </div>
            <Button
              disabled={isSubmitting}
              className="w-full border rounded-md py-2 mt-5 mb-5 text-xl text-white bg-gradient-to-r from-[#3440FF] to-[#00BED1] hover:shadow-md disabled:bg-sky-950"
            >
              Sign in
            </Button>
          </form>
        </div>
        <h2 className="mt-10 text-xl font-medium">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-[#009EFF] cursor-pointer hover:underline"
          >
            Sign up
          </Link>
        </h2>
      </div>
    </ContentLayout>
  );
};
