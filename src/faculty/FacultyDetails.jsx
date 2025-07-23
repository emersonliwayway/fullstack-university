import { useNavigate, useParams } from "react-router";
import useQuery from "../api/useQuery";
import { useAuth } from "../auth/AuthContext";
import { DepartmentName } from "./Faculty";

export default function FacultyDetails() {
  const { id } = useParams();

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
      {faculty &&
        faculty.map((e) => (
          <div key={e.id}>
            <div id="professorInfo2">
            <div id="professorInfo">
            <h2>{e.name}</h2>
            <DepartmentName id={e.department_id} />
            <p>{e.bio}</p>
            <p>{e.email}</p>
            </div>
            <img className="pImg" src={e.profile_pic} alt={e.name} />
          </div>
          </div>
        ))}
        </div>
    </>
  );
}
