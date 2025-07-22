export default function AddFaculty() {
  return (
    <>
      <h2>Add faculty member</h2>
      <form>
        <label>
          Name
          <input type="text" name="name" required />
        </label>
        <label>
          Email
          <input type="text" />
        </label>
      </form>
    </>
  );
}
