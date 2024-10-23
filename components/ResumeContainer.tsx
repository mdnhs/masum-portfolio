"use client";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import ExperienceCard from "./ui/ExperienceCard";
import EducationCard from "./ui/EducationCard";
import SkillCard from "./ui/SkillCard";
import Link from "next/link";

interface ResumeType {
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
  professionalSkillSet: [];
  languages: [];
}
interface CVType {
  cvDownloadLink: string;
}

const ResumeContainer = () => {
  const [experienceData, setExperienceData] = useState<[] | null>(null);
  const [educationData, setEducationData] = useState<[] | null>(null);
  const [skillData, setSkillData] = useState<[] | null>(null);
  const [resumeLink, setResumeLink] = useState<[] | null>(null);

  useEffect(() => {
    fetch("https://mdnhs.github.io/masum-json/experience.json")
      .then((res) => res.json())
      .then(setExperienceData);

    fetch("https://mdnhs.github.io/masum-json/education.json")
      .then((res) => res.json())
      .then(setEducationData);

    fetch("https://mdnhs.github.io/masum-json/skills.json")
      .then((res) => res.json())
      .then(setSkillData);
    fetch("https://mdnhs.github.io/masum-json/downoaldCV.json")
      .then((res) => res.json())
      .then(setResumeLink);
  }, []);
  return (
    <div className=" space-y-10">
      <div className="w-full lg:w-[750px] space-y-6">
        {" "}
        <div
          data-aos="zoom-in-down"
          className="flex justify-between items-center"
        >
          <p className="font-bold text-lg lg:text-2xl">Experience</p>
          {resumeLink?.map((item: CVType, index) => {
            return (
              <Link
                key={index + "resumeLink"}
                href={item.cvDownloadLink}
                target="_blank"
              >
                <Button className=" uppercase bg-blue-600 hover:border border-blue-600 hover:bg-white hover:text-blue-600 rounded-full font-semibold dark:text-white hover:dark:text-slate-900 py-6 px-12">
                  Download CV
                </Button>
              </Link>
            );
          })}
        </div>
        {experienceData?.map((item: ResumeType, index) => {
          const aosAnimation = index % 2 === 0 ? "fade-left" : "fade-right";
          return (
            <div
              key={index + "experienceData"}
              data-aos={aosAnimation}
              data-aos-easing="ease-in-sine"
              data-aos-duration="500"
            >
              <ExperienceCard
                experienceTimeline={item.experienceTimeline}
                experienceDesignation={item.experienceDesignation}
                experienceCompany={item.experienceCompany}
                experienceLocation={item.experienceLocation}
                experienceDetails={item.experienceDetails}
              />
            </div>
          );
        })}
      </div>
      <div className="w-full lg:w-[750px] space-y-6">
        {" "}
        <div
          data-aos="zoom-in-down"
          className="flex justify-between items-center"
        >
          <p className="font-bold text-lg lg:text-2xl">Education</p>
        </div>
        {educationData?.map((item: ResumeType, index) => {
          const aosAnimation = index % 2 === 0 ? "fade-left" : "fade-right";
          return (
            <div
              key={index + "educationData"}
              data-aos={aosAnimation}
              data-aos-easing="ease-in-sine"
              data-aos-duration="500"
            >
              <EducationCard
                educationTimeline={item.educationTimeline}
                educationUniversity={item.educationUniversity}
                educationSubject={item.educationSubject}
                educationLocation={item.educationLocation}
                educationDetails={item.educationDetails}
                key={index + "educationData"}
              />
            </div>
          );
        })}
      </div>
      <div className="w-full lg:w-[750px] space-y-6">
        {" "}
        <div
          data-aos="zoom-in-down"
          className="flex justify-between items-center"
        >
          <p className="font-bold text-lg lg:text-2xl">Skills</p>
        </div>
        {skillData?.map((item: ResumeType, index) => {
          const aosAnimation = index % 2 === 0 ? "fade-left" : "fade-right";
          return (
            <div
              key={index + "skillData"}
              data-aos={aosAnimation}
              data-aos-easing="ease-in-sine"
              data-aos-duration="500"
            >
              <SkillCard
                professionalSkillSet={item.professionalSkillSet}
                languages={item.languages}
                key={index + "skillData"}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ResumeContainer;
