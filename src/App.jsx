import { Route, Routes } from "react-router-dom";
import "./index.css";
import "./auth.css";
import Home from "./Home";
import Departments from "./departments/Departments";
import DepartmentPage from "./departments/DepartmentPage";
import Faculty from "./faculty/Faculty";
import FacultyDetails from "./faculty/FacultyDetails";
import Login from "./auth/Login";
import Register from "./auth/Register";
import "./faculty.css"
import "./home.css"
import "./facultydetails.css"
import "./department.css"
import "./departmentpage.css"
import "./departmentform.css"
import "./facultyform.css"

function App() {
  // routes here
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/departments/:id" element={<DepartmentPage />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/faculty/:id" element={<FacultyDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
