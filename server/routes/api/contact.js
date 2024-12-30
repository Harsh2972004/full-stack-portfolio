const express = require("express");
const {
  getAllMessages,
  postMessage,
  deleteMessage,
} = require("../../controllers/contactController");
const router = express.Router();

// @Route GET /contact
// @Desc get all message
router.get("/", getAllMessages);

// @Route POST /contact
// @Desc add a message
router.post("/", postMessage);

// @Route DELETE /contact
// @Desc delete a message
router.delete("/:id", deleteMessage);

module.exports = router;
