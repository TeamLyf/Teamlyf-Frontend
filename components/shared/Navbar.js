import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { BsQuestionOctagon } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
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
        <BsQuestionOctagon className="w-[24px] h-[24px]" />
        <IoMdNotificationsOutline className="w-[24px] h-[24px]" />
        <div className="flex gap-6 items-center">
          <div className="w-[50px] h-[50px] relative">
            <Image
              src="/assets/profile_img.png"
              alt="profile image"
              width={50}
              height={50}
              className="absolute object-cover top-0 left-0"
            />
          </div>
          <div>
            <h3 className="text-[#4f4f4f] font-semibold text-[16px]">
              Kris Daniel
            </h3>
            <p className="text-[#4f4f4f] font-normal text-[14px]">
              Product Manager
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
