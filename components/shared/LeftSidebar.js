"use client";
import Image from "next/image";
import Link from "next/link";
import { Sidebarlinks } from "../../constant/index.js";


const LeftSidebar = () => {
  return (
    <section className="leftsidebar bg-white">
      <div className="flex w-full flex-col max-h-full gap-10">
        <div className="flex w-full flex-1 flex-col">
          {Sidebarlinks.map(link => (
            <Link className="leftsidebar_link text-blue" href={link.route}>
              <Image src={link.icons} alt={link.label} width={24} height={24} />
            </Link>
          ))}
        </div>
        <div className="flex flex-col flex-1 w-full">
          <div className="leftsidebar_link">
            <Image
              src={"/assets/sideicon8.svg"}
              alt="label"
              width={24}
              height={24}
            />
          </div>

          <div className="leftsidebar_link">
            <Image
              src={"/assets/sideicon9.svg"}
              alt="label"
              width={24}
              height={24}
            />
          </div>

          <div className="leftsidebar_link">
            <Image
              src={"/assets/sideicon10.svg"}
              alt="label"
              width={24}
              height={24}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeftSidebar;
