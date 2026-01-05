import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

interface PageTransitionProps {
  children: React.ReactNode;
}

export const PageTransition = ({ children }: PageTransitionProps) => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);
  const [displayChildren, setDisplayChildren] = useState(children);

  useEffect(() => {
    // Scroll to top immediately
    window.scrollTo({ top: 0, behavior: "instant" });
    
    // Start fade out
    setIsVisible(false);
    
    // After fade out, update content and fade in
    const timeout = setTimeout(() => {
      setDisplayChildren(children);
      setIsVisible(true);
    }, 350); // Half of 0.7s for fade out

    return () => clearTimeout(timeout);
  }, [location.pathname]);

  // Update children when they change (for initial render)
  useEffect(() => {
    setDisplayChildren(children);
  }, [children]);

  return (
    <div
      className={`transition-opacity duration-[350ms] ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {displayChildren}
    </div>
  );
};
