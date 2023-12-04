import { Spinner } from "@/components";
import { lazily } from "react-lazily";
import { ReactElement, Suspense } from "react";
const { HomeModule } = lazily(() => import("@/modules"));

export const Home = (): ReactElement => {
  return (
    <Suspense fallback={<Spinner />}>
      <HomeModule />
    </Suspense>
  );
};
