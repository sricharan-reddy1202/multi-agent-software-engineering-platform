const Project =
require("../models/Project");

const Requirement =
require("../models/Requirement");

const getStats =
async (req, res) => {

  try {

    const totalProjects =
      await Project.countDocuments();

    const totalRequirements =
      await Requirement.countDocuments();

    const completedRuns =
      await Requirement.countDocuments({
        status: "completed",
      });

    res.json({
      totalProjects,
      totalRequirements,
      completedRuns,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};

module.exports = {
  getStats,
};