import express from "express";
import { connectDB } from "./configs/data-source.js";

const app = express();

app.listen(3000, () => {
  console.log("app is running in port 3000");
});

connectDB();
