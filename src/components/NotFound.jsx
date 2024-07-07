import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/NotFound.css";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <div className="not-found">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>Sorry, the page you are looking for does not exist.</p>
        <Link to="/">Go back to the homepage</Link>
      </div>
      <Footer />
    </>
  );
}
