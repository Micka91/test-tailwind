import { useMenuContext } from "@/context/MenuProvider";
import { MenuItems } from "@/types";

interface MenuItemProps extends MenuItems {
  menuIndex: number;
}

const MenuItem = ({ icon, link, menuIndex }: MenuItemProps) => {
  const { selectedItem } = useMenuContext();

  return (
    <li
      className={`flex items-center gap-2 rounded-2xl p-1 pl-4 hover:bg-gray-100 cursor-pointer ${
        menuIndex === selectedItem ? "bg-sky-200" : "bg-white"
      }`}
    >
      <span>{icon}</span>
      <span className="normal-case">{link}</span>
    </li>
  );
};

export default MenuItem;
