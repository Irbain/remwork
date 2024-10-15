// http://localhost:3000/api/job/13123
import prisma from "@/prisma/index";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  try {
    const { id } = params;

    const job = await prisma.post.findMany({
      //findUnique
      where: {
        jobId: id,
      },
    });
    return NextResponse.json(job);
  } catch (err) {
    console.error("GET Error:", err);
    return NextResponse.json(
      { message: "GET Error", error: err.message },
      { status: 500 }
    );
  }
};

export const PATCH = async (request, { params }) => {
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

    const { id } = params;

    const updateJob = await prisma.post.update({
      where: {
        id,
      },
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

    if (!updateJob) {
      return NextResponse.json(
        { message: "Update Error", err },
        { status: 404 }
      );
    }

    return NextResponse.json(updateJob);
  } catch (err) {
    return NextResponse.json({ message: "POST Error", err }, { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  try {
    const { id } = params;

    await prisma.post.delete({
      where: {
        id: id,
      },
    });

    return NextResponse.json(" Deleted");
  } catch (err) {
    console.error("DELETE Error:", err);
    return NextResponse.json(
      { message: "Delete Error", error: err.message },
      { status: 500 }
    );
  }
};
