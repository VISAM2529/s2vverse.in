// models/Visit.js
import mongoose from "mongoose";

const VisitSchema = new mongoose.Schema(
  {
    ip: String,
    city: String,
    region: String,
    country: String,
    location: String,
    userAgent: String,
  },
  { timestamps: true }
);

export default mongoose.models.Visit || mongoose.model("Visit", VisitSchema);
