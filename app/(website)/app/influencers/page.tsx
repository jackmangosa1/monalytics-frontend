import Container from "../components/layout/Container";
import Image from "next/image";
import Profile from "../assets/profile.jpeg";
import { IoIosArrowDown } from "react-icons/io";

const page = () => {
  const influencers = [
    {
      id: 1,
      image: "/../assets/profile.jpeg",
      names: "Kylian Mbappe",
      channels: ["Instagram", "Facebook", "Twitter"],
      subjects: ["Sport", "Football", "Africa"],
    },

    {
      id: 2,
      image: "/../assets/profile.jpeg",
      names: "Didier Drogba",
      channels: ["Instagram", "Facebook", "Twitter"],
      subjects: ["Sport", "Football", "Africa"],
    },

    {
      id: 3,
      image: "/../assets/profile.jpeg",
      names: "Leo Messi",
      channels: ["Instagram", "Facebook", "Twitter"],
      subjects: ["Sport", "Football", "Africa"],
    },
  ];
  return (
    <Container className="flex flex-col gap-10 bg-themeGrayShadow  px-5 h-full w-full pt-5">
      <div className="flex flex-col gap-5 bg-themeWhite rounded-md p-5">
        <div className="flex flex-col lg:flex-row lg:justify-between">
          <p className="font-bold text-themeGrayText">
            Top registered influencers
          </p>
          <p className="hidden lg:block font-bold text-themeBlue hover:cursor-pointer">
            See more
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {influencers.map((influencer) => (
            <div key={influencer.id}>
              <hr className=" border-gray-300" />
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
                <div className="flex flex-col lg:flex-row lg:items-start gap-2 mt-3">
                  <Image
                    src={Profile}
                    alt="profile-photo"
                    loading="lazy"
                    className="rounded-full w-14 h-14 bg-cover"
                  />
                  <div className="flex flex-col lg:gap-1">
                    <p className="font-bold ">{influencer.names}</p>
                    <p className="text-sm text-themeBlue">
                      {`${influencer.channels[0]}, ${influencer.channels[1]}, ${influencer.channels[2]}`}{" "}
                    </p>
                  </div>
                </div>

                <p className="text-sm font-medium">
                  {`${influencer.subjects[0]}, ${influencer.subjects[1]}, ${influencer.subjects[2]} `}{" "}
                </p>
                <button className="mt-3 bg-themeBlue text-themeWhite px-4 py-2 rounded-md w-20 lg:mt-0 lg:w-max">
                  Hire
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className="relative flex flex-col items-center mx-auto bg-transparent border-[0.15rem] border-themeBlue  text-themeBlack font-bold px-4 py-2 rounded-md w-max lg:hidden">
        View more
        <IoIosArrowDown className="absolute -bottom-4 p-1 bg-themeBlue text-white rounded-full text-2xl font-bold" />
      </button>
    </Container>
  );
};

export default page;
