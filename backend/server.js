import dotenv from "dotenv";
dotenv.config();
import express from "express";
import connectDB from "./lib/db.js";
import authRoutes from "./routes/auth.route.js";
import morgan from "morgan";
const app = express();


// Database connected
connectDB();

// port comes from environment variable
const PORT = process.env.PORT || 500;

// built middleware
app.use(express.json())
app.use(morgan("dev"));

// custom middleware
app.use("/api/auth/", authRoutes);

app.get("/", (req, res) => {
  res.send("Hello world from backend");
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});
