import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState({ title: "", description: "", github: "", features: [] });
  const [featureInput, setFeatureInput] = useState("");
  const [editProject, setEditProject] = useState(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "projects"));
      const projectList = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setProjects(projectList);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  const handleAddFeature = () => {
    if (featureInput.trim() !== "") {
      setNewProject((prev) => ({
        ...prev,
        features: [...prev.features, featureInput],
      }));
      setFeatureInput("");
    }
  };

  const handleAddProject = async () => {
    try {
      await addDoc(collection(db, "projects"), newProject);
      setNewProject({ title: "", description: "", github: "", features: [] });
      fetchProjects();
    } catch (error) {
      console.error("Error adding project:", error);
    }
  };

  const handleEditProject = async (id) => {
    try {
      await updateDoc(doc(db, "projects", id), editProject);
      setEditProject(null);
      fetchProjects();
    } catch (error) {
      console.error("Error updating project:", error);
    }
  };

  const handleDeleteProject = async (id) => {
    try {
      await deleteDoc(doc(db, "projects", id));
      fetchProjects();
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 flex flex-col items-center pt-20">
      <div className="w-full max-w-4xl">
        {/* Add New Project Form */}
        <div className="mb-6 p-6 bg-gray-800 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Add New Project</h2>
          <input
            type="text"
            placeholder="Title"
            value={newProject.title}
            onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
            className="w-full p-2 mb-2 text-black"
          />
          <textarea
            placeholder="Description"
            value={newProject.description}
            onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
            className="w-full p-2 mb-2 text-black"
          />
          <input
            type="text"
            placeholder="GitHub Link"
            value={newProject.github}
            onChange={(e) => setNewProject({ ...newProject, github: e.target.value })}
            className="w-full p-2 mb-2 text-black"
          />

          {/* Feature Input Field */}
          <div className="flex">
            <input
              type="text"
              placeholder="Feature"
              value={featureInput}
              onChange={(e) => setFeatureInput(e.target.value)}
              className="w-full p-2 mb-2 text-black"
            />
            <button
              onClick={handleAddFeature}
              className="ml-2 bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded-md"
            >
              + Add Feature
            </button>
          </div>

          {/* Display Added Features */}
          <ul className="list-disc list-inside text-gray-300 mt-2">
            {newProject.features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>

          <button onClick={handleAddProject} className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md mt-4">
            Add Project
          </button>
        </div>

        {/* Project List */}
        {projects.map((project) => (
          <div key={project.id} className="mb-8 p-6 bg-gray-800 rounded-lg shadow-md">
            {editProject && editProject.id === project.id ? (
              <div>
                <input
                  type="text"
                  value={editProject.title}
                  onChange={(e) => setEditProject({ ...editProject, title: e.target.value })}
                  className="w-full p-2 mb-2 text-black"
                />
                <textarea
                  value={editProject.description}
                  onChange={(e) => setEditProject({ ...editProject, description: e.target.value })}
                  className="w-full p-2 mb-2 text-black"
                />
                <input
                  type="text"
                  value={editProject.github}
                  onChange={(e) => setEditProject({ ...editProject, github: e.target.value })}
                  className="w-full p-2 mb-2 text-black"
                />
                <button onClick={() => handleEditProject(project.id)} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">
                  Save Changes
                </button>
              </div>
            ) : (
              <div>
                <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
                <p className="text-gray-300 mb-4">{project.description}</p>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition duration-300"
                  >
                    🔗 View on GitHub
                  </a>
                )}
                
                {/* Display Features */}
                {project.features && project.features.length > 0 && (
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold mb-1">Features:</h3>
                    <ul className="list-disc list-inside text-gray-300">
                      {project.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mt-4">
                  <button
                    onClick={() => setEditProject(project)}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white py-1 px-3 rounded-md mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteProject(project.id)}
                    className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded-md"
                  >
                    Delete
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
