import useMutation from "../api/useMutation";
import useQuery from "../api/useQuery";

export default function FacultyForm() {
  const {
    mutate: createFaculty,
    loading,
    error,
  } = useMutation("POST", "/faculty", ["faculty"]);

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

    const name = FormData.get("name");
    const email = FormData.get("email");
    const bio = FormData.get("bio");
    const department_id = +FormData.get("department");
    const profile_pic =
      FormData.get("profile_pic") ||
      "https://randomwordgenerator.com/img/picture-generator/54e6d1474c5bab14f1dc8460962e33791c3ad6e04e507749772f78d69e48cd_640.jpg";

    createFaculty({ name, email, bio, profile_pic, department_id });
  };
  return (
    <>
      <h2 id="formTitleFaculty">Add faculty member</h2>
      <div id="facultyFormContainer">
      <form id="facultyForm" action={handleSubmit}>
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
        <button type="submit">Add faculty member</button>
      </form>
      </div>
    </>
  );
}
