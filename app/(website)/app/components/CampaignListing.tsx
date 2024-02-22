import React from "react";
import Image from "next/image";
import Profile from "../assets/profile.jpeg";
const CampaignListing = () => {
  const campaignData = [
    {
      id: 1,
      image: "/../assets/profile.jpeg",
      title: "Summer Campaign",
      Description: "A brief description of the campaign...",
      InfluencersEngaged: 3,
      experiesIn: 10,
    },

    {
      id: 2,
      image: "/../assets/profile.jpeg",
      title: "Christmas Campaign",
      Description: "A brief description of the campaign...",
      InfluencersEngaged: 3,
      experiesIn: 5,
    },

    {
      id: 3,
      image: "/../assets/profile.jpeg",
      title: "New Campaign",
      Description: "A brief description of the campaign...",
      InfluencersEngaged: 3,
      experiesIn: 28,
    },
  ];
  return (
    <div className="flex flex-col gap-5 bg-themeWhite rounded-md p-5">
      <div className="flex flex-col lg:flex-row lg:justify-between">
        <p className="font-bold text-themeGrayText">Existing Campaigns</p>
        <p className="hidden lg:block font-bold text-themeBlue hover:cursor-pointer">
          See more
        </p>
      </div>

      <div className="flex flex-col gap-3">
        {campaignData.map((campaign) => (
          <div key={campaign.id}>
            <hr className=" border-gray-300" />
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
              <div className="flex flex-col lg:flex-row lg:items-start gap-2 mt-3">
                <Image
                  src={Profile}
                  alt="profile-photo"
                  loading="lazy"
                  className="rounded-full w-14 h-14 bg-cover"
                />
                <div>
                  <p className="font-bold">{campaign.title}</p>
                  <p className="text-sm">{campaign.Description} </p>
                  <p className=" text-themeBlue text-sm ">
                    {campaign.InfluencersEngaged} influencers engaged
                  </p>
                </div>
              </div>

              <p className=" mt-4 text-sm lg:mt-0">
                Experies {campaign.experiesIn} Days
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CampaignListing;
