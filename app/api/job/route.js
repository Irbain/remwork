// http://localhost:3000/api/job

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
    const {
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
    } = body;

    const newPost = await prisma.post.create({
      data: {
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
      },
    });

    return NextResponse.json(newPost);
  } catch (err) {
    return NextResponse.json({ message: "POST Error", err }, { status: 500 });
  }
};
