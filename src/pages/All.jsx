import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import NotFound from "../components/NotFound";
import Loading from "../components/Loading";
import { useAllPost } from "../contexts/AllPostsProvider";
import "../styles/All.css";

export default function All() {
  const [sectionTitle, setSectionTitle] = useState("");
  const [sectionPosts, setSectionPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { sectionUrl } = useParams();
  const allPosts = useAllPost();

  useEffect(() => {
      const postData = allPosts.find(
        (group) => group.sectionUrl === sectionUrl
      );
      if (postData) {
        setSectionTitle(postData.sectionTitle);
        setSectionPosts(postData.sectionPosts);
        setIsLoading(false);
      }
  }, [sectionUrl, allPosts]);

  if (isLoading) {
    return <Loading />;
  }

  if (!sectionTitle || !sectionPosts.length) {
    return <NotFound />;
  }

  return (
    <>
      <Navbar />
      <div className="all">
        <div className="a-top">
          <div className="a-title">
            <h2>{sectionTitle}</h2>
          </div>
        </div>
        <div className="a-content">
          {sectionPosts.map((post, index) => (
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
