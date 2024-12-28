// routes/api/project
const {
  getProjects,
  createProject,
  deleteProject,
  updateProject,
} = require("../../controllers/projectsController");
const express = require("express");
const router = express.Router();

// @routes GET api/projects/
// @desc get all projects
router.get("/", getProjects);

// @routes POST api/projects/
// @desc add project
router.post("/", createProject);

// @routes DELETE api/projects/
// @desc delete project
router.delete("/:id", deleteProject);

// @routes PATCH api/projects/
// @desc update project
router.patch("/:id", updateProject);

module.exports = router;
