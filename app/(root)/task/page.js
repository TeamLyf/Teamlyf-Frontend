import Image from "next/image";
import ProfileActions from "@/components/shared/ProfileActions";
import SummaryCard from "@/components/shared/SummaryCard";

export default function Page() {
  return (
    <>
      <div className="w-full flex justify-evenly">
        <div className="w-[70%]">
          <section className="w-full bg-white shadow-md p-5 rounded-xl">
            <div className="flex justify-between items-center w-full ">
              <ProfileActions
                width={120}
                height={120}
                classname="relative w-[120px] h-[120px]"
              >
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

          <section className="flex justify-between mt-4">
            <div className="w-[49%] bg-white shadow-md rounded-xl p-4">
              <h4>Overall Progress</h4>
            </div>
            <div className="w-[49%] bg-white shadow-md rounded-xl p-4">
              <div className="flex justify-between">
                <div className="flex gap-3 items-center">
                  <Image
                    src="/assets/sideicon1.svg"
                    alt="task summary"
                    width={24}
                    height={24}
                  />
                  <h4 className="font-semibold">My Tasks</h4>
                </div>
                <button className="p-2 border rounded-xl font-normal">
                  See All
                </button>
              </div>
              <p className="text-[#4f4f4f] font-light text-[12px]">
                " You're making great progress on this project keep it up! "
              </p>
              <div className="flex justify-between my-2">
                <div className="flex gap-3 items-center">
                  <Image
                    src="/assets/TasksIcon.png"
                    alt="task summary"
                    width={24}
                    height={24}
                  />
                  <h4 className="font-semibold">Project: Axi Infinity</h4>
                </div>
                <div className="flex gap-3">
                  <button className="py-2 px-3 border rounded-xl font-normal">
                    <Image
                      src="/assets/left_arrow.svg"
                      alt="left arrow"
                      width={8}
                      height={8}
                    />
                  </button>
                  <button className="py-2 px-3 border rounded-xl font-normal">
                    <Image
                      src="/assets/right_arrow.svg"
                      alt="left arrow"
                      width={8}
                      height={8}
                    />
                  </button>
                </div>
              </div>

              <div className="flex justify-between">
                <div className="flex gap-3 w-[70%]">
                  <div className="w-[24px] h-[24px] border border-[#eaeaea] rounded-full bg-white flex items-center justify-center">
                    <div className="rounded-full bg-[#eaeaea] w-[12px] h-[12px]"></div>
                  </div>
                  <h6 className="font-light text-[12px] w-[90%]">
                    Implement a matchmaking system to allow players to compete
                    against each other.
                  </h6>
                </div>

                <div className="flex gap-3 items-center bg-[#fdf0e4] p-2 rounded-xl w-[30%]">
                  <Image
                    src="/assets/mark.svg"
                    alt="task summary"
                    width={15}
                    height={15}
                  />
                  <span className="font-light text-[10px]">
                    Medium Priority
                  </span>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="w-[25%]">right</div>
      </div>
    </>
  );
}
