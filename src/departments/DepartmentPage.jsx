import { useParams } from "react-router";
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
      <h1>{department.name} Details</h1>
      <div className="departmentDetails">
        <p>{department.description}</p>
        <DepartmentFaculty/>
      </div>
    </>
  );
}

function DepartmentFaculty() {
  const { id } = useParams();
  const { data: faculty, loading, error } = useQuery(`/departments/${id}/faculty`, "faculty");

  if (loading || !faculty) return <p>Loading...</p>;
  if (error) return <p>Sorry! {error}</p>;

  return (
    <div className="departmentFaculty">
      {faculty.map(employee => {
        return <div className="departmentEmployee" key={employee.id}>
          {employee.name}
        </div>
      })}
    </div>
  );
}
