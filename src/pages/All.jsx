import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import Card from "../components/Card";
import "../styles/All.css";

export default function All() {
  const location = useLocation();
  const { type, posts } = location.state || {};

  if (!type || !posts) {
    return <div className="post">No section data available</div>;
  }

  return (
    <>
      <Navbar />
      <div className="all">
        <div className="a-top">
          <div className="a-title">
            <h2>{type}</h2>
          </div>
        </div>
        <div className="a-content">
          {posts.map((post, index) => (
            <div key={index} className="a-card">
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
      <Footer />
    </>
  );
}
