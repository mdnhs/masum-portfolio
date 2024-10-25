"use client";
import {
  fetchDownloadCVData,
  fetchEducationData,
  fetchExperienceData,
  fetchSkillsData,
} from "@/api/api";
import { CVDataType, ResumeDataType } from "@/types/resume-types";
import { motion } from "framer-motion"; // Importing Framer Motion
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import EducationCard from "./ui/education-card";
import ExperienceCard from "./ui/experience-card";
import SkillCard from "./ui/skill-card";

const ResumeContainer = () => {
  const [experienceData, setExperienceData] = useState<ResumeDataType[]>([]);
  const [educationData, setEducationData] = useState<ResumeDataType[]>([]);
  const [skillData, setSkillData] = useState<ResumeDataType[]>([]);
  const [resumeLink, setResumeLink] = useState<CVDataType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [experienceRes, educationRes, skillsRes, cvRes] =
          await Promise.all([
            fetchExperienceData(),
            fetchEducationData(),
            fetchSkillsData(),
            fetchDownloadCVData(),
          ]);

        setExperienceData(experienceRes);
        setEducationData(educationRes);
        setSkillData(skillsRes);
        setResumeLink(cvRes); //
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const renderExperience = () =>
    experienceData.map((item, index) => (
      <motion.div
        key={index + `experience-${index}`}
        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }} // Alternating animations
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ExperienceCard {...item} />
      </motion.div>
    ));

  const renderEducation = () =>
    educationData.map((item, index) => (
      <motion.div
        key={index + `education-${index}`}
        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <EducationCard {...item} />
      </motion.div>
    ));

  const renderSkills = () =>
    skillData.map((item, index) => (
      <motion.div
        key={index + `skill-${index}`}
        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <SkillCard {...item} />
      </motion.div>
    ));

  return (
    <div className="space-y-10">
      <div className="w-full lg:w-[750px] space-y-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-between items-center"
        >
          <p className="font-bold text-lg lg:text-2xl">Experience</p>
          {resumeLink.map((item, index) => (
            <Link
              key={"resumeLink" + index}
              href={item.cvDownloadLink}
              target="_blank"
            >
              <Button className="uppercase bg-blue-600 hover:border border-blue-600 hover:bg-white hover:text-blue-600 rounded-full font-semibold dark:text-white hover:dark:text-slate-900 py-6 px-12">
                Download CV
              </Button>
            </Link>
          ))}
        </motion.div>
        {renderExperience()}
      </div>
      <div className="w-full lg:w-[750px] space-y-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-between items-center"
        >
          <p className="font-bold text-lg lg:text-2xl">Education</p>
        </motion.div>
        {renderEducation()}
      </div>
      <div className="w-full lg:w-[750px] space-y-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-between items-center"
        >
          <p className="font-bold text-lg lg:text-2xl">Skills</p>
        </motion.div>
        {renderSkills()}
      </div>
    </div>
  );
};

export default ResumeContainer;
