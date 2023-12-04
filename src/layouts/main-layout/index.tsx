import { FC, PropsWithChildren, ReactElement } from "react";

export const MainLayout: FC<PropsWithChildren> = ({
  children,
}): ReactElement => {
  return (
    <main className="w-full h-screen flex justify-center items-center">
      {children}
    </main>
  );
};
