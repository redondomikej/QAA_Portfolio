import { HashRouter as Router, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Tools from "./pages/Tools";
import MyRole from "./pages/MyRole";
import Contacts from "./pages/Contacts";

function AnimatedRoutes() {
  const location = useLocation();
  const navigate = useNavigate();
  const [direction, setDirection] = useState(1); // 1 = left, -1 = right

  const pages = ["/", "/about", "/projects", "/tools", "/my-role", "/contacts"];
  const currentIndex = pages.indexOf(location.pathname);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      if (currentIndex < pages.length - 1) {
        setDirection(1); // Moving left
        navigate(pages[currentIndex + 1]);
      }
    },
    onSwipedRight: () => {
      if (currentIndex > 0) {
        setDirection(-1); // Moving right
        navigate(pages[currentIndex - 1]);
      }
    },
    trackMouse: true, // Enable swipe with mouse
  });

  return (
    <AnimatePresence custom={direction}>
      <motion.div
        {...swipeHandlers}
        key={location.pathname}
        initial={{ x: direction * 100 + "%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: direction * -100 + "%", opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="flex-1"
      >
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
           <Route path="/tools" element={<Tools />} />
          <Route path="/my-role" element={<MyRole />} />
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
