const axios = require("axios");
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
const getRequirementsByProject =
async (req, res) => {

  try {

    const requirements =
      await Requirement.find({
        project: req.params.projectId,
      });

    res.json(requirements);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};
const runWorkflow =
async (req, res) => {
console.log("RUN WORKFLOW API HIT");
  try {

    const requirement =
      await Requirement.findById(
        req.params.id
      );

    if (!requirement) {

      return res.status(404).json({
        message:
          "Requirement not found",
      });

    }

    requirement.status =
      "processing";

    await requirement.save();

    const response =
      await axios.post(
        "http://localhost:8000/workflow",
        {
          requirement:
            requirement.content,
        }
      );

    requirement.plannerOutput =
      response.data.plan;
    
    requirement.coderOutput =
      response.data.code;

    requirement.reviewerOutput =
      response.data.review;

    requirement.reviewScore =
      response.data.score;

    requirement.status =
      "completed";

    await requirement.save();

    res.json({
  plannerOutput:
    requirement.plannerOutput,

  coderOutput:
    requirement.coderOutput,

  reviewerOutput:
    requirement.reviewerOutput,

  reviewScore:
    requirement.reviewScore,
});

  }  catch (error) {

  if (requirement) {

    requirement.status =
      "failed";

    await requirement.save();

  }

  res.status(500).json({
    message: error.message,
  });

  }
};
module.exports = {
  createRequirement,
  getRequirementsByProject,
  runWorkflow,
};