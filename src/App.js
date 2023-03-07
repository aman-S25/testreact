import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Contact from "./compo/Contact";
import Schedule from "./compo/Schedule";
import Home from "./compo/Home";
import Participants from "./compo/Participants";
import Register from "./compo/Register";
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home/>} exact />
        <Route path="/Register" element={<Register/>} exact />
        <Route path="/Participants" element={<Participants/>} exact />
        <Route path="/Schedule" element={<Schedule/>} exact />
        <Route path="/Contact" element={<Contact/>} exact />
      </Routes>
    </HashRouter>
  );
}

export default App;
