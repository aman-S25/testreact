import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Contact from "./compo/Contact";
import Schedule from "./compo/Schedule";
import Home from "./compo/Home";
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home/>} exact />
        <Route path="/Schedule" element={<Schedule/>} exact />
        {/* <Route path="/IRD2022" element={<Schedule/>} exact /> */}
        <Route path="/Contact" element={<Contact/>} exact />
      </Routes>
    </HashRouter>
  );
}

export default App;
