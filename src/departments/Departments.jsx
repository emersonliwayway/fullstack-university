import useQuery from "../api/useQuery";
import { useNavigate } from "react-router";
import DepartmentForm from "./DepartmentForm";
import { useAuth } from "../auth/AuthContext";

export default function Departments() {
  const navigate = useNavigate();
  const { user, token } = useAuth();

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
      {user && token && <DepartmentForm />}
      <div id="departmentContainer">
        {departments.map((e) => (
          <div
            className="departmentBox"
            key={e.id}
            onClick={() => navigate(`/departments/${e.id}`)}
          >
            <div id="departmentInfo">
              <img className="dImg" src={e.banner_image} alt={e.name} />
              <div id="departmentInfo2">
                <h2>{e.name}</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam, facere laudantium! Atque necessitatibus reiciendis
                  et inventore deleniti debitis, natus voluptas aperiam
                  consequuntur provident eos illo rerum sint placeat adipisci
                  nihil.
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
