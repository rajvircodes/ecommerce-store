import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import connectDB from "./lib/db.js";
dotenv.config();

connectDB();
import authRoutes from "./routes/auth.route.js";

const app = express();

const PORT = process.env.PORT || 500;

app.use(morgan("dev"));
app.use("/api/auth/", authRoutes);

app.get("/", (req, res) => {
  res.send("Hello world from backend");
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});
