import { HashRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { useSwipeable } from "react-swipeable";
import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import MyRole from "./pages/MyRole";
import Tools from "./pages/Tools";
import Contacts from "./pages/Contacts";

const pages = ["/", "/about", "/projects", "/my-role", "/tools", "/contacts"];

function SwipeWrapper({ children }) {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCurrentIndex(pages.indexOf(window.location.hash.replace("#", "")) || 0);
  }, []);

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (currentIndex < pages.length - 1) {
        navigate(pages[currentIndex + 1]);
        setCurrentIndex(currentIndex + 1);
      }
    },
    onSwipedRight: () => {
      if (currentIndex > 0) {
        navigate(pages[currentIndex - 1]);
        setCurrentIndex(currentIndex - 1);
      }
    },
    trackMouse: true, // Enables swipe support for both mobile and desktop
  });

  return <div {...handlers}>{children}</div>;
}

function App() {
  return (
    <Router>
      <SwipeWrapper>
        <div className="flex flex-col min-h-screen bg-gray-900 text-white">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/my-role" element={<MyRole />} />
              <Route path="/tools" element={<Tools />} />
              <Route path="/contacts" element={<Contacts />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </SwipeWrapper>
    </Router>
  );
}

export default App;
