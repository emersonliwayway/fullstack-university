import useMutation from "../api/useMutation";
import { useParams } from "react-router";

export default function FacultyForm() {
  const { id } = useParams();
  const {
    mutate: add,
    loading,
    error,
  } = useMutation("POST", "/faculty", ["faculty"]);

  const addFaculty = (formData) => {
    const name = formData.get("name");
    const email = formData.get("email");
    const bio = formData.get("bio");
    const department_id = id;
    add({ name, email, bio, department_id });
  };

  return (
    <>
      <h2>Add faculty member</h2>
      <form action={addFaculty}>
        <label>
          Name
          <input type="text" name="name" required />
        </label>
        <label>
          Email
          <input type="text" name="email" required />
        </label>
        <label>
          Biography
          <input type="text" name="bio" required />
        </label>
      </form>
    </>
  );
}
