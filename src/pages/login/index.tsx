import { ReactElement, Suspense } from "react";
import { lazily } from "react-lazily";
import { Spinner } from "@/components";
const { LoginModule } = lazily(() => import("@/modules"));

export const Login = (): ReactElement => {
  return (
    <Suspense fallback={<Spinner />}>
      <LoginModule />
    </Suspense>
  );
};
