import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";

function List() {
  return (
    <div className='w-3/12 border-r p-4'>
          <ul>
          <li className="py-2 flex items-center justify-between  "><a href="#" className="text-lg">Woman's Fashion</a> <MdKeyboardArrowRight size={25}/></li>
        <li className="py-2 flex items-center justify-between  "><a href="#" className="text-lg" >Men's Fashion</a> <MdKeyboardArrowRight size={25}/></li>
        <li className="py-2 "><a href="#" className="text-lg">Electronics</a></li>
        <li className="py-2 "><a href="#" className="text-lg">Home & Lifestyle</a></li>
        <li className="py-2 "><a href="#" className="text-lg">Medicine</a></li>
        <li className="py-2 "><a href="#" className="text-lg">Sports & Outdoor</a></li>
        <li className="py-2 "><a href="#" className="text-lg">Baby's & Toys</a></li>
        <li className="py-2 "><a href="#" className="text-lg">Groceries & Pets</a></li>
        <li className="py-2 "><a href="#" className="text-lg">Health & Beauty</a></li>
         </ul>
    </div>
  )
}

export default List;
