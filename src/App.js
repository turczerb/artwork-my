import "./App.css";
import NavBar from "./components/NavBar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import UserForm from "./components/UserForm";
import { BrowserRouter as Router } from "react-router-dom";
import Signup from "./components/Signup";
import UserContext from "./components/UserContext";
import Porfile from "./components/Profile";
import Private from "./components/Private";
import Card from "./components/Card";
import ArtModal from "./components/ArtModal";
import { useState } from "react";

//lekezeljük a sikeres bejel
const handleSignupSuccess = () => {
  console.log("don");
};

const handleLoginSuccess = () => {
  console.log("don");
};
function App() {
  const [modalData, setModalData] = useState();

  return (
    <BrowserRouter>
      <UserContext>
        <NavBar className="nav" />
        <Login onSuccess={handleLoginSuccess} />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <div className="App">
          <Porfile />
          <Private />
        </div>
      </UserContext>
    </BrowserRouter>
  );
}

export default App;
