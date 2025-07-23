import { useParams } from "react-router";
import useMutation from "../api/useMutation";
import useQuery from "../api/useQuery";

export default function EditFaculty() {
  const { id } = useParams();
  const {
    mutate: updateFaculty,
    loading,
    error,
  } = useMutation("UPDATE", `/faculty`, ["faculty"]);

  const {
    data: departments,
    loading: isLoading,
    error: hasError,
  } = useQuery("/departments", "departments");

  if (isLoading || !departments) return <p>Loading...</p>;
  if (hasError) return <p>Sorry! {error}</p>;

  const handleSubmit = (FormData) => {
    if (loading || error) {
      if (error) console.log(error);
      // Ensure there's no spam
      return;
    }
    const fields = FormData.getAll();

    updateFaculty({ id, fields });
  };

  return (
    <>
      <h2>Edit faculty details</h2>
      <form action={handleSubmit}>
        <label>
          Name
          <input type="text" name="name" />
        </label>
        <label>
          Email
          <input type="text" name="email" />
        </label>
        <label>
          Biography
          <textarea name="bio" id="bio"></textarea>
        </label>
        <label>
          Department
          <select name="department" id="department">
            {departments &&
              departments.map((e) => (
                <option key={e.id} value={e.id}>
                  {e.name}
                </option>
              ))}
          </select>
        </label>
        <button type="submit">Edit faculty member</button>
      </form>
    </>
  );
}
