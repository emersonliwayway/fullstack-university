import useMutation from "../api/useMutation";

export default function DepartmentForm() {
  const {
    mutate: add,
    loading,
    error,
  } = useMutation("POST", "/departments", ["departments"]);

  const addDepartment = (FormData) => {
    const name = FormData.get("name");
    const description = FormData.get("description");
    const contact_info = FormData.get("contact");
    add({ name, description, banner_image, contact_info });
  };
  return (
    <>
      <h2>Add new department</h2>
      <form>
        <label>
          Name
          <input type="text" name="name" required />
        </label>
        <label>
          Description
          {/* <input type="text" name="description" required /> */}
          <textarea name="description" id="description"></textarea>
        </label>
        <label>
          Contact
          <input type="text" name="contact" required />
        </label>
      </form>
    </>
  );
}
