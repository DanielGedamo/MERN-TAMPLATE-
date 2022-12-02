const mongoose = require("mongoose")
const hsndoutsSchema = new mongoose.Schema({
    Quantity:Number
})
module.exports = mongoose.model("hsndoutsSchema",hsndoutsSchema)