const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

module.exports = Contact = mongoose.model("contact", ContactSchema);
