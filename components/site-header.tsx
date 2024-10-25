"use client";
import React, { useEffect, useState } from "react";
import { Facebook, Github, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import DOMPurify from "isomorphic-dompurify";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { fetchAboutData } from "@/lib/fetchAboutData";
import { SiteHeaderDataTypes } from "@/types/site-header-types";

const SiteHeader = () => {
  const [data, setData] = useState<SiteHeaderDataTypes | null>(null);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchAboutData();
      setData(data);
    };

    getData();
  }, []);

  return (
    <div className="grid grid-cols-12 lg:min-h-screen">
      <div className="col-span-full lg:col-span-5 bg-orange-100 dark:bg-slate-700 relative h-[600px] lg:h-auto">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          // Animation triggers when 20% of element is in view
          className="h-[535px] w-full lg:w-[375px] bg-orange-100 dark:bg-slate-700 shadow-2xl absolute lg:-right-28 top-7 lg:top-48"
        >
          <div className="h-[85%] flex justify-center items-center gap-5 flex-col p-10">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              // Trigger when element is 20% in view
              className="h-60 w-60 rounded-full bg-white relative overflow-hidden"
            >
              <Image
                src={data?.profilePicture ?? "/images/placeholder.webp"}
                fill
                className="w-full h-full object-contain transition-all duration-300 hover:scale-110"
                alt="Profile Picture"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="font-bold text-3xl w-full text-center"
            >
              {data?.name}
            </motion.p>
            <span className="h-[2px] w-10 bg-blue-600"></span>
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="font-light text-center"
            >
              {data?.designation}
            </motion.p>
          </div>
          <div className="h-[15%] bg-white dark:bg-slate-900 flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
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
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="col-span-full lg:col-span-7 flex h-full items-center justify-start">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:basis-2/3 space-y-8 lg:pl-40 p-5 lg:p-0"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl lg:text-7xl font-bold"
          >
            {data?.bioHeadings}
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-xl lg:text-2xl font-bold"
          >
            {data?.bioTitle}
          </motion.p>
          <div
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(data?.bioDetails ?? ""),
            }}
          />
          <div className="flex md:flex-row flex-col gap-3 md:gap-10 pt-10">
            <Link href={"/projects"}>
              <Button className="uppercase bg-white text-slate-900 hover:border dark:border-blue-600 hover:bg-white hover:text-blue-600 rounded-full font-semibold hover:border-blue-600 hover:dark:text-blue-600 px-12 border-slate-900 border py-6">
                Projects
              </Button>
            </Link>
            <Link href={"/resume"}>
              <Button className="uppercase bg-blue-600 hover:border border-blue-600 hover:bg-white hover:text-blue-600 rounded-full font-semibold dark:text-white hover:dark:text-slate-900 px-12 py-6">
                Resume
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SiteHeader;
