import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

import { router as userRouter } from "./mongoose/routes/user.router.js";

dotenv.config();

// connect to mongoDB
const mongo_URI = "mongodb://localhost:27017/";
const port = "4000";

async function connectToMongo(URI: string) {
  await mongoose.connect(URI);
  console.log("connected to DB!!");
}

try {
  await connectToMongo(mongo_URI);
} catch (error) {
  console.error("Error while connecting", error);
}

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(cookieParser());

app.use("/api", userRouter);

app.get("/", (req, res) => {
  console.log(req);

  res.status(200).send({ msg: "Hi" });
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
