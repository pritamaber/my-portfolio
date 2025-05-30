import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      {/* Main content container */}
      <main
        style={{
          marginLeft: "220px", // width of sidebar
          padding: "2rem 3rem",
          flexGrow: 1,
          minHeight: "100vh",
          backgroundColor: "white",
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contacts" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}
