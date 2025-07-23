import useMutation from "../api/useMutation";
import { useParams } from "react-router";
import { useNavigate } from "react-router";

export default function DeleteDepartment({ department }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    mutate: deleteDepartment,
    loading,
    error,
  } = useMutation("DELETE", `/departments/${department.id}`, ["departments"]);

  const onDelete = () => {
    deleteDepartment({ id });
    navigate("/departments");
  };

  return (
    <>
      <button onClick={onDelete}>Delete</button>
    </>
  );
}
