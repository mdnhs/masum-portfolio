// lib/mongodb.ts
import { siteConfig } from "@/config/site";
import mongoose from "mongoose";

const connectMongo = async () => {
  if (mongoose.connection.readyState >= 1) return;
  await mongoose.connect(siteConfig.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

export default connectMongo;
