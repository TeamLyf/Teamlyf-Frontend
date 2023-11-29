"use client";
import Image from "next/image";
import Link from "next/link";
import { Sidebarlinks } from "../../constant/index.js";

const LeftSidebar = () => {
  return (
    <section className="leftsidebar bg-white">
      <div className="flex w-full flex-1 flex-col gap-6 px-6">
        {Sidebarlinks.map(link => (
          <Link className="leftsidebar_link text-[24px]" href={link.route}>
            {link.icons}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default LeftSidebar;
