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
      className={`leftsidebar bg-white ${isopen ? "w-[60px]" : "w-[200px]"} `}
    >
      <ul className="absolute top-20 left-0 w-full h-full px-2">
        <div
          className={`leftsidebar_link ${isopen && "tooltip"}`}
          data-tip="workspace"
        >
          <Image
            src={"/assets/sideicon9.svg"}
            alt="label"
            width={20}
            height={20}
          />
          <span className={`${isopen && "hidden"} origin-left duration-200`}>
            workspace
          </span>
        </div>
        <div className="absolute top-[15px] right-[-20px] stroke-black translate-x-[-50%] translate-y-[-50%] text-[20px]">
          {isopen ? (
            <TbLayoutSidebarLeftExpandFilled
              className="cursor-pointer"
              onClick={() => setisOpen(!isopen)}
            />
          ) : (
            <TbLayoutSidebarRightExpand
              className="cursor-pointer"
              onClick={() => setisOpen(!isopen)}
            />
          )}
        </div>
        {Sidebarlinks.map((link) => (
          <li className="relative mt-2.5">
            <Link
              className={`leftsidebar_link ${isopen && "tooltip"}`}
              key={link.label}
              href={link.route}
              data-tip={`${link.label}`}
            >
              <Image src={link.icons} alt={link.label} width={20} height={20} />
              <span
                className={`${
                  isopen && "hidden"
                } origin-left duration-200 truncate`}
              >
                {link.label}
              </span>
            </Link>
          </li>
        ))}
        <div className="absolute bottom-[100px] left-0 w-full px-2">
          <li className="relative">
            <Link
              className={`leftsidebar_link ${isopen && "tooltip"}`}
              data-tip="help"
              href=""
            >
              <Image
                src={"/assets/sideicon8.svg"}
                alt={"label"}
                width={20}
                height={20}
              />
              <span
                className={`${
                  isopen && "hidden"
                } origin-left duration-200 truncate`}
              >
                help
              </span>
            </Link>
          </li>

          <li className="relative mt-2.5">
            <Link
              className={`leftsidebar_link ${isopen && "tooltip"}`}
              data-tip="accessibility"
              href=""
            >
              <Image
                src={"/assets/sideicon9.svg"}
                alt={"label"}
                width={20}
                height={20}
              />
              <span
                className={`${
                  isopen && "hidden"
                } origin-left duration-200 truncate`}
              >
                accessibility
              </span>
            </Link>
          </li>
          <li className="relative mt-2.5">
            <Link
              className={`leftsidebar_link ${isopen && "tooltip"}`}
              data-tip="logout"
              href=""
            >
              <Image
                src={"/assets/sideicon10.svg"}
                alt={"label"}
                width={20}
                height={20}
              />
              <span
                className={`${
                  isopen && "hidden"
                } origin-left duration-200 truncate`}
              >
                logout
              </span>
            </Link>
          </li>
        </div>
      </ul>
    </aside>
  );
};

export default LeftSidebar;
