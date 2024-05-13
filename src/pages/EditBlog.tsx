import { useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useParams } from "react-router-dom";

export default function EditBlog() {
  const quillRef = useRef(null); // Ref to store the Quill instance
  const { id } = useParams();

  const handleSubmit = (event) => {
    event.preventDefault();
    const editor = quillRef.current.getEditor(); // Get the Quill editor instance
    const value = editor.root.innerHTML; // Get the HTML content of the editor
    console.log("Editor value:", value);
    // Now you can use the 'value' variable for further processing or sending it to your backend
  };

  return (
    <form onSubmit={handleSubmit}>
      <ReactQuill
        ref={quillRef} // Assign the ref to the ReactQuill component
        theme="snow"
      />
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
}
