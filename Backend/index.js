const expresss = require("express");
const app = expresss();
const dotenv = require("dotenv").config();
const mongoose = require('mongoose')

const connectDB = require('./config/db')
const productRoutes = require('./routes/product.routes')

app.use(expresss.json());
connectDB();

app.use('/api/example_product', productRoutes);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})








