import Container from "./layout/Container";
import { IoMdMail } from "react-icons/io";
import { IoMdNotifications } from "react-icons/io";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <Container className="bg-themeGrayShadow p-5 ">
      <div className="flex justify-between w-full  relative">
        <p className="font-bold text-2xl">Home</p>
        <div className="flex gap-5 items-center hover:cursor-pointer">
          <div className="flex gap-2">
            <IoMdMail className="text-xl" />
            <div className="flex items-center justify-center">
              <p className="bg-red-500 rounded-full text-themeWhite px-1 text-xs absolute -top-1 right-12">
                5
              </p>
              <IoMdNotifications className="text-xl" />
            </div>
          </div>

          <div>
            <FaUser className="text-3xl p-2 bg-themeYellow rounded-full" />
          </div>
        </div>
      </div>
      <hr className=" border-gray-300 mt-6" />
    </Container>
  );
};

export default Navbar;
