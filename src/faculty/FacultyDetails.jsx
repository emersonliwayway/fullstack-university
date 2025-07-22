import { useNavigate, useParams } from "react-router";
import useQuery from "../api/useQuery";
import { useAuth } from "../auth/AuthContext";

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
      <h1>Faculty Details</h1>
      {faculty && <p>{faculty.name}</p>}
    </>
  );
}
