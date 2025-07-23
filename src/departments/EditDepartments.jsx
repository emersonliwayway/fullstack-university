import { useParams } from "react-router";
import useMutation from "../api/useMutation";
import useQuery from "../api/useQuery";

export default function EditDepartments() {
  const { id } = useParams();
  const {
    mutate: updateFaculty,
    loading,
    error,
  } = useMutation("UPDATE", `/departments`, ["department"]);
}
