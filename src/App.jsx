import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  // routes here
  return (
    <>
      <h1>Fullstack University</h1>
      <Routes>
        <Route index element="" />
        <Route path="/departments" element="" />
      </Routes>
    </>
  );
}

export default App;
