import ProjectCard from "@/components/ui/ProjectCard";
import React from "react";

const page = () => {
  return (
    <div className="bg-orange-100 flex justify-center items-center p-5 lg:p-20 gap-3 lg:gap-10 flex-col">
      {" "}
      <div className="flex gap-3 items-center align-middle">
        <span className="w-5 h-5 bg-blue-600"></span>
        <p className=" font-bold text-xl lg:text-3xl">{`Projects`}</p>
      </div>
      <p className="text-center font-medium text-lg">
        Here are some of my project related to the tools i have been learning.{" "}
        <br />
        Browse through the page to see all of my works.{" "}
      </p>
      <ProjectCard />
    </div>
  );
};

export default page;