import { useNavigate, useParams } from "react-router";
import useQuery from "../api/useQuery";
import faculty from "../dummy data/faculty";
import departments from "../dummy data/departments";
import { Link } from "react-router";

export default function FacultyDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const person = faculty[id - 1];
  const dep = faculty[id - 1].department;
  const department = departments[dep - 1];
  console.log(department);

  // const {
  //   data: person,
  //   loading,
  //   error,
  // } = useQuery(`/faculty/${id}`, "faculty");

  return (
    <>
      <h1>Faculty Details</h1>
      {person && (
        <div key={person.id}>
          <h2>
            {person.fname} {person.lname}
          </h2>
          <p>{person.bio}</p>
          <p>{person.phone}</p>
          <p>{person.email}</p>
          {department && (
            <Link to={`/departments/${department.id}`}>{department.name}</Link>
          )}
        </div>
      )}
    </>
  );
}
