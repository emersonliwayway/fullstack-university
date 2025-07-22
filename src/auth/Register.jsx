import { useState } from "react";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";

/** A form that allows users to register for a new account */
export default function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [error, setError] = useState(null);

  const tryRegister = async (formData) => {
    const firstname = formData.get("firstname");
    const lastname = formData.get("lastname");
    const email = formData.get("email");
    const password = formData.get("password");
    try {
      if (firstname && lastname) {
        await register({ firstname, lastname, email, password });
      } else {
        await register({ email, password });
      }
      //   navigate to home page, edit for specific route
      //   navigate("/home");
    } catch (e) {
      setError(e.message);
    }
  };

  //   edit for specific project, originally from book buddies
  //   ***note classnames

  return (
    <>
    <div id="registerContainer">
      <h1 id="registerTitle">Register for an account</h1>
      <form action={tryRegister} className="registerForm">
        <label className="firstname">
          First name
          <input type="text" name="firstname" required />
        </label>
        <label className="lastname">
          Last name
          <input type="text" name="lastname" required />
        </label>
        <label className="email">
          Email
          <input type="text" name="email" required />
        </label>
        <label className="password">
          Password
          <input type="password" name="password" required />
        </label>
        <button className="registerButton">Register</button>
        {error && <output>{error}</output>}
        <a onClick={() => navigate("/login")}>
          Already have an account? Login here.
        </a>
      </form>
      </div>
    </>
  );
}
