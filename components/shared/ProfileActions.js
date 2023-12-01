
import Image from "next/image";
const ProfileActions = ({children, h, w}) => {
  return (
        <div className="flex gap-6 items-center cursor-pointer">
          <div className="w-[50px] h-[50px] relative">
            <Image
              src="/assets/profile_img.png"
              alt="profile image"
              width={w}
              height={h}
              className="absolute object-cover top-0 left-0"
            />
          </div>
          <div>
            <h3 className="text-[#4f4f4f] font-semibold text-[16px]">
              Kris Daniel
            </h3>
            {children}
            <p className="text-[#4f4f4f] font-normal text-[14px]">
              Product Manager
            </p>
          </div>
        </div>
  )
};

export default ProfileActions;
