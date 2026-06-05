const mongoose = require("mongoose");

const requirementSchema = new mongoose.Schema(
  {
    project: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
      required: true,
    },

    content: {
      type: String,
      required: true,
    },
    plannerOutput: {
  type: String,
  default: "",
},
coderOutput: {
  type: String,
  default: "",
},

reviewerOutput: {
  type: String,
  default: "",
},

reviewScore: {
  type: Number,
  default: 0,
},
    status: {
      type: String,
      enum: [
        "pending",
        "processing",
        "completed",
        "failed",
      ],
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Requirement",
  requirementSchema
);