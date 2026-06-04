const axios = require("axios");

const generatePlan =
async (requirement) => {

  const response =
    await axios.post(
      "http://localhost:8000/planner",
      {
        requirement,
      }
    );

  return response.data.plan;
};

module.exports = {
  generatePlan,
};