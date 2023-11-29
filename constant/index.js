import { GrTask } from "react-icons/gr";
import { MdOutlineVideoCameraBack } from "react-icons/md";
import { TbBrandWechat } from "react-icons/tb";
import { IoMdFolderOpen } from "react-icons/io";
import { MdEventNote } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";

export const Sidebarlinks = [
  { icons: <GrTask className='w-6 h8'/>, route: "/task-management", label: "task" },
  {
    icons: <MdOutlineVideoCameraBack />,
    route: "/task-management",
    label: "video",
  },
  { icons: <TbBrandWechat />, route: "/task-management", label: "chat" },
  { icons: <IoMdFolderOpen />, route: "/task-management", label: "folder" },
  { icons: <MdEventNote />, route: "/task-management", label: "Note" },
  { icons: <IoSettingsOutline />, route: "/task-management", label: "setting" },
];
