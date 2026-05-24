import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import connectDB from "./lib/db.js";
dotenv.config();
import authRoutes from "./routes/auth.route.js";
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
