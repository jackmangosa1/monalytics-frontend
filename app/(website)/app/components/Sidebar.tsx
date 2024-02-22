"use client";
import Container from "./layout/Container";
import { IoHome } from "react-icons/io5";
import { SiGoogleanalytics } from "react-icons/si";
import { BiSolidUserVoice } from "react-icons/bi";
import { MdCampaign } from "react-icons/md";
import Navbar from "./Navbar";
import { IoMenuOutline } from "react-icons/io5";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Sidebar = () => {
  const [expanded, setExpanded] = useState(true);
  const router = useRouter();

  return (
    <Container className="w-max">
      <aside
        className={` bg-themeWhite p-5 flex flex-col gap-10  h-screen overflow-hidden transition-all ${
          expanded ? "w-[18rem]" : "w-[6rem]"
        }`}
      >
        <div className="flex gap-3 items-center">
          <IoMenuOutline
            className="text-3xl"
            onClick={() => setExpanded((prev) => !prev)}
          />

          <p
            className={`font-bold text-xl text-blue-400  transition-all ${
              !expanded && "hidden"
            }`}
          >
            3M System
          </p>
        </div>
        <ul className="flex flex-col gap-5 font-medium">
          <li
            className="flex gap-2 items-center text-themeBlue bg-themeBlueShadow p-3 rounded-md hover:cursor-pointer"
            onClick={() => router.push("/app")}
          >
            <IoHome className="text-xl" />
            <p className={`transition-all ${!expanded && "hidden"}`}>Home</p>
          </li>
          <li
            className="flex gap-2 items-center hover:cursor-pointer hover:text-themeBlue hover:bg-themeBlueShadow p-3 rounded-md"
            onClick={() => router.push("/app/analysis")}
          >
            <SiGoogleanalytics className="text-xl" />
            <p className={`transition-all ${!expanded && "hidden"}`}>
              Analysis
            </p>
          </li>

          <li
            className="flex gap-2 items-center hover:cursor-pointer hover:text-themeBlue hover:bg-themeBlueShadow p-3 rounded-md"
            onClick={() => router.push("/app/influencers")}
          >
            <BiSolidUserVoice className="text-2xl" />
            <p className={`transition-all  ${!expanded && "hidden"}`}>
              Influencers
            </p>
          </li>
          <li
            className="flex gap-2 items-center hover:cursor-pointer hover:text-themeBlue hover:bg-themeBlueShadow p-3 rounded-md"
            onClick={() => router.push("/app/campaign")}
          >
            <MdCampaign className="text-2xl" />
            <p className={`transition-all ${!expanded && "hidden"}`}>
              Campaign
            </p>
          </li>
        </ul>
      </aside>
    </Container>
  );
};

export default Sidebar;
