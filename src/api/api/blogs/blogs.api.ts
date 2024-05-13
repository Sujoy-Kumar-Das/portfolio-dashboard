import axios from "axios";

export const getAllBlogs = async () => {
  const res = await axios.get("https://backend-rosy-chi.vercel.app/blogs");
  return res.data;
};

export const deleteBlog = async (id: string) => {
  const res = await axios.delete(`http://localhost:5000/blogs/${id}`);
  return res.data;
};
