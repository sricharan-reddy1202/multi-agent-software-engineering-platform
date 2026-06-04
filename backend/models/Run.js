const mongoose = require("mongoose");

const runSchema = new mongoose.Schema(
  {
    requirement: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Requirement",
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

    status: {
      type: String,
      enum: [
        "processing",
        "completed",
        "failed",
      ],
      default: "processing",
    },

    startedAt: {
      type: Date,
      default: Date.now,
    },

    completedAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);
module.exports =
mongoose.model("Run", runSchema);