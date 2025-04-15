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

    const body = await req.json();

    const forwarded = req.headers.get("x-forwarded-for");
    const ip = forwarded?.split(",")[0] || "0.0.0.0";
    const userAgent = req.headers.get("user-agent");

    const {
      latitude,
      longitude,
      ip: clientIp,
      city,
      region,
      country,
      location,
      source,
      time,
    } = body;

    const loc = latitude && longitude
      ? `${latitude},${longitude}`
      : location || "";

    await Visit.create({
      ip: clientIp || ip,
      city,
      region,
      country,
      location: loc,
      userAgent,
      source: source || "unknown",
      timestamp: time || new Date().toISOString(),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error tracking IP:", error);
    return NextResponse.json({ success: false });
  }
}
