import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../components/shared/layout/private/DashboardLayout";
import AllBlogs from "../pages/AllBlogs";
import AllProject from "../pages/AllProject";
import AllSkills from "../pages/AllSkills";
import CreateBlog from "../pages/CreateBlog";
import CreateProject from "../pages/CreateProject";
import CreateSkill from "../pages/CreateSkill";
import EditBlog from "../pages/EditBlog";
import EditProject from "../pages/EditProject";
import EditSkills from "../pages/EditSkills";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        path: "all-projects",
        element: <AllProject />,
      },
      {
        path: "create-project",
        element: <CreateProject />,
      },
      {
        path: "edit-project/:id",
        element: <EditProject />,
      },
      {
        path: "all-blogs",
        element: <AllBlogs />,
      },
      {
        path: "create-blog",
        element: <CreateBlog />,
      },
      {
        path: "edit-blog/:id",
        element: <EditBlog />,
      },
      {
        path: "all-skills",
        element: <AllSkills />,
      },
      {
        path: "create-skill",
        element: <CreateSkill />,
      },
      {
        path: "edit-skill/:id",
        element: <EditSkills />,
      },
    ],
  },
]);
