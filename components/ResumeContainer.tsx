"use client";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import ExperienceCard from "./ui/ExperienceCard";
import EducationCard from "./ui/EducationCard";
import SkillCard from "./ui/SkillCard";

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

const ResumeContainer = () => {
  const [experienceData, setExperienceData] = useState<[] | null>(null);
  const [educationData, setEducationData] = useState<[] | null>(null);
  const [skillData, setSkillData] = useState<[] | null>(null);

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
  }, []);

  return (
    <div className=" space-y-10">
      <div className="w-full lg:w-[750px] space-y-6">
        {" "}
        <div className="flex justify-between items-center">
          <p className="font-bold text-lg lg:text-2xl">Experience</p>
          <Button className=" uppercase bg-blue-600 hover:border border-blue-600 hover:bg-white hover:text-blue-600 rounded-full font-semibold">
            Download CV
          </Button>
        </div>
        {experienceData?.map((item: ResumeType, index) => {
          return (
            <ExperienceCard
              experienceTimeline={item.experienceTimeline}
              experienceDesignation={item.experienceDesignation}
              experienceCompany={item.experienceCompany}
              experienceLocation={item.experienceLocation}
              experienceDetails={item.experienceDetails}
              key={index + "experienceData"}
            />
          );
        })}
      </div>
      <div className="w-full lg:w-[750px] space-y-6">
        {" "}
        <div className="flex justify-between items-center">
          <p className="font-bold text-lg lg:text-2xl">Education</p>
        </div>
        {educationData?.map((item: ResumeType, index) => {
          return (
            <EducationCard
              educationTimeline={item.educationTimeline}
              educationUniversity={item.educationUniversity}
              educationSubject={item.educationSubject}
              educationLocation={item.educationLocation}
              educationDetails={item.educationDetails}
              key={index + "educationData"}
            />
          );
        })}
      </div>
      <div className="w-full lg:w-[750px] space-y-6">
        {" "}
        <div className="flex justify-between items-center">
          <p className="font-bold text-lg lg:text-2xl">Skills</p>
        </div>
        {skillData?.map((item: ResumeType, index) => {
          return (
            <SkillCard
              professionalSkillSet={item.professionalSkillSet}
              languages={item.languages}
              key={index + "skillData"}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ResumeContainer;
