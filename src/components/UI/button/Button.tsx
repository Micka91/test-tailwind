import { ComponentPropsWithRef, PropsWithChildren } from "react";

const Button = ({
  children,
  ...rest
}: PropsWithChildren<ComponentPropsWithRef<"button">>) => {
  return <button {...rest}>{children}</button>;
};

export default Button;
