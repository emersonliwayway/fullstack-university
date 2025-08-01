import { useParams } from "react-router";
import useQuery from "../api/useQuery";
import DeleteDepartment from "./DeleteDepartment";
import { useAuth } from "../auth/AuthContext";
import { useNavigate } from "react-router";
import { Link } from "react-router";

export default function DepartmentPage() {
  const { id } = useParams();
  const { user, token } = useAuth();
  const navigate = useNavigate();

  const {
    data: department,
    loading,
    error,
  } = useQuery(`/departments/${id}`, "department");

  if (loading || !department) return <p>Loading...</p>;
  if (error) return <p>Sorry! {error}</p>;

  return (
    <>
      <h1 id="dDetailsTitle">{department.name} Details</h1>
      <div id="departmentDetailsContainer">
        <div className="departmentDetails">
          <p>{department.description}</p>
          <DepartmentFaculty id={id} />
          {user && token && <DeleteDepartment department={department} />}
          <button onClick={() => navigate("/departments")}>Back</button>
        </div>
      </div>
    </>
  );
}

function DepartmentFaculty({ id }) {
  const {
    data: faculty,
    loading,
    error,
  } = useQuery(`/departments/${id}/faculty`, "faculty");

  if (loading || !faculty) return <p>Loading...</p>;
  if (error) return <p>Sorry! {error}</p>;

  return (
    <>
      {faculty &&
        faculty.map((e) => (
          <div className="departmentEmployee" key={e.id}>
            <Link to={`/faculty/${e.id}`}>{e.name}</Link>
          </div>
        ))}
    </>
  );
}
