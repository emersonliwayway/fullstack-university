import { useNavigate, useParams } from "react-router";
import useQuery from "../api/useQuery";
import { useAuth } from "../auth/AuthContext";
import { DepartmentName } from "./Faculty";
import DeleteFaculty from "./DeleteFaculty";
import EditFaculty from "./EditFaculty";

export default function FacultyDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { token } = useAuth();

  const {
    data: faculty,
    loading,
    error,
  } = useQuery(`/faculty/${id}`, "faculty");
  if (loading || !faculty) return <p>Loading...</p>;
  if (error) return <p>Sorry! {error}</p>;

  return (
    <>
      <h1 id="facultyDetailsTitle">Faculty Details</h1>
      <div id="professorContainer">
        {faculty && (
          <div>
            <h2>{faculty.name}</h2>
            <DepartmentName id={faculty.department_id} />
            <p>{faculty.bio}</p>
            <p>{faculty.email}</p>
            <img src={faculty.profile_pic} alt={faculty.name} />
            {token && <DeleteFaculty faculty={faculty} />}
            {token && <EditFaculty />}
          </div>
        )}
      </div>
      <button onClick={() => navigate("/faculty")}>Back</button>
    </>
  );
}
