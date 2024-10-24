import { MainFooterData } from "@/components/main-footer";
import { MainNavData } from "@/components/main-nav";
import { ProjectsType } from "@/components/project-container";
import { CVType, ResumeType } from "@/components/resume-container";
import { siteConfig } from "@/config/site";

async function fetchData<T>(endpoint: string): Promise<T> {
  const response = await fetch(`${siteConfig.API_BASE_URL}${endpoint}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch data from ${endpoint}`);
  }
  return response.json();
}

// Now, use the generic fetch function for each of your API calls
export const fetchMainNavData = async (): Promise<MainNavData> => {
  return fetchData<MainNavData>("about.json");
};

export const fetchMainFooterData = async (): Promise<MainFooterData> => {
  return fetchData<MainFooterData>("footer.json");
};

export const fetchProjectData = async (): Promise<ProjectsType[]> => {
  return fetchData<ProjectsType[]>("projects.json");
};

export const fetchExperienceData = async (): Promise<ResumeType[]> => {
  return fetchData<ResumeType[]>("experience.json");
};

export const fetchEducationData = async (): Promise<ResumeType[]> => {
  return fetchData<ResumeType[]>("education.json");
};

export const fetchSkillsData = async (): Promise<ResumeType[]> => {
  return fetchData<ResumeType[]>("skills.json");
};

export const fetchDownloadCVData = async (): Promise<CVType[]> => {
  return fetchData<CVType[]>("downoaldCV.json");
};
