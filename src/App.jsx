import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import BlogList from "./components/BlogList";
import BlogPost from "./components/BlogPost";
import NotFound from "./pages/Notfound";

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
          <Route path="/blogs" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contacts" element={<Contact />} />
          <Route path="*" element={<NotFound />} /> {/* 404 route */}
        </Routes>
      </main>
    </div>
  );
}
