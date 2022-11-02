import FormData from "./Component/Form";
import "./App.css";
import MyData from "./Component/MyData.js/MyData";
import { Routes, Route } from "react-router-dom";
import Edit from "./Component/Edit/Edit";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<FormData />} />
        <Route path="/mydata" element={<MyData />} />
        <Route path="/edit" element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
