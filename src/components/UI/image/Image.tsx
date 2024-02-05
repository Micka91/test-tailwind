import { ComponentProps } from "react";

const Image = ({ src, alt, ...rest }: ComponentProps<"img">) => {
  return <img src={src} alt={alt} {...rest} />;
};

export default Image;
