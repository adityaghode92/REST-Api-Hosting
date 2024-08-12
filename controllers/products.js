const ProductModel = require("../models/products.model")

const showproducts = async (req,res)=>{
    const myData = await ProductModel.find(req.query);
    res.status(200).json({
        message : { myData }
    })
}

const showtestcases = async (req,res)=>{
    res.status(200).json({
        message : " testing happens here"
    })
}

module.exports = {showproducts, showtestcases};