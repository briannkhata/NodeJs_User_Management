const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CustomerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  details: {
    type: String,
    required: false,
  },
  createdAt:{
    type:Date,
    default:Date.now()
  },
  updateAt:{
    type:Date,
    default:Date.now()
  }
});

module.exports = mongoose.model("Customer", CustomerSchema);
