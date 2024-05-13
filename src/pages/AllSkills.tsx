import {
  useDeleteSkill,
  useGetAllSkills,
} from "../api/api.hooks/skills/skills.hook";
import Container from "../components/shared/container/Container";
import Loader from "../components/shared/loader/Loader";
import Table from "../components/shared/table/Table";

export default function AllSkills() {
  // hooks
  const { data, isLoading } = useGetAllSkills();
  const { mutateAsync } = useDeleteSkill();
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
        editLink={"/edit-skill"}
      />
    </Container>
  );
}
