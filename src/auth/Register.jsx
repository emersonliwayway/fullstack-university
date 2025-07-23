import { useState } from "react";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";

/** A form that allows users to register for a new account */
export default function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [error, setError] = useState(null);

  const tryRegister = async (formData) => {
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");
    const is_admin = true;
    try {
      await register({ username, email, password, is_admin });
      navigate("/");
    } catch (e) {
      setError(e.message);
    }
  };

  //   edit for specific project, originally from book buddies
  //   ***note classnames

  return (
    <>
      <h1 id="loginTitle">Register for an account</h1>
      <div id="formContainer">
      <form action={tryRegister} className="loginForm">
        <div id="emailPassword">
        <label className="username">
          Username
          <input type="text" name="username" required />
        </label>
        <label className="email">
          Email
          <input type="text" name="email" required />
        </label>
        <label className="password">
          Password
          <input type="password" name="password" required />
        </label>
        </div>
        <button className="registerButton">Register</button>
        {error && <output>{error}</output>}
        <a id="registerSentence" onClick={() => navigate("/login")}>
          Already have an account? Login here.
        </a>
      </form>
      </div>
    </>
  );
}
