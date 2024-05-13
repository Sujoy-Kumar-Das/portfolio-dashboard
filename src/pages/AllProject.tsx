import {
  useDeleteProject,
  useGetAllProjects,
} from "../api/api.hooks/projects/projects.hook";
import Container from "../components/shared/container/Container";
import Loader from "../components/shared/loader/Loader";
import Table from "../components/shared/table/Table";

export default function AllProject() {
  // hooks
  const { data, isLoading } = useGetAllProjects();
  const { mutateAsync } = useDeleteProject();

  const handleDelete = async (id: string) => {
    mutateAsync(id);
  };

  if (isLoading) {
    return <Loader />;
  }
  return (
    <Container>
      <Table
        data={data.data}
        handleDelete={handleDelete}
        editLink={"/edit-project"}
      />
    </Container>
  );
}
