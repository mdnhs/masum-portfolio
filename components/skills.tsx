"use client";
import { fetchTechSkillData } from "@/api/api";
import { motion } from "framer-motion"; // Import motion from Framer Motion
import Image from "next/image";
import { useEffect, useState } from "react";

// Define a type for skill item
interface Skill {
  image: string;
}

// Define a type for the data you're fetching
export interface Data {
  skills: Skill[];
}

const Skills = () => {
  const [data, setData] = useState<Data | null>(null);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchTechSkillData();
      setData(data);
    };

    getData();
  }, []);

  return (
    <div className="grid grid-cols-12 gap-5 lg:gap-16 py-10 lg:py-0 px-5 container">
      <div className="col-span-full lg:col-span-5">
        <motion.p
          initial={{ opacity: 0, x: -50 }} // Initial state for the heading
          whileInView={{ opacity: 1, x: 0 }} // Animate to visible when in view
          transition={{ duration: 0.5 }} // Duration of the animation
          className="font-extrabold text-3xl drop-shadow-lg w-full text-center lg:text-end"
        >
          TECHNICAL SKILLS
        </motion.p>
      </div>
      <div className="col-span-full lg:col-span-7 grid grid-cols-1 lg:grid-cols-4 gap-6">
        {data?.skills.map((item, index) => (
          <motion.div
            key={index + "skill"}
            initial={{ opacity: 0, scale: 0.8 }} // Initial state for skill items
            whileInView={{ opacity: 1, scale: 1 }} // Animate to visible and scale up when in view
            transition={{ duration: 0.5, delay: index * 0.1 }} // Delay for staggered effect
            className="w-full h-40 bg-white rounded-lg text-center overflow-hidden flex justify-center items-center relative"
          >
            <Image
              src={item?.image ?? "/images/placeholder.webp"}
              fill
              className="w-full h-full transition-all duration-300 hover:scale-110 object-contain"
              alt="Skill"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
