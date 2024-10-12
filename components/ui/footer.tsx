import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="grid grid-cols-2 container px-5 h-14 lg:h-32 bg-white w-full ">
      <div className="grid grid-cols-2">
        <div className="h-full flex items-center">
          <div>
            <div className="flex gap-2 items-center text-2xl font-bold">
              <div className="bg-cyan-200 rounded-full h-10 w-10 flex items-center justify-center">
                <Mail />
              </div>
              <p>Write</p>
            </div>
            <Link
              href={"mailto:pervejhosen2@gmail.com"}
              className=" italic text-xl"
            >
              pervejhosen2@gmail.com
            </Link>
          </div>
        </div>
        <div className="h-full flex items-center">
          <div>
            <div className="flex gap-2 items-center text-2xl font-bold">
              <div className="bg-cyan-200 rounded-full h-10 w-10 flex items-center justify-center">
                <Phone />
              </div>
              <p>Call</p>
            </div>
            <Link href={"tel:+8801747005105"} className=" italic text-xl">
              +8801747005105
            </Link>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Footer;
