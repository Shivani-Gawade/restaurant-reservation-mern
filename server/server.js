import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import reservationRoutes from "./routes/reservationRoutes.js";

import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();

// Fix __dirname (ES module support)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use("/api/reservations", reservationRoutes);

// ===============================
// MongoDB Connection
// ===============================
// const PORT = process.env.PORT || 5000;
// const MONGO_URI =
//   process.env.MONGO_URI || "mongodb://127.0.0.1:27017/restaurant";

const PORT = process.env.PORT || 5000;

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  console.error("MONGO_URI is missing in environment variables");
  process.exit(1);
}

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

// ===============================
// Serve Frontend (IMPORTANT FIX)
// ===============================
// Render puts build in /client/dist only if you build it
const frontendPath = path.join(__dirname, "../client/dist");

app.use(express.static(frontendPath));

app.get("*", (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

// ===============================
// Error Handling
// ===============================
app.use((err, req, res, next) => {
  console.error("SERVER ERROR:", err);
  res.status(500).json({
    message: "Internal Server Error",
    error: err.message,
  });
});
