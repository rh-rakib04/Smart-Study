"use server";

import clientPromise from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

// ADD TOOL
export async function addTool(formData) {
  const title = formData.get("title");
  const description = formData.get("description");

  const client = await clientPromise;
  const db = client.db("studyDB");

  await db.collection("tools").insertOne({
    title,
    description,
    createdAt: new Date(),
  });
}

// GET ALL TOOLS
export async function getTools() {
  const client = await clientPromise;
  const db = client.db("studyDB");

  return await db.collection("tools").find().toArray();
}

// GET SINGLE TOOL
export async function getToolById(id) {
  const client = await clientPromise;
  const db = client.db("studyDB");

  return await db.collection("tools").findOne({ _id: new ObjectId(id) });
}
