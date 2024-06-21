import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";

function HeaderRight() {
  return (
    <div className='flex items-center gap-6'>
      <div className='flex items-center border px-3 py-2 rounded-md bg-gray-200	 '>
        <input className='bg-gray-200 outline-none text-sm' type="search" placeholder='What are you loooking for?' />
        <IoSearchOutline size={25} />
      </div>
      <FaRegHeart size={25}/>
      <div className='relative'>
        <div className='absolute -top-3 -right-3 w-5 h-5 text-white bg-red-500 rounded-full flex items-center justify-center'>3</div>
        <SlBasket size={25}/>
</div>
    </div>
  )
}

export default HeaderRight
