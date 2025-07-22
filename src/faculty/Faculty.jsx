import useQuery from "../api/useQuery";
import { Link } from "react-router";

export default function Faculty() {
  const { data: faculty, loading, error } = useQuery("/faculty", "faculty");
  if (loading || !faculty) return <p>Loading...</p>;
  if (error) return <p>Sorry! {error}</p>;

  return (
    <>
      <h1>Faculty</h1>
      <ul>
        {faculty.map((e) => (
          <li key={e.id}>
            <div>
              <h3>{e.name}</h3>
              <DepartmentName id={e.department_id} />
              <img src={e.profile_pic} alt={e.name} />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

function DepartmentName({ id }) {
  const {
    data: departments,
    loading,
    error,
  } = useQuery("/departments", "department");
  if (loading || !departments) return <p>Loading...</p>;
  if (error) return <p>Sorry! {error}</p>;

  const department = departments.find((department) => department.id === id);
  console.log(department);

  return (
    <>
      {department && (
        <Link to={`/departments/${department.id}`}>
          <h4>{department.name}</h4>
        </Link>
      )}
    </>
  );
}
