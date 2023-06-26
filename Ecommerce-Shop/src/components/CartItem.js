import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import { IoMdAdd, IoMdClose, IoMdRemove } from 'react-icons/io';
const CartItem = ({ item }) => {
  const { id, title, image, price, amount } = item;
  const { cart, removeFromCart, reduceFromCart,plusQuantity } = useContext(CartContext);
  const { itemAmount } = useContext(CartContext);
  return (
    <div className={`w-full flex gap-x-4 py-2 lg:px-6 ${"border-b border-gray-200"}
     w-full font-light text-gray-500`}>
      <div className="w-full min-h-[150px] relative flex items-center gap-x-4">
        <Link to={`/product/${id}`}>
          <img src={image} className='max-w-[80px]' />
        </Link>
        <div className="flex flex-1 flex-col">
          <div className="w-full flex justify-between mb-2">
            <Link to={`/product/${id}`} className="text-sm uppercase font-semibold max-w-[240px] text-primary
          hover:underline">
              {title}
            </Link>
            <div onClick={_ => removeFromCart(id)} className="text-xl cursor-pointer mr-2">
              <IoMdClose className="text-gray-500 hover:text-red-500" />
            </div>
          </div>
          <div className="flex items-center gap-x-2 h-[36px] text-sm">
            <div className="flex flex-1 items-center max-w-[100px] h-full border text-primary font-medium">
              <div onClick={_ => reduceFromCart(id)} className="flex flex-1 justify-center items-center cursor-pointer">
                <IoMdRemove />
              </div>
              <div className="h-full flex justify-center items-center px-2 select-none">{amount}</div>
              <div onClick={_ => plusQuantity(id)} className="flex flex-1 h-full justify-center items-center cursor-pointer">
                <IoMdAdd />
              </div>
            </div>
            <div className="flex flex-1 items-center justify-around">$ {price}</div>
            <div className="flex flex-1 justify-end items-center text-primary font-medium">
              {`$ ${parseFloat(price * amount).toFixed(2)}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;