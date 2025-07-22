import faculty from "../dummy data/faculty";
import { useNavigate } from "react-router";
import { Link } from "react-router";

export default function Faculty() {
  console.log(faculty);
  const navigate = useNavigate();
  return (
    <>
      <h1>Faculty</h1>
      {faculty.map((e) => (
        <Link to={`/faculty/${e.id}`}>
          <li key={e.id}>
            {e.fname} {e.lname}
          </li>
        </Link>
      ))}
    </>
  );
}
