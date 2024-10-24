"use client";
import { fetchMainFooterData } from "@/api/api";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion"; // Import motion from Framer Motion

// Define the structure of the data object
export interface MainFooterData {
  mail: string;
  phone: string;
}

const MainFooter = () => {
  const [data, setData] = useState<MainFooterData | null>(null);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchMainFooterData();
      setData(data);
    };

    getData();
  }, []);

  return (
    <div className="dark:bg-slate-900 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 container px-5 h-fit dark:bg-slate-900 lg:h-32 w-full py-10 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-0">
          <motion.div
            initial={{ opacity: 0, x: -50 }} // Initial state for email section
            whileInView={{ opacity: 1, x: 0 }} // Animate to visible
            transition={{ duration: 0.5 }} // Duration of the animation
            className="h-full flex items-center"
          >
            <div>
              <div className="flex gap-2 items-center text-2xl font-bold">
                <div className="bg-cyan-200 dark:bg-blue-600 rounded-full h-10 w-10 flex items-center justify-center">
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
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }} // Initial state for phone section
            whileInView={{ opacity: 1, x: 0 }} // Animate to visible
            transition={{ duration: 0.5 }} // Duration of the animation
            className="h-full flex items-center"
          >
            <div>
              <div className="flex gap-2 items-center text-2xl font-bold">
                <div className="bg-cyan-200 dark:bg-blue-600 rounded-full h-10 w-10 flex items-center justify-center">
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
          </motion.div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default MainFooter;
