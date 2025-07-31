import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import userRoutes from "./Routes/User.route.js";

app.use(express.json());

const PORT = process.env.PORT || 5000;
const URL = process.env.MONGODB_URL;

try {
  mongoose.connect(URL);
  console.log("DB Connected Successfully!");
} catch (error) {
  console.log(error);
}

// Routes
app.use("/user", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is Running on Port ${PORT}`);
});
