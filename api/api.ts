import { siteConfig } from "@/config/site";
import { MainFooterDataTypes } from "@/types/main-footer-types";
import { MainNavDataTypes } from "@/types/main-nav-types";
import { ProjectsDataType } from "@/types/projects-type";
import { CVDataType, ResumeDataType } from "@/types/resume-types";
import { SiteHeaderDataTypes } from "@/types/site-header-types";
import { SkillDataTypes } from "@/types/skill-types";

async function fetchData<T>(endpoint: string): Promise<T> {
  const response = await fetch(`${siteConfig.API_BASE_URL}${endpoint}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch data from ${endpoint}`);
  }
  return response.json();
}

// Now, use the generic fetch function for each of your API calls
export const fetchMainNavData = async (): Promise<MainNavDataTypes> => {
  return fetchData<MainNavDataTypes>("header.json");
};

export const fetchAboutData = async (): Promise<SiteHeaderDataTypes> => {
  return fetchData<SiteHeaderDataTypes>("about.json");
};

export const fetchTechSkillData = async (): Promise<SkillDataTypes> => {
  return fetchData<SkillDataTypes>("about.json");
};

export const fetchMainFooterData = async (): Promise<MainFooterDataTypes> => {
  return fetchData<MainFooterDataTypes>("footer.json");
};

export const fetchProjectData = async (): Promise<ProjectsDataType[]> => {
  return fetchData<ProjectsDataType[]>("projects.json");
};

export const fetchExperienceData = async (): Promise<ResumeDataType[]> => {
  return fetchData<ResumeDataType[]>("experience.json");
};

export const fetchEducationData = async (): Promise<ResumeDataType[]> => {
  return fetchData<ResumeDataType[]>("education.json");
};

export const fetchSkillsData = async (): Promise<ResumeDataType[]> => {
  return fetchData<ResumeDataType[]>("skills.json");
};

export const fetchDownloadCVData = async (): Promise<CVDataType[]> => {
  return fetchData<CVDataType[]>("downoaldCV.json");
};
