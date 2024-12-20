import prisma from "@/app/utils/prismadb";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const jobs = await prisma.post.findMany();
    return NextResponse.json(jobs);
  } catch (err) {
    return NextResponse.json({ message: "GET Error", err }, { status: 500 });
  }
};

export const POST = async (request) => {
  try {
    const body = await request.json();

    if (!Array.isArray(body)) {
      return NextResponse.json(
        { message: "Invalid data format, expected an array" },
        { status: 400 }
      );
    }

    const newPosts = await prisma.post.createMany({
      data: body.map(
        ({
          jobId,
          url,
          jobSlug,
          jobTitle,
          companyName,
          companyLogo,
          jobIndustry,
          jobType,
          jobGeo,
          jobLevel,
          jobExcerpt,
          jobDescription,
          pubDate,
        }) => ({
          jobId,
          url,
          jobSlug,
          jobTitle,
          companyName,
          companyLogo,
          jobIndustry,
          jobType,
          jobGeo,
          jobLevel,
          jobExcerpt,
          jobDescription,
          pubDate,
        })
      ),
    });

    return NextResponse.json({ message: "Jobs posted successfully", newPosts });
  } catch (err) {
    console.error("POST Error details:", err); // Log the full error details
    return NextResponse.json(
      { message: "POST Error", error: err.message },
      { status: 500 }
    );
  }
};
