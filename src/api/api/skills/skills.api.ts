import axios from "axios";

export const getAllSkills = async () => {
  const res = await axios.get("https://backend-rosy-chi.vercel.app/skills");
  return res.data;
};

export const deleteSkills = async (id: string) => {
  const res = await axios.delete(`http://localhost:5000/skills/${id}`);
  return res.data;
};
