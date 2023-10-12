import express from "express";
import cors from "cors";
import products from "./data/products.js";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
dotenv.config();
const port = process.env.PORT || 8000;
connectDB(); // connect to database
const app = express();
app.use(cors());

app.get("/", (req, res) => {
    res.send("API is running...");
//   res.json(products);
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
