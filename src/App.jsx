import { Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./Home";
import Departments from "./departments/Departments";
import DepartmentPage from "./departments/DepartmentPage";
import Faculty from "./faculty/Faculty";
import FacultyDetails from "./faculty/FacultyDetails";

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
      </Routes>
    </>
  );
}

export default App;
