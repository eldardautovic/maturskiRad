const express = require("express");
const router = express.Router();
const Project = require("../models/ucenici");

//GET all
router.get("/", async (req, res) => {
  try {
    const project = await Project.find();
    res.json(project);
  } catch (err) {
    res.status(500).json({ Error: err });
  }
});

//GET by ID
router.get("/:id", async (req, res) => {
  try {
    const params = await Project.findById(req.params.id);
    res.json(params);
  } catch (err) {
    res.status(500).json({ Error: err });
  }
});

//DELETE by ID
router.delete("/:id", async (req, res) => {
  try {
    const projectId = await Project.remove({ _id: req.params.id });
    res.status(200).json(projectId);
  } catch (err) {
    res.status(500).json({ Error: err });
  }
});

//POST
router.post("/", async (req, res) => {
  const newProject = new Project({
    title: req.body.title,
    description: req.body.description,
  });

  try {
    const savedProject = await newProject.save();
    res.json(savedProject);
  } catch (err) {
    res.status(500).json({ Error: err });
  }
});

module.exports = router;