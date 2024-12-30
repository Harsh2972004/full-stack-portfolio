const Contact = require("../models/Contact");
const mongoose = require("mongoose");

// get all messages
const getAllMessages = async (req, res) => {
  try {
    const contactMessages = await Contact.find();
    res.status(200).json(contactMessages);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
// post a message
const postMessage = async (req, res) => {
  const { name, email, message } = req.body;
  let emptyFields = [];

  if (!name) {
    emptyFields.push("name");
  }
  if (!email) {
    emptyFields.push("email");
  }
  if (!message) {
    emptyFields.push("message");
  }

  if (emptyFields.length > 0) {
    return res.status(400).json({ error: "All field are required" });
  }

  try {
    const contactMessage = await Contact.create({
      name,
      email,
      message,
    });
    res.status(200).json(contactMessage);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// delete message
const deleteMessage = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "Message not found" });
    }

    const contactMessage = await Contact.findOneAndDelete({ _id: id });
    res.status(200).json({ success: "deleted successful" });

    if (!contactMessage) {
      return res.status(404).json({ error: "message not found" });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { getAllMessages, postMessage, deleteMessage };
