import { createContext, useState } from "react";

const NavTogglerContext = createContext();

const NavTogglerStateProvider = ({ children }) => {
  const [activeNav, setActiveNav] = useState(false);

  return (
    <NavTogglerContext.Provider value={{activeNav, setActiveNav}}>
      {children}
    </NavTogglerContext.Provider>
  );
};

export { NavTogglerContext, NavTogglerStateProvider };
