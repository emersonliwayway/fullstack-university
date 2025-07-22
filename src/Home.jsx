import { useAuth } from "./auth/AuthContext";

export default function Home() {
  const { token } = useAuth();
  console.log(token);

  return (
    <>
      <h1>Fullstack University</h1>
      <h2>About</h2>
      <p>
        This is a description of our project. Developed by Kristen George,
        Nathan Harris, Jamey Jones, Emerson Recto, and Ethan Toupe.
      </p>

      {/* {token ? (
        <p>Logged in</p>
      ) : (
        <>
          <p>Logged out</p>
        </>
      )} */}
    </>
  );
}
