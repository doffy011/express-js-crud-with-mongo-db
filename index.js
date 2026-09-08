const expresss = require("express");
const app = expresss();
const dotenv = require("dotenv").config();
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})
app.get('/',(req,res)=>{
  res.send('hay this is from /')
})


