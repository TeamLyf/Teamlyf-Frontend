import Image from "next/image";
import ProfileActions from "@/components/shared/ProfileActions";
import SummaryCard from "@/components/shared/SummaryCard";

export default function Page() {
  return (
    <div className="w-full flex justify-evenly pt-6">
      <div className="w-[70%]">
        <section className="w-full bg-white shadow-md p-5 rounded-xl">
          <div className="flex justify-between items-center w-full ">
            <ProfileActions w={120} h={120}>
              <p>daniel@gmail.com</p>
            </ProfileActions>
            <Image
              src="/assets/icon11.png"
              alt="edit profile"
              width={36}
              height={36}
            />
          </div>
          <div className="flex justify-between mt-6">
            <SummaryCard
              label="Projects"
              summary="12 Projects"
              image="/assets/projecticon.png"
              classname="bg-[#0000FF]"
            />
            <SummaryCard
              label="Task"
              summary="12 task"
              image="/assets/taskicon.png"
              classname="bg-[#5660bb]"
            />
            <SummaryCard
              label="Resource"
              summary="12 resource"
              image="/assets/resource.png"
              classname="bg-green-500"
            />
          </div>
        </section>
      </div>
      <div className="w-[25%]">right</div>
    </div>
  );
}
