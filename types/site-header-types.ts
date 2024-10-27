import { Document } from "mongoose";

export interface SocialLinks {
    gitHub?: string;
    facebook?: string;
    linkedIn?: string;
    instagram?: string;
  }

export interface SiteHeaderDataTypes extends Document {
  profilePicture: string;
  name: string;
  designation: string;
  socials: SocialLinks;
  bioHeadings: string;
  bioTitle: string;
  bioDetails: string;
}
