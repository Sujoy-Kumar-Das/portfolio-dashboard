import Container from "../components/shared/container/Container";
import InputField from "../components/shared/from/InputField";

export default function EditProject() {
  return (
    <Container>
      <InputField name="title" label="title" type="text" />
    </Container>
  );
}
