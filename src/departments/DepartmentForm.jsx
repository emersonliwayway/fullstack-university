import useMutation from "../api/useMutation";
export default function DepartmentForm() {
  const {
    mutate: createDepartment,
    loading,
    error,
  } = useMutation("POST", "/departments", ["departments"]);

  const handleSubmit = (FormData) => {
    if (loading || error) {
      if (error) console.log(error);
      // Ensure there's no spam
      return;
    }

    const name = FormData.get("name");
    const description = FormData.get("description");
    const contact_info = FormData.get("contact");
    const banner_image =
      FormData.get("banner_image") ||
      "https://randomwordgenerator.com/img/picture-generator/54e6d1474c5bab14f1dc8460962e33791c3ad6e04e507749772f78d69e48cd_640.jpg";

    createDepartment({ name, description, banner_image, contact_info });
  };

  return (
    <>
      <h2 id="formTitle">Add new department</h2>
      <div id="departmentFormContainer">
      <form id="departmentForm" action={handleSubmit}>
        <label>
          Name
          <input type="text" name="name" required />
        </label>
        <label>
          Description
          <textarea name="description" id="description"></textarea>
        </label>
        <label>
          Contact
          <textarea name="contact" id="contact"></textarea>
        </label>
        <button type="submit">Add department</button>
      </form>
      </div>
    </>
  );
}
