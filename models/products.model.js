const mongoose = require("mongoose")


const productSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    compony:{
        type:String,
        require:false
    },
    price:{
        type: Number,
        require:true
    },
},{timestamps:true})

module.exports = mongoose.model("Product",productSchema);