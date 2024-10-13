"use client";
import React, { useEffect, useState } from "react";
import { Facebook, Github, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Define the structure of the social links
interface SocialLinks {
  gitHub?: string;
  facebook?: string;
  linkedIn?: string;
  insta?: string;
}

// Define the structure of the data object
interface HeroData {
  profilePicture: string;
  name: string;
  designation: string;
  socials: SocialLinks[];
  bioHeadings: string;
  bioTitle: string;
  bioDetails: string;
}

const Hero = () => {
  const [data, setData] = useState<HeroData | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://mdnhs.github.io/masum-json/about.json")
      .then((res) => res.json())
      .then(setData)
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className="grid grid-cols-12 lg:h-screen">
      <div className="col-span-full lg:col-span-5 bg-orange-100 relative h-[600px] lg:h-full">
        <div className="h-[535px] w-full lg:w-[375px] bg-orange-100 shadow-2xl absolute lg:-right-28 top-7 lg:top-48">
          <div className="h-[85%] flex justify-center items-center gap-5 flex-col p-10">
            <div
              className={`h-60 w-60 rounded-full bg-white relative overflow-hidden ${
                isLoading ? "animate-pulse" : ""
              }`}
            >
              <Image
                src={data?.profilePicture ?? "/images/placeholder.webp"}
                fill
                className="w-full h-full object-contain transition-all duration-300 hover:scale-110"
                alt="Profile Picture"
              />
            </div>
            <p className="font-bold text-3xl w-full text-center">
              {data?.name}
            </p>
            <span className="h-[2px] w-10 bg-blue-600"></span>
            <p className="font-light text-center">{data?.designation}</p>
          </div>
          <div className="h-[15%] bg-white flex justify-center items-center">
            <div className="flex justify-evenly px-10 w-full">
              <Link
                href={data?.socials[0]?.gitHub ?? "/"}
                target="_blank"
                className="flex gap-2 hover:text-blue-600"
              >
                <Github />
              </Link>
              <Link
                href={data?.socials[0]?.facebook ?? "/"}
                target="_blank"
                className="flex gap-2 hover:text-blue-600"
              >
                <Facebook />
              </Link>
              <Link
                href={data?.socials[0]?.linkedIn ?? "/"}
                target="_blank"
                className="flex gap-2 hover:text-blue-600"
              >
                <Linkedin />
              </Link>
              <Link
                href={data?.socials[0]?.insta ?? "/"}
                target="_blank"
                className="flex gap-2 hover:text-blue-600"
              >
                <Instagram />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-full lg:col-span-7 flex h-full items-center justify-start">
        <div className="lg:basis-2/3 space-y-3 lg:pl-40 p-5 lg:p-0">
          <p className="text-4xl lg:text-7xl font-bold">{data?.bioHeadings}</p>
          <p className="text-xl lg:text-2xl font-bold">{data?.bioTitle}</p>
          <p>{data?.bioDetails}</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
