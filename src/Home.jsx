import { useAuth } from "./auth/AuthContext";

export default function Home() {
  const { token } = useAuth();
  console.log(token);

  return (
    <>
      <h1 id="homeTitle">Fullstack University</h1>
      <div id="welcome">Welcome to FullStack University</div>

      <div id="homeContainer">
        <div id="homeInfo">
          <div id="nowAccepting">Now Accepting New Students!</div>
          <img
            id="homeImg"
            src="https://cdn.sanity.io/images/gyc8zs33/production/1c5bf359f10eef47804cc19cb246d685cd35217d-800x520.png?rect=0,50,800,420&w=1200&h=630&auto=format"
            alt=""
          />
        </div>
      </div>

      <footer id="footer1">
        This project was collaboratively developed by a dedicated <br /> group
        of innovators—Kristen George, Nathan Harris, <br /> Jamey Jones, Emerson
        Recto, br and <br /> Ethan Toupe—whose combined efforts <br /> shaped
        both its vision and execution
      </footer>

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
