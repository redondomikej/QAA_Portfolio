import React, { useEffect, useState } from "react";
import { db, auth } from "../firebase"; // Import authentication
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

const ADMIN_EMAIL = "redondomikej@gmail.com"; // Palitan ito ng email mo

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState({ title: "", description: "", github: "" });
  const [editProject, setEditProject] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchProjects();

    // Check kung sino ang naka-login
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
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

  const handleAddProject = async () => {
    if (!user || user.email !== ADMIN_EMAIL) return; // Protektahan ang add function
    try {
      await addDoc(collection(db, "projects"), newProject);
      setNewProject({ title: "", description: "", github: "" });
      fetchProjects();
    } catch (error) {
      console.error("Error adding project:", error);
    }
  };

  const handleEditProject = async (id) => {
    if (!user || user.email !== ADMIN_EMAIL) return;
    try {
      await updateDoc(doc(db, "projects", id), editProject);
      setEditProject(null);
      fetchProjects();
    } catch (error) {
      console.error("Error updating project:", error);
    }
  };

  const handleDeleteProject = async (id) => {
    if (!user || user.email !== ADMIN_EMAIL) return;
    try {
      await deleteDoc(doc(db, "projects", id));
      fetchProjects();
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  };

  const handleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  const handleLogout = () => {
    signOut(auth);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 flex flex-col items-center pt-20">
      <div className="w-full max-w-4xl">
        {/* Login/Logout Buttons */}
        <div className="flex justify-end mb-4">
          {user ? (
            <>
              <p className="text-sm mr-4">Logged in as {user.email}</p>
              <button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md">
                Logout
              </button>
            </>
          ) : (
            <button onClick={handleLogin} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">
              Admin Login
            </button>
          )}
        </div>

        {/* Add New Project Form - Only for Admin */}
        {user && user.email === ADMIN_EMAIL && (
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
            <button onClick={handleAddProject} className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md">
              Add Project
            </button>
          </div>
        )}

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
                {user && user.email === ADMIN_EMAIL && (
                  <div className="mt-4">
                    <button onClick={() => setEditProject(project)} className="bg-yellow-500 hover:bg-yellow-600 text-white py-1 px-3 rounded-md mr-2">
                      Edit
                    </button>
                    <button onClick={() => handleDeleteProject(project.id)} className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded-md">
                      Delete
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
