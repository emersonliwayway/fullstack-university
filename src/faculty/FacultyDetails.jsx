import { useNavigate, useParams } from "react-router";
import useQuery from "../api/useQuery";
import { useAuth } from "../auth/AuthContext";
import { DepartmentName } from "./Faculty";
import DeleteFaculty from "./DeleteFaculty";
import { useState } from "react";
import EditFaculty from "./EditFaculty";

export default function FacultyDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { token } = useAuth();
  const [editing, setEditing] = useState(false);

  const {
    data: faculty,
    loading,
    error,
  } = useQuery(`/faculty/${id}`, "faculty");

  if (loading || !faculty) return <p>Loading...</p>;
  if (error) return <p>Sorry! {error}</p>;

  const handleClick = () => {
    setEditing(prev => !prev);
  }

  return (
    <>
      <h1 id="facultyDetailsTitle">Faculty Details</h1>
      <div id="professorContainer">
        {faculty && (
          <div id="professorContainer2">
            <img
              className="pImg"
              src={faculty.profile_pic}
              alt={faculty.name}
            />
            <h2 id="pName">{faculty.name}</h2>
            {!editing && (
              <>
                {" "}
                <div id="professorInfo">
                  <DepartmentName id={faculty.department_id} />
                  <p>{faculty.bio}</p>
                  <p>{faculty.email}</p>

                  {token && <DeleteFaculty faculty={faculty} />}
                  <button onClick={handleClick}>Edit Faculty</button>
                </div>
              </>
            )}

            {editing && <EditFaculty faculty={faculty}></EditFaculty>}
          </div>
        )}
      </div>
      <button onClick={() => navigate("/faculty")}>Back</button>
    </>
  );
}
