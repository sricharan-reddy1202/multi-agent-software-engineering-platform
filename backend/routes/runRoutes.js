const express =
require("express");

const router =
express.Router();

const protect =
require("../middleware/authMiddleware");

const {
  executePlanner,
} = require(
  "../controllers/runController"
);

router.post(
  "/planner/:requirementId",
  protect,
  executePlanner
);

module.exports = router;