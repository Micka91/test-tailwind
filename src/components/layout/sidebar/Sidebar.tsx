import { PropsWithChildren } from "react";

const Sidebar = ({ children }: PropsWithChildren) => {
  return <div className="w-60 h-full pl-6">{children}</div>;
};

export default Sidebar;
