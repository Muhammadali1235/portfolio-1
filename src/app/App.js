import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, useLocation, } from "react-router-dom";
import withRouter from "../hooks/withRouter";
import Headermain from "../header";
import AnimatedCursor from "../hooks/AnimatedCursor";
import Home from "../pages/home"
import Sidebar from "../components/socialicons/index"
import { Portfolio } from "../pages/portfolio/index";
import "./App.css";
import { About } from "../pages/about/index";

function _ScrollToTop(props) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return props.children;
}
const ScrollToTop = withRouter(_ScrollToTop);

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Sidebar />
      <Headermain />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<AnimatedCursor />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}
