import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import db from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import commentRoutes from "./routes/commentRoutes.js";
import solutionRoutes from "./routes/solutionRoutes.js";
import archiveRoutes from "./routes/archiveRoutes.js";
import reputationRoutes from "./routes/reputationRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import notificationRoutes from "./routes/notificationRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";
import settingsRoutes from "./routes/settingsRoutes.js";
import fieldRoutes from "./routes/fieldRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";

dotenv.config();

// Run database schema updates inline
(async () => {
  try {
    const [cols] = await db.query("SHOW COLUMNS FROM users LIKE 'google_id'");
    if (cols.length === 0) {
      console.log("google_id column missing. Modifying users table inline...");
      await db.query(
        "ALTER TABLE users MODIFY COLUMN password_hash VARCHAR(255) NULL",
      );
      await db.query(
        "ALTER TABLE users ADD COLUMN google_id VARCHAR(255) UNIQUE DEFAULT NULL",
      );
      console.log("Database schema successfully updated with google_id.");
    }
  } catch (err) {
    console.error("Database migration check failed:", err.message);
  }
})();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/uploads", express.static("uploads"));

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);
app.use("/api", commentRoutes);
app.use("/api", solutionRoutes);
app.use("/api/archive", archiveRoutes);
app.use("/api/reputation", reputationRoutes);
app.use("/api/users", userRoutes);
app.use("/api/notifications", notificationRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api", uploadRoutes);
app.use("/api/settings", settingsRoutes);
app.use("/api/fields", fieldRoutes);
app.use("/api/admin", adminRoutes);

// Test route
app.get("/", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT 1 + 1 AS result");

    res.json({
      message: "Backend and MySQL connected successfully",
      result: rows[0].result,
    });
  } catch (error) {
    res.status(500).json({
      message: "Database connection failed",
      error: error.message,
    });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
