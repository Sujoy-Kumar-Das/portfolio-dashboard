import axios from "axios";

export const getAllProjects = async () => {
  const res = await axios.get("https://backend-rosy-chi.vercel.app/projects");
  return res.data;
};

export const deleteProject = async (id: string) => {
  const res = await axios.delete(`http://localhost:5000/project/${id}`);
  return res.data;
};
