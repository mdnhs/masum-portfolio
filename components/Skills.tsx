"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const skill = [
  { id: 1, name: "html" },
  { id: 2, name: "html" },
  { id: 3, name: "html" },
  { id: 4, name: "html" },
  { id: 5, name: "html" },
  { id: 6, name: "html" },
  { id: 7, name: "html" },
  { id: 8, name: "html" },
];

const Skills = () => {
  const [data, setData]: any = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://mdnhs.github.io/masum-json/about.json")
      .then((res) => res.json())
      .then(setData);
    setIsLoading(false);
  }, []);
  return (
    <div className="grid grid-cols-12 gap-5 lg:gap-16 py-10 lg:py-0 px-5 container">
      <div className=" col-span-full lg:col-span-5">
        <p className="font-extrabold text-3xl drop-shadow-lg w-full text-center lg:text-end">
          TECHNICAL SKILLS
        </p>
      </div>
      <div className=" col-span-full lg:col-span-7 grid grid-cols-1 lg:grid-cols-4 gap-6">
        {data?.skills.map((item: any, index: any) => {
          return (
            <div
              key={index + "skill"}
              className="w-full h-40 bg-white text-center flex justify-center items-center relative"
            >
              <Image
                src={item?.image}
                fill
                className="w-full h-full transition-all duration-300 hover:scale-110 object-contain"
                alt="Picture of the author"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
