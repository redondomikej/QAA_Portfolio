import { HashRouter as Router, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import MyRole from "./pages/MyRole";
import Tools from "./pages/Tools";
import Contacts from "./pages/Contacts";

function AnimatedRoutes() {
  const location = useLocation();
  const navigate = useNavigate();

  // Detect swipe gestures
  useEffect(() => {
    const handleSwipe = (event) => {
      if (event.deltaX < -100) {
        // Swipe Left (Next Page)
        if (location.pathname === "/") navigate("/about");
        else if (location.pathname === "/about") navigate("/projects");
        else if (location.pathname === "/projects") navigate("/my-role");
        else if (location.pathname === "/my-role") navigate("/tools");
        else if (location.pathname === "/tools") navigate("/contacts");
      } else if (event.deltaX > 100) {
        // Swipe Right (Previous Page)
        if (location.pathname === "/contacts") navigate("/tools");
        else if (location.pathname === "/tools") navigate("/my-role");
        else if (location.pathname === "/my-role") navigate("/projects");
        else if (location.pathname === "/projects") navigate("/about");
        else if (location.pathname === "/about") navigate("/");
      }
    };

    window.addEventListener("wheel", handleSwipe); // Add swipe event
    return () => window.removeEventListener("wheel", handleSwipe); // Cleanup event
  }, [location, navigate]);

  return (
    <AnimatePresence>
      <motion.div
        key={location.pathname}
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "-100%", opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="flex-1"
      >
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/my-role" element={<MyRole />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-900 text-white">
        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
