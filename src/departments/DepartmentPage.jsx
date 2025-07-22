import { useParams, useNavigate } from "react-router";
import useQuery from "../api/useQuery";

export default function DepartmentPage() {
  const { id } = useParams();

  const {
    data: department,
    loading,
    error,
  } = useQuery(`/departments/${id}`, "department");

  if (loading || !department) return <p>Loading...</p>;
  if (error) return <p>Sorry! {error}</p>;

  return (
    <>
      <h1>Department Details</h1>
      {department && (
        <div>
          <h2>{department.name}</h2>
          <p>{department.description}</p>
          <img src={department.banner_image} alt={department.name} />
          <p>{department.contact_info}</p>
        </div>
      )}
    </>
  );
}
