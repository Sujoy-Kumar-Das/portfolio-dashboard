import { CiMenuBurger } from "react-icons/ci";
import { Link, Outlet } from "react-router-dom";

export default function DashboardLayout() {
  const menuItems = (
    <>
      <li>
        <Link to={"/"}>Dashboard</Link>
      </li>
      <li>
        <Link to={"/all-projects"}>Projects</Link>
      </li>
      <li>
        <Link to={"/all-skills"}>Skills</Link>
      </li>
      <li>
        <Link to={"/all-blogs"}>Blogs</Link>
      </li>
      <li>
        <Link to={"/create-project"}>Create Project</Link>
      </li>
      <li>
        <Link to={"/create-skill"}>Create Skill</Link>
      </li>
      <li>
        <Link to={"/create-blog"}>Create Blog</Link>
      </li>
    </>
  );

  return (
    <div className="drawer lg:drawer-open">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <Outlet />
        <label
          htmlFor="dashboard-drawer"
          className="btn btn-primary drawer-button lg:hidden"
        >
          <CiMenuBurger />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="dashboard-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          {menuItems}
        </ul>
      </div>
    </div>
  );
}
