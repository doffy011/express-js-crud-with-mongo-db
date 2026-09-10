const expresss = require("express");
const app = expresss();
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");
const todoRoutes = require("./routes/todo.routes");

const connectDB = require("./config/db");
const productRoutes = require("./routes/product.routes");

app.use(expresss.json());
app.use(
  cors({
    origin: process.env.CLIENT_URL || "https://todo1-1-mu8o.onrender.com",
  }),
);
connectDB();

app.use("/api/todos", todoRoutes);
app.use("/api/example_product", productRoutes);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
