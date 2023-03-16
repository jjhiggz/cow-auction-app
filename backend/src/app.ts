import express from "express";
import { prisma } from "../prisma/db.server";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/cows", async (req, res) => {
  const cows = await prisma.cow.findMany().catch(() => null);
  if (!cows) {
    return res.status(500).json({ message: "Error fetching cows" });
  }
  res.status(200).json(cows);
});

app.listen(3000);
