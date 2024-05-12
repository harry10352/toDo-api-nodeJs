import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

import { authRouter } from "./mongoose/routes/auth.router.js";
import { UserRouter } from "./mongoose/routes/user.router.js";

dotenv.config();

// connect to mongoDB
const port = "4000";

async function connectToMongo(URI: string) {
  await mongoose.connect(URI);
}
const uri = process.env.DATABASE_URL || "mongodb://localhost:27017/";
try {
  connectToMongo(uri)
    .then(() => {
      console.log(uri, "connected! to server DB");
    })
    .catch((e) => {
      console.error("Error while connecting to server DB", e);
    });
} catch (error) {
  console.error("Error while connecting", error);
}

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(cookieParser());

app.use("/api", UserRouter);
app.use("/auth", authRouter);

app.get("/", (req, res) => {
  console.log(req);

  res.status(200).send({ msg: "Hi" });
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
