"use client";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import ExperienceCard from "./ui/ExperienceCard";
import EducationCard from "./ui/EducationCard";
import SkillCard, { languagesType, professionalSkillSetType } from "./ui/SkillCard";
import Link from "next/link";
import {
  fetchDownloadCVData,
  fetchEducationData,
  fetchExperienceData,
  fetchSkillsData,
} from "@/api/api";

export interface ResumeType {
  experienceTimeline: string;
  experienceDesignation: string;
  experienceCompany: string;
  experienceLocation: string;
  experienceDetails: string;
  educationTimeline: string;
  educationUniversity: string;
  educationSubject: string;
  educationLocation: string;
  educationDetails: string;
  professionalSkillSet: professionalSkillSetType[];
  languages: languagesType[];
}

export interface CVType {
  cvDownloadLink: string;
}

const ResumeContainer = () => {
  const [experienceData, setExperienceData] = useState<ResumeType[]>([]);
  const [educationData, setEducationData] = useState<ResumeType[]>([]);
  const [skillData, setSkillData] = useState<ResumeType[]>([]);
  const [resumeLink, setResumeLink] = useState<CVType[]>([]);

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
      <div
        key={index + `experience-${index}`}
        data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
        data-aos-easing="ease-in-sine"
        data-aos-duration="500"
      >
        <ExperienceCard {...item} />
      </div>
    ));

  const renderEducation = () =>
    educationData.map((item, index) => (
      <div
        key={index + `education-${index}`}
        data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
        data-aos-easing="ease-in-sine"
        data-aos-duration="500"
      >
        <EducationCard {...item} />
      </div>
    ));

  const renderSkills = () =>
    skillData.map((item, index) => (
      <div
        key={index + `skill-${index}`}
        data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
        data-aos-easing="ease-in-sine"
        data-aos-duration="500"
      >
        <SkillCard {...item} />
      </div>
    ));

  return (
    <div className="space-y-10">
      <div className="w-full lg:w-[750px] space-y-6">
        <div
          data-aos="zoom-in-down"
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
        </div>
        {renderExperience()}
      </div>
      <div className="w-full lg:w-[750px] space-y-6">
        <div
          data-aos="zoom-in-down"
          className="flex justify-between items-center"
        >
          <p className="font-bold text-lg lg:text-2xl">Education</p>
        </div>
        {renderEducation()}
      </div>
      <div className="w-full lg:w-[750px] space-y-6">
        <div
          data-aos="zoom-in-down"
          className="flex justify-between items-center"
        >
          <p className="font-bold text-lg lg:text-2xl">Skills</p>
        </div>
        {renderSkills()}
      </div>
    </div>
  );
};

export default ResumeContainer;
