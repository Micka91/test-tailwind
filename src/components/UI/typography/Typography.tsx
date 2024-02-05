import { ComponentPropsWithoutRef, PropsWithChildren } from "react";

const Typography = ({
  children,
  ...rest
}: PropsWithChildren<ComponentPropsWithoutRef<"p">>) => {
  return <p {...rest}>{children}</p>;
};

export default Typography;
