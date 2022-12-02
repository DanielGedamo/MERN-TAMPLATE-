const mongoose = require("mongoose")
const produoctSchema = new mongoose.Schema({
    Quantity:Number
}) 
module.exports = mongoose.model("produoctSchema",produoctSchema)