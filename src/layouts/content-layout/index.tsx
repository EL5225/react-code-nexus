import { FC, PropsWithChildren, ReactElement } from "react";

export const ContentLayout: FC<PropsWithChildren> = ({
  children,
}): ReactElement => {
  return (
    <section className="w-full h-full flex justify-center items-center">
      {children}
    </section>
  );
};
