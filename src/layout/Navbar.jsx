import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <header>
        <Link to="/">Fullstack University</Link>

        <nav>
          <Link to="/departments">Departments</Link>
          <Link to="/faculty">Faculty</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </nav>
      </header>
    </>
  );
}
