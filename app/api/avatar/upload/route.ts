import { put } from "@vercel/blob";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const filename: string | null = searchParams.get("filename");

  // Check if filename is null
  if (!filename) {
    return NextResponse.json(
      { error: "Filename is required" },
      { status: 400 }
    );
  }

  // Get the body as a stream
  const body = request.body;

  // Check if the body is null
  if (!body) {
    return NextResponse.json(
      { error: "Request body is required" },
      { status: 400 }
    );
  }

  const blob = await put(filename, body, {
    access: "public",
  });

  return NextResponse.json(blob);
}
