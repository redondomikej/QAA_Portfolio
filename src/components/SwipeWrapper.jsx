import { useSwipeable } from "react-swipeable";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const pages = ["/", "/about", "/projects", "/my-role", "/tools", "/contacts"];

function SwipeWrapper({ children }) {
  const navigate = useNavigate();
  const location = useLocation(); // Para malaman kung anong page na
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCurrentIndex(pages.indexOf(location.pathname) || 0);
  }, [location.pathname]); // Auto-update kapag nagpalit ng route

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (currentIndex < pages.length - 1) {
        navigate(pages[currentIndex + 1]);
      }
    },
    onSwipedRight: () => {
      if (currentIndex > 0) {
        navigate(pages[currentIndex - 1]);
      }
    },
    trackMouse: true, // Allows swipe via mouse
  });

  return (
    <motion.div
      {...handlers}
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}

export default SwipeWrapper;
