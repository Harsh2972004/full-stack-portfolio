// model/project.js
const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  title: String,
  description: String,
  techStack: [String],
  liveLink: String,
  github: String,
});

module.exports = Project = mongoose.model("project", ProjectSchema);
