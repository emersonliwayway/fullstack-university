import useQuery from "../api/useQuery";
import { useNavigate } from "react-router";
import DepartmentForm from "./DepartmentForm";

export default function Departments() {
  const navigate = useNavigate();
  const {
    data: departments,
    loading,
    error,
  } = useQuery("/departments", "departments");
  if (loading || !departments) return <p>Loading...</p>;
  if (error) return <p>Sorry! {error}</p>;

  return (
    <>
      <h1>Departments</h1>
      <DepartmentForm />

      {departments.map((e) => (
        <div key={e.id} onClick={() => navigate(`/departments/${e.id}`)}>
          <h2>{e.name}</h2>
          <img src={e.banner_image} alt={e.name} />
        </div>
      ))}
    </>
  );
}
