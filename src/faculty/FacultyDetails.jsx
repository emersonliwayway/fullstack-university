import { useParams } from "react-router";

export default function FacultyDetails() {
  return (
    <>
      <div id="professorContainer">
        <div id="professorInfo">
          <div id="professorName">Test</div>
          <a href="http://">Department link</a>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quas quos esse vero, fugit consequatur minima sit repellendus, quam ab nihil a quibusdam debitis explicabo voluptatibus ullam dolores? Reprehenderit, debitis?</p>
        </div>
          <img className="pImg" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="" />
      </div>
    </>
  );
}
