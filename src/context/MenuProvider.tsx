import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

type MenuContextType = {
  selectedItem: number;
  setSelectedItem: Dispatch<SetStateAction<number>>;
};

const MenuContext = createContext<MenuContextType | null>(null);

const MenuProvider = ({ children }: PropsWithChildren) => {
  const [selectedItem, setSelectedItem] = useState(0);

  const values = { selectedItem, setSelectedItem };

  return <MenuContext.Provider value={values}>{children}</MenuContext.Provider>;
};

export default MenuProvider;

export function useMenuContext() {
  const context = useContext(MenuContext);

  if (!context) {
    throw Error("useMenuContext cannot be used outside a MenuContextProvider");
  }

  return context;
}
