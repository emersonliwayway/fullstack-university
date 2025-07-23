import useQuery from "../api/useQuery";
import { Link } from "react-router";
import { useAuth } from "../auth/AuthContext";
import { useNavigate } from "react-router";
import FacultyForm from "./FacultyForm";

export default function Faculty() {
  const navigate = useNavigate();
  const { user, token } = useAuth();
  const { data: faculty, loading, error } = useQuery("/faculty", "faculty");
  if (loading || !faculty) return <p>Loading...</p>;
  if (error) return <p>Sorry! {error}</p>;

  return (
    <>
      <h1 id="facultyTitle">Faculty</h1>
      {user && token && <FacultyForm />}

      <div id="facultyContainer2">
        <ul id="facultyContainer">
          {faculty.map((e) => (
            <li className="box" key={e.id}>
              <div onClick={() => navigate(`/faculty/${e.id}`)}>
                <h3 className="fTitle">{e.name}</h3>
                <DepartmentName id={e.department_id} />
                <img src={e.profile_pic} alt={e.name} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export function DepartmentName({ id }) {
  const {
    data: departments,
    loading,
    error,
  } = useQuery("/departments", "department");
  if (loading || !departments) return <p>Loading...</p>;
  if (error) return <p>Sorry! {error}</p>;

  const department = departments.find((department) => department.id === id);

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
