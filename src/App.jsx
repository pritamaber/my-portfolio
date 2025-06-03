import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import DarkModeToggle from "./components/DarkModeToggle";
import BlogList from "./components/BlogList";
import BlogPost from "./components/BlogPost";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NotFound from "./pages/Notfound";

export default function App() {
  return (
    <div className="flex">
      <Sidebar />
      {/* <DarkModeToggle /> */}

      {/* Main content - dark mode aware */}
      <main
        className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300"
        style={{
          marginLeft: "220px",
          padding: "2rem 3rem",
          flexGrow: 1,
          minHeight: "100vh",
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blogs" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contacts" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
