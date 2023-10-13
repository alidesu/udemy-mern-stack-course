import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
dotenv.config();
const port = process.env.PORT || 8000;
connectDB(); // connect to database
const app = express();
app.use(cors());
import productRoutes from "./routes/productRoutes.js";

app.get("/", (req, res) => {
    res.send("API is running...");
//   res.json(products);
});

app.use("/api/products", productRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
