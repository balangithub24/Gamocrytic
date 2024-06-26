import { useState} from "react";
import searchIcon from "../assets/icons/SearchDark.svg";
import ReactGA from "react-ga4"
import "../styles/Search.css";


export default function Search() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();

      // Send search event to Google Analytics
      ReactGA.event({
        category: 'Search',
        action: 'Submit',
        label: searchQuery
      });
      
    setSearchQuery("");
  };

  return (
      <form className="search-box" onSubmit={handleSearchSubmit}>
        <input
          type="text"
          name="search"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search..."
        />
        <button type="submit">
          <img src={searchIcon} alt="search icon" />
        </button>
      </form>
  );
}