import React from "react";
import { Facebook, Github, Instagram, Linkedin } from "lucide-react";

const Hero = () => {
  return (
    <div className="grid grid-cols-12 lg:h-screen">
      <div className=" col-span-full lg:col-span-5 bg-orange-100 relative h-[600px] lg:h-full">
        <div className="h-[535px] w-full lg:w-[375px] bg-orange-100 shadow-2xl absolute lg:-right-28 top-7 lg:top-48">
          <div className="h-[85%] flex justify-center items-center gap-5 flex-col p-10">
            <div className="h-60 w-60 rounded-full bg-red-200"></div>
            <p className="font-bold text-3xl w-full text-center">Md Masum</p>
            <span className="h-[2px] w-10 bg-blue-600"></span>
            <p className="font-light text-center">
              Data Analyst, Data Science Enthusiast
            </p>
          </div>
          <div className="h-[15%] bg-white flex justify-center items-center">
            <div className="flex justify-evenly px-10 w-full">
              <Github />
              <Facebook />
              <Linkedin />
              <Instagram />
            </div>
          </div>
        </div>
      </div>
      <div className=" col-span-full lg:col-span-7 flex h-full items-center justify-start">
        <div className=" lg:basis-2/3 space-y-3 lg:pl-40 p-5 lg:p-0">
          <p className="text-4xl lg:text-7xl font-bold">Hey! There.</p>
          <p className="text-xl lg:text-2xl font-bold">
            {
              "My name's Md Masum. A Data Analyst and a Data Science enthusiast."
            }
          </p>
          <p>
            {`I'm a data analyst with experience in Data Visualization, Data
            Analysis, and Data Modeling using tools such as Excel, PowerBI, SQL,
            LookerStudio and techniques like,Statistical Analysis, Regression
            Analysis and Machine learning. I have worked with diverse datasets
            in industries including Sales, finance, healthcare, and e-commerce
            and is adept at communicating data-driven insights to technical and
            non-technical audiences. I'm passionate about keeping up with the
            latest developments in data field and seeking out new challenges to
            grow my skills.`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;