// model/project.js
const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  title: String,
  description: String,
  techStack: [String],
  link: String,
  guithub: String,
});

module.exports = Project = mongoose.model("project", ProjectSchema);
