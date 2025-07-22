import { useParams, useNavigate } from "react-router";
import departments from "../dummy data/departments";
import faculty from "../dummy data/faculty";

export default function DepartmentPage() {
  const { id } = useParams();
  const department = departments[id - 1];
  console.log(department);
  return <>{department && <h1>{department.name}</h1>}</>;
}
