import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./layout/Home";
import Departments from "./departments/Departments";
import DepartmentPage from "./departments/DepartmentPage";
import Faculty from "./faculty/Faculty";
import FacultyDetails from "./faculty/FacultyDetails";

function App() {
  // routes here
  return (
    <>
      <h1>Fullstack University</h1>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/departments/:id" element={<DepartmentPage />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/faculty/:id" element={<FacultyDetails />} />
      </Routes>
    </>
  );
}

export default App;
