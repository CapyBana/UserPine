import { Route, Routes, Link } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import PrinterPage from "./components/PrinterPage";
import StudentPage from "./components/StudentPages";
function App() {
  return (
    <div className="app">
      <div className="header">
        <Link to="/">
          <h1>Dashboard</h1>
        </Link>
        <Link to="/Printer">
          <h1>Printer Page</h1>
        </Link>
        <Link to="/StudentPage">
          <h1>StudentPage</h1>
        </Link>
      </div>
      <h3>Content</h3>
      <div className="content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Printer" element={<PrinterPage />} />
          <Route path="/StudentPage" element={<StudentPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
