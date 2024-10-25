// app/api/site-header/route.ts
import { NextRequest, NextResponse } from "next/server";
import connectMongo from "@/backend/db/mongodb";
import SiteHeaderData from "@/backend/models/SiteHeaderData";

export async function GET() {
  await connectMongo();
  try {
    const data = await SiteHeaderData.findOne();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch data" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  await connectMongo();
  const body = await req.json();

  try {
    const existingData = await SiteHeaderData.findOne();
    if (existingData) {
      await SiteHeaderData.findByIdAndUpdate(existingData._id, body);
      return NextResponse.json({ message: "Data updated successfully" });
    } else {
      const data = new SiteHeaderData(body);
      await data.save();
      return NextResponse.json(
        { message: "Data created successfully" },
        { status: 201 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to save data" },
      { status: 500 }
    );
  }
}
