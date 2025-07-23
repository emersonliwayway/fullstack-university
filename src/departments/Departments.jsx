import useQuery from "../api/useQuery";
import { useNavigate } from "react-router";
import DepartmentForm from "./DepartmentForm";
import { useAuth } from "../auth/AuthContext";

export default function Departments() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const {
    data: departments,
    loading,
    error,
  } = useQuery("/departments", "departments");
  if (loading || !departments) return <p>Loading...</p>;
  if (error) return <p>Sorry! {error}</p>;

  return (
    <>
      <h1 id="departmentTitle">Departments</h1>
      {user && <DepartmentForm />}
      <div id="departmentContainer">
      {departments.map((e) => (
        <div className="departmentBox" key={e.id} onClick={() => navigate(`/departments/${e.id}`)}>
          <h2>{e.name}</h2>
          <img className="dImg" src={e.banner_image} alt={e.name} />
        </div>
      ))}
      </div>
    </>
  );
}
