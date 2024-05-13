import { useParams } from "react-router-dom";

export default function EditBlog() {
  const { id } = useParams();
  return <div>edit blog</div>;
}
