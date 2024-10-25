// lib/fetchAboutData.ts
import { SiteHeaderData } from "@/backend/models/SiteHeaderData";

// import { SiteHeaderData } from "@/components/site-header";

export const fetchAboutData = async (): Promise<SiteHeaderData | null> => {
  const res = await fetch("/api/site-header");
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
};
