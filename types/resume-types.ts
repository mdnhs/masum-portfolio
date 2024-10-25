import { languagesType, professionalSkillSetType } from "./skill-types";

export interface ResumeDataType {
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

export interface CVDataType {
  cvDownloadLink: string;
}

export interface ExperienceCardDataType {
  experienceTimeline: string;
  experienceDesignation: string;
  experienceCompany: string;
  experienceLocation: string;
  experienceDetails: string;
}


export interface EducationCardDataType {
    educationTimeline: string;
    educationUniversity: string;
    educationSubject: string;
    educationLocation: string;
    educationDetails: string;
  }