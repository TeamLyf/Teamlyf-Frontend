"use client";
import Image from "next/image";
import Link from "next/link";
import { Sidebarlinks } from "../../constant/index.js";
import {
  TbLayoutSidebarLeftExpandFilled,
  TbLayoutSidebarRightExpand,
} from "react-icons/tb";

const LeftSidebar = ({ isopen, setisOpen }) => {
  return (
    <aside
      className={`leftsidebar bg-white ${isopen ? "w-[40px]" : "w-[150px]"} `}
    >
      <ul className="absolute top-20 left-0 w-full h-full">
        <div className="leftsidebar_link">
          <Image
            src={"/assets/sideicon9.svg"}
            alt="label"
            width={15}
            height={15}
          />
          <span className={`${isopen && "hidden"} origin-left duration-200`}>
            workspace
          </span>

          {isopen ? (
            <TbLayoutSidebarLeftExpandFilled
              className="absolute top-[50%] right-[-15px] stroke-black translate-x-[-50%] translate-y-[-50%]"
              onClick={() => setisOpen(!isopen)}
            />
          ) : (
            <TbLayoutSidebarRightExpand
              className="absolute top-[50%] right-[-15px] translate-x-[-50%] translate-y-[-50%]"
              onClick={() => setisOpen(!isopen)}
            />
          )}
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
        <div className="absolute bottom-[100px] left-0 w-full">
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
