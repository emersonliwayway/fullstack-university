import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

export default function Navbar() {
  const { token, logout } = useAuth();
  const navigate = useNavigate();

  function loggedOut() {
    logout();
    navigate("/");
  }
  return (
    <>
      <header>
        <Link to="/">Fullstack University</Link>

        <nav>
          <Link to="/departments">Departments</Link>
          <Link to="/faculty">Faculty</Link>
          {!token ? (
            <Link to="/login">Login</Link>
          ) : (
            <a onClick={() => loggedOut()}>Logout</a>
          )}
        </nav>
      </header>
    </>
  );
}
