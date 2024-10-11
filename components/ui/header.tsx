import React from "react";

const Header = () => {
  return (
    <div className="h-32 bg-white w-full flex items-center justify-between px-16">
      <div className="flex gap-3 items-center">
        <p className="font-bold text-xl pb-1">Md Masum</p>
        <p>/</p>
        <p>Data Analyst</p>
      </div>
      <div className="flex items-center gap-4">
        <p className="hover:text-blue-500">ABOUT ME</p>
        <p className="hover:text-blue-500">PROJECT</p>
        <p className="hover:text-blue-500">RESUME</p>
        <p className="hover:text-blue-500">CONTACT</p>
      </div>
    </div>
  );
};

export default Header;
