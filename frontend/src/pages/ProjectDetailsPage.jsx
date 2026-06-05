import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import MainLayout from "../layouts/MainLayout";

import {
  createRequirement,
  getRequirements,
  runWorkflow,
} from "../services/requirementService";

import AgentCard from "../components/AgentCard";

function ProjectDetailsPage() {

  const { id } = useParams();

  const [content, setContent] = useState("");

  const [requirements, setRequirements] =
    useState([]);

  const [runningWorkflowId,
    setRunningWorkflowId] =
    useState(null);

  const fetchRequirements =
    async () => {

      try {

        const response =
          await getRequirements(id);

        setRequirements(
          response.data
        );

      } catch (error) {

        console.log(error);

      }

    };

  useEffect(() => {

    fetchRequirements();

  }, []);

  const handleSubmit =
    async (e) => {

      e.preventDefault();

      try {

        await createRequirement(
          id,
          content
        );

        alert(
          "Requirement Created"
        );

        setContent("");

        fetchRequirements();

      } catch (error) {

        console.log(error);

      }

    };

  const handleRunWorkflow =
    async (requirementId) => {

      try {

        setRunningWorkflowId(
          requirementId
        );

        await runWorkflow(
          requirementId
        );

        fetchRequirements();

        alert(
          "Workflow Completed"
        );

      } catch (error) {

        console.log(error);

        alert(
          "Workflow Failed"
        );

      } finally {

        setRunningWorkflowId(
          null
        );

      }

    };

  return (

    <MainLayout>

      <h1
        className="
        text-3xl
        font-bold
        mb-6
        "
      >
        Project Details
      </h1>

      {/* Create Requirement */}

      <form
        onSubmit={handleSubmit}
        className="mb-8"
      >

        <textarea
          rows="5"
          value={content}
          onChange={(e) =>
            setContent(
              e.target.value
            )
          }
          placeholder="Describe your software requirement..."
          className="
          w-full
          border
          rounded-lg
          p-4
          "
        />

        <button
          type="submit"
          className="
          mt-4
          bg-black
          text-white
          px-4
          py-2
          rounded-lg
          "
        >
          Create Requirement
        </button>

      </form>

      <h2
        className="
        text-2xl
        font-semibold
        mb-4
        "
      >
        Requirements
      </h2>

      {requirements.length === 0 ? (

        <p>
          No requirements yet.
        </p>

      ) : (

        requirements.map(
          (requirement) => (

            <div
              key={requirement._id}
              className="
              border
              rounded-lg
              p-6
              mb-6
              shadow-sm
              hover:shadow-md
              transition
              "
            >

              <h3
                className="
                text-xl
                font-bold
                "
              >
                Requirement
              </h3>

              <p className="mt-3">
                {requirement.content}
              </p>

              <p className="mt-3">

                <strong>
                  Status:
                </strong>{" "}

                {runningWorkflowId ===
                requirement._id
                  ? "🔄 Running Workflow..."
                  : requirement.status}

              </p>

              <button
                onClick={() =>
                  handleRunWorkflow(
                    requirement._id
                  )
                }

                disabled={
                  runningWorkflowId ===
                  requirement._id
                }

                className="
                mt-4
                px-4
                py-2
                rounded-lg
                border
                disabled:opacity-50
                disabled:cursor-not-allowed
                "
              >

                {runningWorkflowId ===
                requirement._id
                  ? "Running Workflow..."
                  : "Run Workflow"}

              </button>

              {/* Agent Outputs */}

              <div className="mt-6 space-y-4">

                {requirement.plannerOutput && (

                  <AgentCard
                    title="🧠 Planner Agent"
                    content={
                      requirement.plannerOutput
                    }
                  />

                )}

                {requirement.coderOutput && (

                  <AgentCard
                    title="💻 Coder Agent"
                    content={
                      requirement.coderOutput
                    }
                  />

                )}

                {requirement.reviewerOutput && (

                  <AgentCard
                    title="🔍 Reviewer Agent"
                    content={
                      requirement.reviewerOutput
                    }
                  />

                )}

              </div>

              {/* Review Score */}

              {requirement.reviewScore >
                0 && (

                <div
                  className="
                  mt-6
                  border
                  rounded-lg
                  p-4
                  bg-yellow-50
                  "
                >

                  <h3
                    className="
                    text-lg
                    font-semibold
                    "
                  >
                    ⭐ Review Score
                  </h3>

                  <p
                    className="
                    text-3xl
                    font-bold
                    mt-2
                    "
                  >
                    {
                      requirement.reviewScore
                    }/10
                  </p>

                </div>

              )}

            </div>

          )
        )

      )}

    </MainLayout>

  );
}

export default ProjectDetailsPage;