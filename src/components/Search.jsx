import { useState } from "react";
import searchIcon from "../assets/icons/SearchDark.svg";
import { trackEvent } from "../analytics";
import { useAllPost } from "../contexts/AllPostsProvider";
import "../styles/Search.css";
import { useNavigate } from "react-router-dom";

const stopWords = new Set([
  "the",
  "of",
  "and",
  "a",
  "to",
  "in",
  "is",
  "you",
  "that",
  "it",
  "he",
  "was",
  "for",
  "on",
  "are",
  "as",
  "with",
  "his",
  "they",
  "I",
  "at",
  "be",
  "this",
  "have",
  "from",
  "or",
  "one",
  "had",
  "by",
  "word",
  "but",
  "not",
  "what",
  "all",
  "were",
  "we",
  "when",
  "your",
  "can",
  "said",
  "there",
  "use",
  "an",
  "each",
  "which",
  "she",
  "do",
  "how",
  "their",
  "if",
  "game",
  "games",
]);

const filterStopWords = (words) => {
  return words.filter((word) => !stopWords.has(word));
};

export default function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const allPost = useAllPost();
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();

    // Send search event to Google Analytics
    trackEvent("Search", "Submit", searchQuery);

    let isMatch = false;
    const searchWords = filterStopWords(searchQuery.toLowerCase().split(" "));

    const matchFound = allPost.some((group) => {
      // Check for match in post titles
      isMatch = group.sectionPosts.some((post) => {
        const postTitleWords = filterStopWords(
          post.title.toLowerCase().split(" ")
        );
        const isPostMatch = searchWords.some((word) =>
          postTitleWords.includes(word)
        );

        if (isPostMatch) {
          const titleUrl = post.title.toLowerCase().replace(/ /g, "-");
          setSearchQuery("");
          navigate(`/post/${titleUrl}`);
          return true;
        }
        return false;
      });

      // Check for match in section title if no match in posts
      if (!isMatch) {
        const sectionTitleWords = filterStopWords(
          group.sectionTitle.toLowerCase().split(" ")
        );
        const isSectionMatch = searchWords.some((word) =>
          sectionTitleWords.includes(word)
        );

        if (isSectionMatch) {
          setSearchQuery("");
          navigate(`/all/${group.sectionUrl}`);
          isMatch = true;
        }
      }

      return isMatch;
    });

    if (!matchFound) {
      setSearchQuery("");
      navigate("/no-results", { state: { searchQuery } });
    }
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
