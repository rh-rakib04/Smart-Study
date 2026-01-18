"use server";

import clientPromise from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

// ADD TOOL
export async function addTool(formData) {
  const tool = {
    title: formData.get("title"),
    description: formData.get("description"),
    category: formData.get("category"),
    price: formData.get("price"),
    rating: Number(formData.get("rating")),
    keyFeatures: formData
      .get("keyFeatures")
      ?.split(",")
      .map(f => f.trim()),
    useCase: formData.get("useCase"),
    image: formData.get("image"),
    createdAt: new Date(),
  };

  const client = await clientPromise;
  const db = client.db("studyDB");

  await db.collection("tools").insertOne(tool);
}

// GET ALL TOOLS
export async function getTools() {
  const client = await clientPromise;
  const db = client.db("studyDB");

  return await db
    .collection("tools")
    .find()
    .sort({ createdAt: -1 })
    .toArray();
}

// GET SINGLE TOOL
export async function getToolById(id) {
  const client = await clientPromise;
  const db = client.db("studyDB");

  return await db.collection("tools").findOne({
    _id: new ObjectId(id),
  });
}
