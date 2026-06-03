const Requirement =
require("../models/Requirement");

const createRequirement =
async (req, res) => {

  try {

    const requirement =
      await Requirement.create({
        project: req.params.projectId,
        content: req.body.content,
      });

    res.status(201).json(requirement);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

module.exports = {
  createRequirement,
};