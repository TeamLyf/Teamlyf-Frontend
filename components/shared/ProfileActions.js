import Image from "next/image";
const ProfileActions = ({
  children,
  height,
  width,
  classname,
  customClass,
}) => {
  return (
    <div
      className={`flex gap-2 items-center cursor-pointer w-full ${customClass}`}
    >
      <div className={classname}>
        <Image
          src="/assets/profile_img.png"
          alt="profile image"
          width={width}
          height={height}
          className="absolute object-cover top-0 left-0"
        />
      </div>
      <div>
        <h3 className="text-[#4f4f4f] font-semibold text-[10px]">
          Kris Daniel
        </h3>
        {children}
        <p className="text-[#4f4f4f] font-normal text-[10px]">
          Product Manager
        </p>
      </div>
    </div>
  );
};

export default ProfileActions;
