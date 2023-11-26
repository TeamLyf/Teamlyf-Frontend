import { CiSearch } from "react-icons/ci";
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
      <div>
        <IoMdNotificationsOutline />
      </div>
    </nav>
  );
};

export default Navbar;
