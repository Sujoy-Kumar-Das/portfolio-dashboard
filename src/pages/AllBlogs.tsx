import {
  useDeleteBlog,
  useGetAllBlogs,
} from "../api/api.hooks/blogs/blogs.hook";
import Container from "../components/shared/container/Container";
import Loader from "../components/shared/loader/Loader";
import Table from "../components/shared/table/Table";

export default function AllBlogs() {
  // hooks
  const { data, isLoading } = useGetAllBlogs();
  const { mutateAsync } = useDeleteBlog();
  const handleDelete = async (id: string) => {
    await mutateAsync(id);
  };
  if (isLoading) {
    return <Loader />;
  }
  return (
    <Container>
      <Table
        data={data.data}
        handleDelete={handleDelete}
        editLink={`/edit-blog`}
      />
    </Container>
  );
}
