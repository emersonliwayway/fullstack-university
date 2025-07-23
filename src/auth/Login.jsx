import { useState } from "react";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";

/** A form that allows users to log into an existing account. */
export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [error, setError] = useState(null);

  const tryLogin = async (formData) => {
    const email = formData.get("email");
    const password = formData.get("password");
    try {
      await login({ email, password });
      navigate("/");
    } catch (e) {
      setError(e.message);
    }
  };

  // ***note classnames
  return (
    <>
      <h1 id="loginTitle">Login to your account</h1>
      <div id="formContainer">
  
      <form action={tryLogin} className="loginForm">
        <div id="emailPassword">
        <label className="email">
          Email
          <input type="text" name="email" required />
        </label>
        <label className="password">
          Password
          <input type="password" name="password" required />
        </label>
        </div>
        <button className="loginButton">Login</button>
        {error && <output>{error}</output>}
        <a id="registerSentence" onClick={() => navigate("/register")}>
          Need an account? Register here.
        </a>
      </form>
      </div>
    </>
  );
}
