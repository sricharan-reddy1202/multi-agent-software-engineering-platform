const Requirement =
require("../models/Requirement");

const Run =
require("../models/Run");

const {
  generatePlan,
} = require("../services/aiService");

const executePlanner =
async (req, res) => {

  try {

    const requirement =
      await Requirement.findById(
        req.params.requirementId
      );

    if (!requirement) {
      return res.status(404).json({
        message:
          "Requirement not found",
      });
    }

    const plan =
      await generatePlan(
        requirement.content
      );

    const run =
      await Run.create({
        requirement:
          requirement._id,
        plannerOutput: plan,
        status: "completed",
      });

    res.status(201).json(run);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

module.exports = {
  executePlanner,
};