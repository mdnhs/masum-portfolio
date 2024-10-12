import ContactUs from "@/components/ContactUs";
import React from "react";

const page = () => {
  return (
    <div className="bg-orange-100 flex justify-center items-center p-20 gap-10 flex-col">
      {" "}
      <div className="flex gap-3 items-center align-middle">
        <span className="w-5 h-5 bg-blue-500"></span>
        <p className=" font-bold text-xl lg:text-3xl">{`Let's Talk`}</p>
      </div>
      <ContactUs />
    </div>
  );
};

export default page;
