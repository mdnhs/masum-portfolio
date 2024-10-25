// app/api/site-header/route.ts
import { NextResponse } from "next/server";
import { SiteHeaderDataTypes } from "@/types/site-header-types";
import connectMongo from "@/backend/db/mongodb";
import SiteHeaderDataModel from "@/backend/models/SiteHeaderData";

export async function POST(request: Request) {
  try {
    await connectMongo(); // Ensure the database connection

    const data = await request.formData();
    const profilePicture = data.get("profilePicture")?.toString() || "";
    const name = data.get("name")?.toString() || "";
    const designation = data.get("designation")?.toString() || "";
    const bioHeadings = data.get("bioHeadings")?.toString() || "";
    const bioTitle = data.get("bioTitle")?.toString() || "";
    const bioDetails = data.get("bioDetails")?.toString() || "";

    // Socials
    const socials = {
      gitHub: data.get("socials.gitHub")?.toString() || "",
      facebook: data.get("socials.facebook")?.toString() || "",
      linkedIn: data.get("socials.linkedIn")?.toString() || "",
      instagram: data.get("socials.instagram")?.toString() || "", // Corrected key
    };

    const siteHeaderData: SiteHeaderDataTypes = {
      profilePicture,
      name,
      designation,
      socials,
      bioHeadings,
      bioTitle,
      bioDetails,
    };

    // Save data to MongoDB
    const newHeaderData = await SiteHeaderDataModel.create(siteHeaderData);

    return NextResponse.json({ success: true, data: newHeaderData });
  } catch (error) {
    console.error("Error saving data:", error);
    return NextResponse.json(
      { success: false, error: "Failed to save data" },
      { status: 500 }
    );
  }
}

// Add a GET handler to fetch data
export async function GET() {
  try {
    await connectMongo(); // Ensure the database connection
    const headerData = await SiteHeaderDataModel.find(); // Fetch data from MongoDB

    return NextResponse.json({ success: true, data: headerData });
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
