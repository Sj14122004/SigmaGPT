import express from "express";
import "dotenv/config";
import cors from "cors";
import mongoose from "mongoose";
import chatRoutes from "./routes/chat.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", chatRoutes);

const connectDB = async () => {
    try {
        console.log("Connecting to MongoDB...");

        await mongoose.connect(process.env.MONGODB_URI);

        console.log("Connected with Database!");
    } catch (err) {
        console.log("Failed to connect with Db", err);
        throw err;
    }
};

await connectDB();

export default app;