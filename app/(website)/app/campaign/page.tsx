import Container from "../components/layout/Container";
import CampaignListing from "../components/CampaignListing";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const page = () => {
  return (
    <div>
      <Container className="flex flex-col gap-10 bg-themeGrayShadow  px-5 h-full w-full">
        <div className="pt-10 flex flex-col  gap-3 justify-center items-center w-full xl:flex-row xl:justify-between">
          <div className="flex flex-col  gap-3 w-full">
            <label htmlFor="title" className="font-bold">
              Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              className="p-2 w-full outline-none border border-gray-300 rounded lg:w-auto"
            />
          </div>

          <div className="flex flex-col gap-3 w-full">
            <label htmlFor="hashtag" className="font-bold">
              HashTag
            </label>
            <input
              type="text"
              name="hashtag"
              id="hashtag"
              className="p-2 w-full outline-none border border-gray-300 rounded lg:w-auto"
            />
          </div>

          <div className="flex flex-col gap-3 w-full">
            <label htmlFor="time-limit" className="font-bold">
              Time Limit
            </label>
            <input
              type="datetime"
              name="time-limit"
              id="time-limit"
              className="p-2 w-full outline-none border border-gray-300 rounded lg:w-auto"
            />
          </div>
        </div>

        <div className="flex flex-col items-start gap-20 w-full lg:flex-row">
          <div className=" flex flex-col gap-5">
            <p className="font-bold">Influencer Channel</p>
            <div className="flex  gap-3 flex-wrap w-full lg:w-[20rem] ">
              <div className="flex gap-1 items-center">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Instagram</label>
              </div>

              <div className="flex gap-1 items-center">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Facebook</label>
              </div>

              <div className="flex gap-1 items-center">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Tiktok</label>
              </div>

              <div className="flex gap-1 items-center">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Twitter</label>
              </div>

              <div className="flex gap-1 items-center">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Linkedin</label>
              </div>
            </div>
            <button className="bg-themeBlue text-themeWhite px-4 py-2 rounded-md w-max">
              Start Campaign
            </button>
          </div>

          <div className="flex flex-col gap-5 w-full ">
            <label htmlFor="description" className="font-bold">
              Description
            </label>
            <textarea
              name="description"
              id="description"
              className="h-[7.5rem] w-full outline-none border border-gray-300 rounded"
            ></textarea>
          </div>
        </div>
        <CampaignListing />
        <button className="mb-10 relative flex flex-col items-center mx-auto bg-transparent border-[0.15rem] border-themeBlue  text-themeBlack font-bold px-4 py-2 rounded-md w-max lg:hidden">
          View more
          <IoIosArrowDown className="absolute -bottom-4 p-1 bg-themeBlue text-white rounded-full text-2xl font-bold" />
        </button>
      </Container>
    </div>
  );
};

export default page;
