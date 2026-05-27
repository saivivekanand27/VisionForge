import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import postRouter from "./routes/posts.js";
import generateImageRouter from "./routes/generateImage.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello GFG Developers" });
});

app.use("/api/post", postRouter);
app.use("/api/generateImage", generateImageRouter);

// Error handler middleware
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong";
  return res.status(status).json({
    success: false,
    message,
  });
});

const connectDB = async () => {
  mongoose.set("strictQuery", true);
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("MongoDB connected");
  } catch (err) {
    console.error("Failed to connect to MongoDB");
    console.error(err);
  }
};

const startServer = async () => {
  await connectDB();
  app.listen(8080, () => {
    console.log("Server started on port http://localhost:8080");
  });
};

startServer();
