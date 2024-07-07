import { Link } from "react-router-dom";
import Card from "./Card";

import "../styles/Section.css";
import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";

function Section({ sectionTitle, sectionUrl, sectionPosts }) {
  const [scrollActiveLeft, setScrollActiveLeft] = useState(false);
  const [scrollActiveRight, setScrollActiveRight] = useState(false);
  const contentRef = useRef(null);

  const handleScroll = (direction) => {
    const content = contentRef.current;
    if (!content) return;

    const scrollAmount = 600;

    if (direction === "right") {
      content.scrollBy({
        left: scrollAmount,
      });
    } else if (direction === "left") {
      content.scrollBy({
        left: -scrollAmount,
      });
    }
  };

  useEffect(() => {
    const content = contentRef.current;
    if (!content) return;

    const isLeftActive = content.scrollLeft > 0;
    setScrollActiveLeft(isLeftActive);

    const scrollWidth = content.scrollWidth - content.clientWidth;
    const isRightActive = content.scrollLeft < scrollWidth;
    setScrollActiveRight(isRightActive);

    // Event listener for scroll updates
    const scrollHandler = () => {
      const isLeftActive = content.scrollLeft > 0;
      setScrollActiveLeft(isLeftActive);

      const scrollWidth = content.scrollWidth - content.clientWidth;
      const isRightActive = content.scrollLeft < scrollWidth;
      setScrollActiveRight(isRightActive);
    };

    content.addEventListener("scroll", scrollHandler);

    // Cleanup
    return () => {
      content.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <div className="section">
      <div className="top">
        <div className="title">
          <h2>{sectionTitle}</h2>
          <Link to={`/all/${sectionUrl}`}>see all</Link>
        </div>
        <div className="arrow">
          <button
            className={`left ${scrollActiveLeft ? "active" : ""}`}
            onClick={() => handleScroll("left")}
          ></button>
          <button
            className={`right ${scrollActiveRight ? "active" : ""}`}
            onClick={() => handleScroll("right")}
          ></button>
        </div>
      </div>
      <div className="content" ref={contentRef}>
        {sectionPosts.map((post, index) => (
          <div key={index} className="card">
            <Card
              image={post.image}
              title={post.title}
              score={post.score}
              category={post.category}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

Section.propTypes = {
  sectionTitle: PropTypes.string.isRequired,
  sectionUrl: PropTypes.string.isRequired,
  sectionPosts: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      score: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Section;