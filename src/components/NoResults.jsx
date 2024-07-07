import Navbar from "./Navbar";
import Footer from "./Footer";
import { useLocation } from 'react-router-dom';
import "../styles/All.css";
import "../styles/NoResults.css";

export default function NoResults() {
  const location = useLocation();
  const searchQuery = location.state?.searchQuery;

  return (
    <>
      <Navbar />
      <div className="all" id="no-results">
        <div className="a-top">
          <div className="a-title">
            <h2>Search Result for &quot;<b>{searchQuery}</b>&quot;</h2>
          </div>
        </div>
        <div className="a-content">
        <h3>No Results Found</h3>
        <p>We couldn&quot;t find a match for &quot;<b>{searchQuery}</b>&quot;. Please double-check the spelling or try another search.</p>
        </div>
      </div>
      <Footer />
    </>
  );
}
