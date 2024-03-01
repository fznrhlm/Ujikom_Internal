import "./App.css";
import ProjectsPage from "./components/ProjectsPage";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import HomePage from "./home/HomePage";
import ProjectPage from "./components/ProjectPage";
import { LoginPage } from "./components/LoginPage";
import About from "./components/About";

function App() {
  return (
    <BrowserRouter>
      <header className="sticky">    
        <NavLink to="/" className="button">
          <span className="icon-home"></span>
          Home
        </NavLink>
        <NavLink to="/projects" className="button rounded">
          Menu
        </NavLink>
        <NavLink to="/login" className="button rounded">
          Login
        </NavLink>
        <NavLink to="/about" className="button rounded">
          About
        </NavLink>
      </header>

      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/project/:id" element={<ProjectPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;