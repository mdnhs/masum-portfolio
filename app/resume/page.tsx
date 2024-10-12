import { Button } from "@/components/ui/button";
import ResumeCard from "@/components/ui/ResumeCard";
import React from "react";

const page = () => {
  return (
    <div className="bg-orange-100 flex justify-center items-center p-5 lg:p-20 gap-3 lg:gap-14 flex-col">
      {" "}
      <div className="flex gap-3 items-center align-middle">
        <span className="w-5 h-5 bg-blue-600"></span>
        <p className=" font-bold text-xl lg:text-3xl">{`Resume`}</p>
      </div>
      <div className="w-full lg:w-[750px] space-y-6">
        {" "}
        <div className="flex justify-between items-center">
          <p className="font-bold text-lg lg:text-2xl">Experience</p>
          <Button className=" uppercase bg-blue-600 hover:border border-blue-600 hover:bg-white hover:text-blue-600 rounded-full font-semibold">
            Download CV
          </Button>
        </div>
        <ResumeCard />
      </div>
      <div className="w-full lg:w-[750px] space-y-6">
        {" "}
        <div className="flex justify-between items-center">
          <p className="font-bold text-lg lg:text-2xl">Education</p>
        </div>
        <ResumeCard />
      </div>
      <div className="w-full lg:w-[750px] space-y-6">
        {" "}
        <div className="flex justify-between items-center">
          <p className="font-bold text-lg lg:text-2xl">Skills</p>
        </div>
        <ResumeCard />
      </div>
    </div>
  );
};

export default page;
