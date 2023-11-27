"use client";
import Image from "next/image";
import Link from "next/link";

const LeftSidebar = () => {
  return (
    <section className="leftsidebar bg-white">
      <div className="flex w-full flex-1 flex-col gap-6 px-6">
        <Link className="leftsidebar_link" href="">
          hello
        </Link>
      </div>
    </section>
  );
};

export default LeftSidebar;
