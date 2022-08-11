import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import studyImg from "./images/knowledge1.png";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddCard from "./pages/AddCard";
import Card from "./pages/Card";
import EditCard from "./pages/EditCard";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Quiz from "./pages/Quiz";
import Register from "./pages/Register";

const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: "white",
};

function App() {
  return (
    <div className="App">
      <nav>
        <Nav />
      </nav>

      <main className>
        <h1 className="main-h1">Unlock Your Potential</h1>
        <h2 className="main-h2">Knowledge is Power!</h2>
        <img className="main-image" src={studyImg} />
      </main>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AddCard" element={<AddCard />} />
          <Route path="/Card" element={<Card />} />
          <Route path="/Card/:id" element={<EditCard />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Card/Quiz" element={<Quiz />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
