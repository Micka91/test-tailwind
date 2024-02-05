import MenuItem from "@/components/menuItem/MenuItem";
import MenuProvider from "@/context/MenuProvider";
import { MenuItems } from "@/types";
import React from "react";

interface MenuProps {
  items: MenuItems[];
}

const Menu = ({ items }: MenuProps) => {
  return (
    <MenuProvider>
      <ul>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <MenuItem menuIndex={index} {...item} />
            {(index + 1) % 3 === 0 ? <br /> : null}
          </React.Fragment>
        ))}
      </ul>
    </MenuProvider>
  );
};

export default Menu;
