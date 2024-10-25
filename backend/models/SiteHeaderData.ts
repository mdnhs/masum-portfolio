// models/SiteHeaderData.ts
import { SiteHeaderDataTypes } from "@/types/site-header-types";
import mongoose, { Model, Schema } from "mongoose";

const SiteHeaderDataSchema: Schema = new Schema({
  profilePicture: { type: String, required: true },
  name: { type: String, required: true },
  designation: { type: String, required: true },
  socials: {
    gitHub: String,
    facebook: String,
    linkedIn: String,
    instagram: String,
  },
  bioHeadings: { type: String, required: true },
  bioTitle: { type: String, required: true },
  bioDetails: { type: String, required: true },
});

const SiteHeaderDataModel: Model<SiteHeaderDataTypes> =
  mongoose.models.SiteHeaderData ||
  mongoose.model<SiteHeaderDataTypes>("SiteHeaderData", SiteHeaderDataSchema);

export default SiteHeaderDataModel;
