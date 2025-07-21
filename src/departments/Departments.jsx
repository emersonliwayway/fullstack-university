export default function Departments() {
  return (
    <>
      <h1>Departments</h1>

      <div id="departmentContainer">


        <div className="departmentBox">
          <img className="dImg" src="https://www.vec.ca/wp-content/uploads/2019/03/English-Language-Level-System.jpg" alt="" />
          <div className="dTitle">English / Language 
          Arts:</div>
          <p className="dInfo"></p>
        </div>

        <div className="departmentBox">
          <img className="dImg" src="https://www.templeton.org/wp-content/uploads/2023/08/Mathematics-Article-BANNER-1-scaled.jpg" alt="" />
          <div className="dTitle">Mathematics:</div>
          <p className="dInfo"></p>
        </div>

        <div className="departmentBox">
          <img className="dImg" src="https://platform.vox.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/15414153/shutterstock_172355312.0.0.1435352379.jpg?quality=90&strip=all&crop=0,18.409318647355,100,63.181362705289" alt="" />
          <div className="dTitle">Science:</div>
          <p className="dInfo"></p>
        </div>  

        <div className="departmentBox">
          <img className="dImg" src="https://blog.esc13.net/wp-content/uploads/2023/11/The-Link-between-literacy-and-Social-Studies.png" alt="" />
          <div className="dTitle">Social Studies:</div>
          <p className="dInfo"></p>
        </div>

      </div>
    </>
  );
}
