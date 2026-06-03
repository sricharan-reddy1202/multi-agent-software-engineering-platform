const express = require("express");

const router = express.Router();

const protect =
require("../middleware/authMiddleware");

const {
  createRequirement,
} = require("../controllers/requirementController");

router.post(
  "/:projectId/requirements",
  protect,
  createRequirement
);

module.exports = router;