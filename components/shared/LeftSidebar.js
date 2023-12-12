"use client";
import Image from "next/image";
import Link from "next/link";
import { Sidebarlinks } from "../../constant/index.js";

const LeftSidebar = ({ isopen, setisOpen }) => {
  return (
    <aside
      className={`leftsidebar bg-white overflow-hidden ${
        isopen ? "w-[40px]" : "w-[150px]"
      } `}
    >
      <ul className="absolute top-0 left-0 w-full h-full">
        <div className="leftsidebar_link h-[70px] mb-[30px]">
          <Image
            src={"/assets/sideicon9.svg"}
            alt="label"
            width={15}
            height={15}
          />
          <span className={`${isopen && "hidden"} origin-left duration-200`}>
            help
          </span>
        </div>
        {Sidebarlinks.map((link) => (
          <li className="">
            <Link
              className="leftsidebar_link"
              key={link.label}
              href={link.route}
            >
              <Image src={link.icons} alt={link.label} width={15} height={15} />
              <span
                className={`${isopen && "hidden"} origin-left duration-200`}
              >
                {link.label}
              </span>
            </Link>
          </li>
        ))}
        <div className="absolute bottom-5 left-0 w-full">
          <div className="leftsidebar_link">
            <Image
              src={"/assets/sideicon8.svg"}
              alt="label"
              width={15}
              height={15}
            />

            <span className={`${isopen && "hidden"} origin-left duration-200`}>
              help
            </span>
          </div>

          <div className="leftsidebar_link">
            <Image
              src={"/assets/sideicon9.svg"}
              alt="label"
              width={15}
              height={15}
            />

            <span className={`${isopen && "hidden"} origin-left duration-200`}>
              help
            </span>
          </div>

          <div className="leftsidebar_link">
            <Image
              src={"/assets/sideicon10.svg"}
              alt="label"
              width={15}
              height={15}
            />

            <span className={`${isopen && "hidden"} origin-left duration-200`}>
              logout
            </span>
          </div>
        </div>
      </ul>
    </aside>
  );
};

export default LeftSidebar;
