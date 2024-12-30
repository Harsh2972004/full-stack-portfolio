// Load project model
const Project = require("../models/Project");
const mongoose = require("mongoose");

// Get all projects
const getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Add projects
const createProject = async (req, res) => {
  const { title, description, techStack, github, liveLink } = req.body;
  let emptyFields = [];

  if (!title) {
    emptyFields.push("title");
  }
  if (!description) {
    emptyFields.push("description");
  }
  if (!techStack) {
    emptyFields.push("techStack");
  }
  if (!liveLink) {
    emptyFields.push("liveLink");
  }
  if (!github) {
    emptyFields.push("github");
  }

  if (emptyFields.length > 0) {
    return res.status(400).json({ error: "All field are required" });
  }

  try {
    const project = await Project.create({
      title,
      description,
      techStack,
      liveLink,
      github,
    });
    res.status(200).json(project);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// delete prjoect
const deleteProject = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "project not found" });
    }

    const project = await Project.findOneAndDelete({ _id: id });
    res.status(200).json({ message: "deleted successful" });

    if (!project) {
      return res.status(404).json({ error: "project not found" });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// update project
const updateProject = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "project not found" });
    }

    const project = await Project.findOneAndUpdate(
      { _id: id },
      {
        ...req.body,
      }
    );
    if (!project) {
      return res.status(404).json({ error: "project not found" });
    }

    const updatedproject = await Project.findOne({ _id: project._id });
    res.status(200).json(updatedproject);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { getProjects, createProject, deleteProject, updateProject };
