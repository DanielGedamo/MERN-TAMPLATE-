const mongoose = require("mongoose")
const storSchema = new mongoose.model({
    Quantity:Number
})
module.exports = mongoose.model("storSchema",storSchema)