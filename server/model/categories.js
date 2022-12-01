const mongoose = require("mongoose")
const CategoriesSchema = new mongoose.Schema({
    Quantity:Number
})  
module.exports = mongoose.model("CategoriesSchema",CategoriesSchema)