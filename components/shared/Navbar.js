import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { BsQuestionOctagon } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";

import ProfileActions from "./ProfileActions";
const Navbar = () => {
  return (
    <nav className="navbar ">
      <div>logo</div>
      <div className="searchbar">
        <CiSearch className="absolute top-[50%] left-[20px] translate-x-[-50%] translate-y-[-50%] text-[30px] my-auto " />
        <input
          type="search"
          name="search"
          id="search"
          className="searchbar_input"
        />
      </div>

      <div className="flex  gap-6 items-center">
        <BsQuestionOctagon className="w-[24px] h-[24px] cursor-pointer" />
        <IoMdNotificationsOutline className="w-[24px] h-[24px] cursor-pointer" />

        <ProfileActions
          width={50}
          height={50}
          classname="relative w-[50px] h-[50px]"
        />
      </div>
    </nav>
  );
};

export default Navbar;
