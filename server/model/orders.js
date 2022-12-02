const mongoose = require("mongoose")
const ordersSchema = new mongoose.Schema({
    Quantity:Number
})
module.exports = mongoose.model("ordersSchema",ordersSchema)