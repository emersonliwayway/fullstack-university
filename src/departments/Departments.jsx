export default function Departments() {
  return (
    <>
      <h1>Departments</h1>
      <p>List of departments</p>

      <div id="departmentContainer">


        <div className="departmentBox">
          <div className="contentsContainer">
            <img className="dImg" src="https://www.vec.ca/wp-content/uploads/2019/03/English-Language-Level-System.jpg" alt="" />
              <div className="tpbContent">
                <div className="dTitle">English / Language 
                Arts:</div>

                <p className="dInfo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione exercitationem nobis debitis repellat id nemo voluptatibus recusandae? Veritatis at iure ullam dicta eligendi accusantium reiciendis recusandae? Velit mollitia repellendus aperiam.</p>

                <button className="dButton">More Info</button>
            </div>

          </div>
          
        </div>

        <div className="departmentBox">
          <div className="contentsContainer">

          <img className="dImg" src="https://www.templeton.org/wp-content/uploads/2023/08/Mathematics-Article-BANNER-1-scaled.jpg" alt="" />

            <div className="tpbContent">
              <div className="dTitle">Mathematics:</div>

              <p className="dInfo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eos perspiciatis fugit dolorum eaque. Amet quo sunt harum quas minus? Voluptas odit totam, ullam voluptatum labore corporis officia a laborum.</p>

              <button className="dButton">More Info</button>
            </div>

          </div>

        </div>

      </div>
    </>
  );
}
