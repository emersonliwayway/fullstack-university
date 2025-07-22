import { useParams, useNavigate } from "react-router";
import useQuery from "../api/useQuery";

export default function DepartmentPage() {
  const { id } = useParams();

  const {
    data: department,
    loading,
    error,
  } = useQuery(`/departments/${id}`, "department");

  if (loading || !department) return <p>Loading...</p>;
  if (error) return <p>Sorry! {error}</p>;

  return (
    <>
      <h1>Department Details</h1>
      {/* {department &&
        department.map((e) => (
          <div key={e.id}>
            <h2>{e.name}</h2>
          </div>
        ))} */}
    </>
  );
}

function DepartmentFaculty() {
  const { id } = useParams();
  const { data: faculty, loading, error } = useQuery("/faculty", "faculty");

  if (loading || !faculty) return <p>Loading...</p>;
  if (error) return <p>Sorry! {error}</p>;

  const list = faculty.filter((e) => {
    return e.department_id === id;
  });

  return (
    <>
      <p>Test</p>
    </>
  );
}
