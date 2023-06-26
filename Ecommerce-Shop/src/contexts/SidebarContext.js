import React, { useContext, createContext, useState} from 'react';

export const SidebarContext = createContext();

export const SidebarProvider = ({children}) => {
  const [isOpen,setIsOpen] = useState(false);
  const handleSidebar = () => setIsOpen((prev) => !prev);
  return (
    <SidebarContext.Provider value={{isOpen,setIsOpen,handleSidebar}}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;
