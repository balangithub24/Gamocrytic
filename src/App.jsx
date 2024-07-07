import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import All from "./pages/All";
import Post from "./pages/Post";
import About from "./pages/About";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./components/NotFound";
import NoResults from "./components/NoResults";
import Loading from "./components/Loading";

import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };

    // Listen for the window load event
    window.addEventListener("load", handleLoad);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/all/:sectionUrl" element={<All />} />
        <Route path="/post/:titleUrl" element={<Post />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/no-results" element={<NoResults />} />
        <Route path="*" element={<NotFound />} />{" "}
      </Routes>
    </>
  );
}

export default App;
