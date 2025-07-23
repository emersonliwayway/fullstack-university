import useMutation from "../api/useMutation";
import { useParams } from "react-router";
import { useNavigate } from "react-router";

export default function DeleteFaculty({ faculty }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    mutate: deleteFaculty,
    loading,
    error,
  } = useMutation("DELETE", `/faculty/${faculty.id}`, ["faculty"]);

  const onDelete = () => {
    deleteFaculty({ id });
    navigate("/faculty");
  };

  return (
    <>
      <button onClick={onDelete}>Delete</button>
    </>
  );
}
