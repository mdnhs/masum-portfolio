// Default import

import { SiteHeaderDataTypes } from "@/types/site-header-types";

export const fetchAboutData = async (): Promise<SiteHeaderDataTypes | null> => {
  const res = await fetch("/api/site-header");
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
};
