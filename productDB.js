require("dotenv").config();
const Product = require("./models/products.model");
const connectDB = require("./db/connect");

const ProductJson = require("./products.json");

const start = async ()=>{
    try{
        await connectDB(process.env.MONGODB_URL);
        await Product.deleteMany();
        await Product.create(ProductJson);
        console.log("product added successfully");
    }
    catch(err){
        console.log("Internal Error occure" + err);
    }
}

start();