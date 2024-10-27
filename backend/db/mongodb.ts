import { siteConfig } from "@/config/site";
import mongoose from "mongoose";

const connectMongo = async () => {
  const mongoUri = siteConfig.MONGODB_URI;
  if (!mongoUri) {
    throw new Error("MONGODB_URI is not defined in the site configuration.");
  }

  if (mongoose.connection.readyState >= 1) return;

  await mongoose.connect(mongoUri);
};

export default connectMongo;
