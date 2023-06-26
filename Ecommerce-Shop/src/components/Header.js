import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';
import { BsBag } from 'react-icons/bs';
import logo from "../img/logo.svg";
const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const { handleSidebar } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  useEffect(() => {
    window.addEventListener("scroll",() => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });
  return (
    <header className={`${ isActive ? "bg-white py-4 shadow-md" : "bg-none py-6 "} fixed w-full z-10 transition-all`}>
      <div className="container mx-auto flex justify-between items-center">
        <Link to='/'>
          <div>
            <img className="w-[40px]" src={logo} alt="logo" />
          </div>
        </Link>
        <div className="flex cursor-pointer relative" onClick={_ => handleSidebar()}>
          <BsBag className='text-2xl' />
          <div className="absolute -bottom-2 -right-2 bg-red-400 w-[18px] h-[18px] text-[12px] text-white rounded-full
        flex justify-center items-center">{itemAmount}</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
