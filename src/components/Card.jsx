import "../styles/Card.css";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

export default function Card({ image, title, score, category }) {
  const navigate = useNavigate();

  let scoreColor;
  if (score > 75 && score <= 100) {
    scoreColor = "#01ce7b"; // Green color for scores above 75
  } else if (score > 50) {
    scoreColor = "#f0ad4e"; // Orange color for scores above 50
  } else {
    scoreColor = "#f44336"; // Red color for scores 50 and below
  }

  const handleClick = () => {
    const urlTitle = title.toLowerCase().replace(/ /g, "-");
    navigate(`/post/${urlTitle}`, { state: { image, title, score, category } });
  };

  return (
    <div className="card" onClick={handleClick}>
      <div className="poster">
        <img src={image} alt={title} />
      </div>
      <div className="g-title">
        <h3>{title}</h3>
      </div>
      <div className="caption">
        <div className="score" style={{ backgroundColor: scoreColor }}>
          <p>{score}</p>
        </div>
        <div className="category">
          <p>{category}</p>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
};
