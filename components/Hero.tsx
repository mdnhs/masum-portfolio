import React from "react";

const Hero = () => {
  return (
    <div className="grid grid-cols-12 h-screen">
      <div className=" col-span-5 bg-orange-100 h-full relative">
        <div className="h-[535px] w-[375px] bg-orange-100 shadow-lg absolute -right-28 top-48">
          <div className="h-[85%]">1</div>
          <div className="h-[15%] bg-white">2</div>
        </div>
      </div>
      <div className=" col-span-7 flex h-full items-center justify-start">
        <div className="basis-2/3 space-y-3 pl-40">
          <p className="text-7xl font-bold">Hey! There.</p>
          <p className="text-2xl font-bold">
            {"My name's Pervej. A Data Analyst and a Data Science enthusiast."}
          </p>
          <p>
            I'm a data analyst with experience in Data Visualization, Data
            Analysis, and Data Modeling using tools such as Excel, PowerBI, SQL,
            LookerStudio and techniques like,Statistical Analysis, Regression
            Analysis and Machine learning. I have worked with diverse datasets
            in industries including Sales, finance, healthcare, and e-commerce
            and is adept at communicating data-driven insights to technical and
            non-technical audiences. I'm passionate about keeping up with the
            latest developments in data field and seeking out new challenges to
            grow my skills.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
