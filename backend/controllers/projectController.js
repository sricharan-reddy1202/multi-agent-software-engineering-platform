const Project = require("../models/Project");

const createProject = async (req, res) => {
  try {

    const { name, description } = req.body;

    const project = await Project.create({
      name,
      description,
      owner: req.user.userId,
    });

    res.status(201).json(project);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const getProjects = async (req, res) => {
  try {

    const projects = await Project.find({
      owner: req.user.userId,
    });

    res.json(projects);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const getProjectById = async (req, res) => {
  try {

    const project =
      await Project.findById(
        req.params.id
      );

    if (!project) {
      return res.status(404).json({
        message: "Project not found",
      });
    }

    res.json(project);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};
module.exports = {
  createProject,
  getProjects,
  getProjectById
};