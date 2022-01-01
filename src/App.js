import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import CreateDashboard from "./Pages/CreateDashboard";
import Home from "./Pages/Home";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="create" element={<CreateDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
