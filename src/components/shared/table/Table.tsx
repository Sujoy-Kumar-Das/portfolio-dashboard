import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Table({ data, handleDelete, editLink }) {
  return (
    <div className="overflow-x-auto px-3">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Title</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item._id}>
              <td>{index + 1}</td>
              <td>
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={item.image} alt={`${item.title} image`} />
                  </div>
                </div>
              </td>
              <td>{item.title}</td>
              <td>
                <Link to={`${editLink}/${item._id}`}>
                  <button className=" btn btn-sm btn-primary btn-outline">
                    <FaEdit />
                  </button>
                </Link>
              </td>
              <td>
                <button
                  onClick={() => handleDelete(item._id)}
                  className="btn btn-error btn-sm"
                >
                  <FaRegTrashAlt />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
