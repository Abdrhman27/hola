import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';
import CartItem from "./CartItem";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
const Sidebar = () => {
  const { isOpen, handleSidebar } = useContext(SidebarContext);
  const { cart, clearCart, itemAmount, total } = useContext(CartContext);
  return (
    <div className={`${isOpen ? "right-0" : "-right-full"} w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] 
  transition-all duration-300 z-20 px-4 lg:px-[34px]`}>
      <div className="flex items-center justify-between py-6 border-b">
        <div className="uppercase text-sm font-semibold">Shopping Bag ({itemAmount})</div>
        <div className="flex items-center justify-center">
          <div className="cursor-pointer w-8 h-8 flex justify-center items-center" onClick={handleSidebar}>
            <IoMdArrowForward className="text-2xl" />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-2 h-[420px] lg:h-[450px] border-b overflow-y-auto overflow-x-hidden">
        {cart.map(item => <CartItem item={item} key={item.id} />)}
      </div>
      <div className="flex w-full justify-between items-center py-4">
        <div className="uppercase font-semibold"><span className="mr-2">Total: </span> $ {total}</div>
        <div onClick={clearCart} className="clear-cart cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex
          justify-center items-center text-xl"><FiTrash2/></div>
      </div>
      <Link to='/' className="bg-gray-200 p-4 flex justify-center items-center text-primary w-full font-medium mb-2">View Cart</Link>
      <Link to='/' className="bg-primary p-4 flex justify-center items-center text-white w-full font-medium">Checkout</Link>
    </div>
  );
};

export default Sidebar;