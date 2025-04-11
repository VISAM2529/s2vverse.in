// app/api/track/route.js
import { NextResponse } from "next/server";
import Visit from "@/models/Visitor";
import mongoose from "mongoose";

const connectDB = async () => {
  if (mongoose.connections[0].readyState === 1) return;
  await mongoose.connect(process.env.MONGODB_URI);
};

export async function POST(req) {
  try {
    await connectDB();

    const forwarded = req.headers.get("x-forwarded-for");
    const ip = forwarded?.split(",")[0] || "0.0.0.0";
    const userAgent = req.headers.get("user-agent");

    const geoRes = await fetch(`https://ipinfo.io/${ip}/json?token=0cedca615a1871`);
    const geoData = await geoRes.json();

    const { city, region, country, loc } = geoData;

    await Visit.create({
      ip,
      city,
      region,
      country,
      location: loc,
      userAgent,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error tracking IP:", error);
    return NextResponse.json({ success: false });
  }
}
