const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const projectRoutes =require("./routes/projectRoutes");
const requirementRoutes =
require("./routes/requirementRoutes");
const runRoutes =
require("./routes/runRoutes");


const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/projects", projectRoutes);
app.use(
  "/api/projects",
  requirementRoutes
);
app.use("/api/runs", runRoutes);
app.get("/", (req, res) => {
  res.json({
    message: "API is running",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});