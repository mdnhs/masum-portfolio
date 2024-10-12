import React from "react";

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
  return (
    <div className="grid grid-cols-12 gap-5 lg:gap-16 px-5 py-10 lg:py-0 lg:px-40">
      <div className=" col-span-full lg:col-span-5">
        <p className="font-extrabold text-3xl drop-shadow-lg w-full text-end pt-10">
          TECHNICAL SKILLS
        </p>
      </div>
      <div className=" col-span-full lg:col-span-7 grid grid-cols-1 lg:grid-cols-4 gap-6">
        {skill.map((item, index) => {
          return (
            <div
              key={index + "skill"}
              className="w-full h-40 bg-red-200 text-center flex justify-center items-center"
            >
              {item.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
