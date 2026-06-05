import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import {
  getProjects,
  createProject,
} from "../services/projectService";

function ProjectPage() {
  const [projects, setProjects] = useState([]);

  const [name, setName] = useState("");

  const [description, setDescription] =
    useState("");

  const fetchProjects = async () => {
    try {
      const response =
        await getProjects();

      setProjects(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createProject({
        name,
        description,
      });

      setName("");
      setDescription("");

      fetchProjects();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MainLayout>

      <h1 className="text-3xl font-bold mb-6">
        Projects
      </h1>

      {/* Create Project Form */}

      <form
        onSubmit={handleSubmit}
        className="space-y-4 mb-8"
      >
        <input
          type="text"
          placeholder="Project Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
          className="border p-2 w-full"
        />

        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) =>
            setDescription(
              e.target.value
            )
          }
          className="border p-2 w-full"
        />

        <button
          type="submit"
          className="border px-4 py-2"
        >
          Create Project
        </button>
      </form>

      {/* Projects List */}

      <div className="space-y-4">

        {projects.map((project) => (

          <div
            key={project._id}
            className="border p-4 rounded"
          >

            <Link
              to={`/projects/${project._id}`}
            >
              <h3 className="text-xl font-semibold">
                {project.name}
              </h3>
            </Link>

            <p className="mt-2">
              {project.description}
            </p>

          </div>

        ))}

      </div>

    </MainLayout>
  );
}

export default ProjectPage;