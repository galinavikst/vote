import { useEffect } from "react";
import { useLocation } from "react-router-dom";

//prevent scroll to bottom after navigation to other pages
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
