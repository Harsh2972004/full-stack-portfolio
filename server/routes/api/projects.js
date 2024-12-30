// routes/api/project
const {
  getProjects,
  createProject,
  deleteProject,
  updateProject,
} = require("../../controllers/projectsController");
const express = require("express");
const router = express.Router();

// @routes GET projects/
// @desc get all projects
router.get("/", getProjects);

// @routes POST projects/
// @desc add project
router.post("/", createProject);

// @routes DELETE projects/
// @desc delete project
router.delete("/:id", deleteProject);

// @routes PATCH projects/
// @desc update project
router.patch("/:id", updateProject);

module.exports = router;
