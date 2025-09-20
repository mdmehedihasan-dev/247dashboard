import { useState } from "react";
import { FiLogOut } from "react-icons/fi";
import { BiChevronDown } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import {
  MdContactSupport,
  MdDescription,
  MdKeyboardVoice,
  MdRecordVoiceOver,
} from "react-icons/md";
import { FaMusic } from "react-icons/fa";

import brandlogo from "../../assets/image/logo.png";
import {
  PiDesktopFill,
  PiFilmSlateFill,
  PiFilmStripLight,
} from "react-icons/pi";
import { IoImageSharp, IoNewspaper } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { CgCaptions } from "react-icons/cg";
import { BsPersonVideo2 } from "react-icons/bs";
import { TbPhotoVideo } from "react-icons/tb";
import { SiGoogleanalytics } from "react-icons/si";

const Sidebar = ({ closeDrawer }) => {
  const [active, setActive] = useState("Dashboard");
  const [openDropdown, setOpenDropdown] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  const menuItems = [
    {
      icon: <MdDescription className="w-5 h-5" />,
      label: "Script to video",
      Link: "/script-to-video",
    },
    {
      icon: <PiFilmSlateFill className="w-5 h-5" />,
      label: "AI Video Generator",
      Link: "/ai-video-generator",
    },
    {
      icon: <TbPhotoVideo className="w-5 h-5" />,
      label: "Image-to-Video",
      Link: "/image-to-video",
    },
    {
      icon: <PiDesktopFill className="w-5 h-5" />,
      label: "AI Caption Generator",
      Link: "/ai-caption-generator",
    },
    {
      icon: <PiFilmStripLight className="w-5 h-5" />,
      label: "AI Video Clip",
      Link: "/ai-video-clip",
    },
    {
      icon: <IoImageSharp className="w-5 h-5" />,
      label: "AI Image Generator",
      Link: "/ai-image-generator",
    },
    {
      icon: <MdKeyboardVoice className="w-5 h-5" />,
      label: "Text-to-Video",
      Link: "/text-to-video",
    },
    {
      icon: <CgCaptions className="w-5 h-5" />,
      label: "Auto Caption & Hashtags",
      Link: "/auto-caption-hashtags",
    },
    {
      icon: <MdRecordVoiceOver className="w-5 h-5" />,
      label: "Realistic Voiceover",
      Link: "/realistic-voiceover",
    },
    {
      icon: <BsPersonVideo2 className="w-5 h-5" />,
      label: "Auto Video Editing",
      Link: "/auto-video-editing",
    },
    {
      icon: <SiGoogleanalytics className="w-5 h-5" />,
      label: "Analytics & SEO Tools",
      Link: "/analytics-seo-tools",
    },
    {
      icon: <FaMusic className="w-5 h-5" />,
      label: "Background Audio",
      Link: "/background-audio",
    },
    {
      icon: <MdContactSupport className="w-5 h-5" />,
      label: "Chatbot Support",
      Link: "/chatbot-support",
    },
  ];

  const filterMenuItems = (items) => {
    return items.filter((item) => {
      if (item.isDropdown && item.subItems) {
        const filteredSubItems = item.subItems.filter((subItem) =>
          subItem.label.toLowerCase().includes(searchTerm.toLowerCase())
        );
        if (filteredSubItems.length > 0) {
          item.subItems = filteredSubItems;
          return true;
        }
      }
      return item.label.toLowerCase().includes(searchTerm.toLowerCase());
    });
  };

  const filteredItems = filterMenuItems(menuItems);

  return (
    <div className=" h-full p-3 bg-[#030c2b] w-72 ">
     <div 
       className="flex border-2 border-amber-50 flex-col items-center justify-center rounded-2xl py-16 shadow-md"
  style={{
    boxShadow: "0px 0px 14px 1px rgba(50,124,254,0.75)",
  }}
     >
       <div className="mx-auto">
        <img src={brandlogo} alt="Logo" />
      </div>
      <div className="relative pt-8 mb-4 ml-6"></div>
      <div className="flex-1 overflow-y-auto max-h-[calc(100vh-150px)]">
        {filteredItems.map((item) => (
          <div key={item.label}>
            <div
              className={`flex justify-between  items-center px-5 py-2  cursor-pointer transition-all rounded-lg ${
                active === item.label
                  ? "text-white font-semibold"
                  : "text-white"
              }`}
              onClick={() =>
                item.isDropdown
                  ? setOpenDropdown(
                      openDropdown === item.label ? "" : item.label
                    )
                  : setActive(item.label)
              }
            >
              <Link to={item.Link} className="flex items-center w-full gap-3">
                <span
                  className={`${
                    active === item.label ? "text-blue-500" : "text-white"
                  }`}
                >
                  {item.icon}
                </span>
                <p>{item.label}</p>
                {item.isDropdown && (
                  <BiChevronDown
                    className={`${
                      openDropdown === item.label ? "rotate-180" : ""
                    }`}
                  />
                )}
              </Link>
            </div>
          </div>
        ))}
      </div>
     </div>
    </div>
  );
};

export default Sidebar;
