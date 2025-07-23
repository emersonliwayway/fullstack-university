import useMutation from "../api/useMutation";
import useQuery from "../api/useQuery";

export default function EditFaculty({ faculty }) {
  const {
    mutate: updateFaculty,
    loading,
    error,
  } = useMutation("PUT", `/faculty/${faculty.id}`, ["faculty"]);

  const {
    data: departments,
    loading: isLoading,
    error: hasError,
  } = useQuery("/departments", "departments");

  if (isLoading || !departments) return <p>Loading...</p>;
  if (hasError) return <p>Sorry! {error}</p>;

  const handleSubmit = (formData) => {
    if (loading || error) {
      if (error) console.log(error);
      // Ensure there's no spam
      return;
    }
    const name = formData.get("name");
    const email = formData.get("email");
    const bio = formData.get("bio");
    const department_id = formData.get("department_id");

    updateFaculty({ id: faculty.id, name, email, bio, department_id });
  };

  return (
    <>
      <h2>Edit faculty details</h2>
      <form action={handleSubmit}>
        {error && <p className="errorText">Error: {error}</p>}

        <label>
          Name
          <input type="text" name="name" defaultValue={faculty.name} />
        </label>
        <label>
          Email
          <input type="text" name="email" defaultValue={faculty.email} />
        </label>
        <label>
          Biography
          <textarea name="bio" id="bio" defaultValue={faculty.bio}></textarea>
        </label>
        <label>
          Department
          <select name="department_id" defaultValue={faculty.department_id}>
            {departments.map((department) => (
              <option key={department.id} value={department.id}>
                {department.name}
              </option>
            ))}
          </select>
        </label>
        <button type="submit">Edit faculty member</button>
      </form>
    </>
  );
}
