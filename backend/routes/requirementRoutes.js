const express = require("express");

const router = express.Router();

const protect =
require("../middleware/authMiddleware");
const {
  createRequirement,
  getRequirementsByProject,
  runWorkflow,
} = require("../controllers/requirementController");
router.post(
  "/:projectId/requirements",
  protect,
  createRequirement
);
router.get(
  "/:projectId/requirements",
  protect,
  getRequirementsByProject
);
router.post(
  "/requirements/:id/run-workflow",
  protect,
  runWorkflow
);
module.exports = router;