require("dotenv").config();

const express = require("express");
const app = express();
const connectDB = require("./db/connect");

const PORT = process.env.PORT || 1000;

app.get("/", (req, res) => {
  res.send("Hello from server side");
});


const  productRoutes  = require("./routes/products")

//middleware and setting up routes
app.use("/api/products", productRoutes);

const start = async() => {
  try {
    await connectDB(process.env.MONGODB_URL);
    app.listen(PORT, () => {
      console.log(`connected on port ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
