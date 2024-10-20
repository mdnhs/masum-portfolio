"use client";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Define the structure of the data object
interface FooterData {
  mail: string;
  phone: string;
}

const Footer = () => {
  const [data, setData] = useState<FooterData | null>(null);

  useEffect(() => {
    fetch("https://mdnhs.github.io/masum-json/footer.json")
      .then((res) => res.json())
      .then((data: FooterData) => setData(data));

    if (typeof window !== "undefined") {
      AOS.init();
    }
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 container px-5 h-fit lg:h-32 bg-white w-full py-10 lg:py-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-0">
        <div data-aos="fade-right" className="h-full flex items-center">
          <div>
            <div className="flex gap-2 items-center text-2xl font-bold">
              <div className="bg-cyan-200 rounded-full h-10 w-10 flex items-center justify-center">
                <Mail />
              </div>
              <p>Write</p>
            </div>
            <Link
              href={`mailto:${data?.mail}`}
              className="italic text-xl hover:text-blue-600"
            >
              {data?.mail}
            </Link>
          </div>
        </div>
        <div data-aos="fade-left" className="h-full flex items-center">
          <div>
            <div className="flex gap-2 items-center text-2xl font-bold">
              <div className="bg-cyan-200 rounded-full h-10 w-10 flex items-center justify-center">
                <Phone />
              </div>
              <p>Call</p>
            </div>
            <Link
              href={`tel:${data?.phone}`}
              className="italic text-xl hover:text-blue-600"
            >
              {data?.phone}
            </Link>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Footer;
