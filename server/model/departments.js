const mongoose = require("mongoose");

const departmentsSchema = new mongoose.Mongoose.Schema({
  Quantity: Number
});
module.exports = mongoose.model("departmentsSchema", departmentsSchema);
