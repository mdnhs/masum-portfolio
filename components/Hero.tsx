"use client";
import React, { useEffect, useState } from "react";
import { Facebook, Github, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import DOMPurify from "isomorphic-dompurify";
import AOS from "aos";
import "aos/dist/aos.css";
import { Button } from "./ui/button";
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

  useEffect(() => {
    fetch("https://mdnhs.github.io/masum-json/about.json")
      .then((res) => res.json())
      .then(setData);

    if (typeof window !== "undefined") {
      AOS.init();
    }
  }, []);

  return (
    <div className="grid grid-cols-12 lg:h-screen">
      <div className="col-span-full lg:col-span-5 bg-orange-100 dark:bg-slate-700 relative h-[600px] lg:h-full">
        <div className="h-[535px] w-full lg:w-[375px] bg-orange-100 dark:bg-slate-700 shadow-2xl absolute lg:-right-28 top-7 lg:top-48">
          <div className="h-[85%] flex justify-center items-center gap-5 flex-col p-10">
            <div
              data-aos="zoom-in"
              data-aos-duration="500"
              className={`h-60 w-60 rounded-full bg-white relative overflow-hidden `}
            >
              <Image
                src={data?.profilePicture ?? "/images/placeholder.webp"}
                fill
                className="w-full h-full object-contain transition-all duration-300 hover:scale-110"
                alt="Profile Picture"
              />
            </div>
            <p
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-anchor="#example-anchor"
              className="font-bold text-3xl w-full text-center"
            >
              {data?.name}
            </p>
            <span className="h-[2px] w-10 bg-blue-600"></span>
            <p
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-anchor="#example-anchor"
              className="font-light text-center"
            >
              {data?.designation}
            </p>
          </div>
          <div className="h-[15%] bg-white dark:bg-slate-900 flex justify-center items-center">
            <div
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-anchor="#example-anchor"
              className="flex justify-evenly px-10 w-full"
            >
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
      <div
        data-aos="fade-left"
        className="col-span-full lg:col-span-7 flex h-full items-center justify-start"
      >
        <div className="lg:basis-2/3 space-y-8 lg:pl-40 p-5 lg:p-0">
          <p className="text-4xl lg:text-7xl font-bold">{data?.bioHeadings}</p>
          <p className="text-xl lg:text-2xl font-bold">{data?.bioTitle}</p>
          <div
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(data?.bioDetails ?? ""),
            }}
          />
          <div className=" space-x-10 pt-10">
            <Link href={"/projects"}>
              <Button className=" uppercase bg-white text-slate-900  hover:border dark:border-blue-600 hover:bg-white hover:text-blue-600 rounded-full font-semibold hover:border-blue-600 hover:dark:text-blue-600 px-12 border-slate-900 border py-6">
                Projects
              </Button>
            </Link>
            <Link href={"/resume"}>
              <Button className=" uppercase bg-blue-600 hover:border border-blue-600 hover:bg-white hover:text-blue-600 rounded-full font-semibold dark:text-white hover:dark:text-slate-900 px-12 py-6">
                Resume
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
