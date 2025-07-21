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
      navigate("/books");
    } catch (e) {
      setError(e.message);
    }
  };

  //   edit this for specific project (originally from book buddies)
  // ***note classnames
  return (
    <>
      <h1>Login to your account</h1>
      <form action={tryLogin} className="loginForm">
        <label className="email">
          Email
          <input type="text" name="email" required />
        </label>
        <label className="password">
          Password
          <input type="password" name="password" required />
        </label>
        <button className="loginButton">Login</button>
        {error && <output>{error}</output>}
        <a onClick={() => navigate("/register")}>
          Need an account? Register here.
        </a>
      </form>
    </>
  );
}
