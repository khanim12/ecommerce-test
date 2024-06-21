import React from "react";
import datas from "../../../data/product.json";
import { MdPhoneAndroid } from "react-icons/md";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { BsSmartwatch } from "react-icons/bs";
import { IoCameraOutline } from "react-icons/io5";
import { CiHeadphones } from "react-icons/ci";
import { IoGameControllerOutline } from "react-icons/io5";

const iconMap = {
  MdPhoneAndroid: MdPhoneAndroid,
  HiOutlineComputerDesktop: HiOutlineComputerDesktop,
  BsSmartwatch: BsSmartwatch,
  IoCameraOutline: IoCameraOutline,
  CiHeadphones: CiHeadphones,
  IoGameControllerOutline: IoGameControllerOutline,
};

function Cslider() {
  return (
    <div className="flex flex-wrap justify-between gap-1 ">
      {datas.browseByCategory.map((category, index) => {
        const IconComponent = iconMap[category.icon];
        if (!IconComponent) {
          console.error(`Icon for ${category.icon} not found in iconMap`);
          return null;
        }
        return (
          <div
            className="hover:bg-[#db4444] hover:text-white	 card flex p-4 border-2 m-1 flex-col items-center justify-center w-44 h-48 cursor-pointer	"
            key={index}
          >
            <IconComponent size={64} />
            <p className="mt-6 ">{category.name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Cslider;
