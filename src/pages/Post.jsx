import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NotFound from "../components/NotFound";
import Loading from "../components/Loading";
import { useAllPost } from "../contexts/AllPostsProvider";
import "../styles/Post.css";

export default function Post() {
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const { titleUrl } = useParams();
  console.log(titleUrl);
  const allPosts = useAllPost();

  useEffect(() => {
    const foundPost = allPosts
      .flatMap((group) => group.sectionPosts)
      .find(
        (p) =>
          p.title
            .toLowerCase()
            .replace(/[\s#!?,.:;'"()&@$%*+=[\]{}/\\|]/g, "-") === titleUrl
      );

    if (foundPost) {
      setPost(foundPost);
      setIsLoading(false);
    }
  }, [titleUrl, allPosts]);

  if (isLoading) {
    return <Loading />;
  }

  if (!post) {
    return <NotFound />;
  }

  return (
    <>
      <Navbar />
      <div className="post">
        <div className="post-header">
          <h2>{post.title}</h2>
        </div>
        <div className="post-image">
          <img src={post.image} alt={post.title} />
        </div>
        <div className="post-content">
          <div className="post-details">
            <p className="post-score">
              <span>Score:</span> {post.score}
            </p>
            <p className="post-category">
              <span>Category:</span> {post.category}
            </p>
          </div>
          <div className="post-review">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro,
              atque! Adipisci totam quod corporis tenetur magni minus laudantium
              quam iste repellendus obcaecati modi error quisquam vel nemo ex
              facere, rem maiores voluptates voluptate eum illo consequuntur.
              Veniam, quae id vel itaque quia recusandae minima velit, beatae
              iusto dolorem ab nemo nulla eligendi, quibusdam fugit quo cumque
              dolores dignissimos blanditiis fugiat unde voluptatum dicta
              aliquid fuga. Excepturi, minus ad voluptatibus ipsam veritatis
              esse perferendis itaque quos corporis reprehenderit recusandae et
              alias aliquid inventore accusantium necessitatibus sit laborum
              maxime expedita quam libero, eveniet repudiandae. Saepe atque
              aliquam minus, incidunt facilis nisi exercitationem, ad error,
              delectus ea excepturi accusamus ratione. Et porro quisquam
              cupiditate numquam iste eius quis officia modi magnam sapiente
              repellendus sunt, sit nam harum quos amet. Quasi ipsam tempore
              aliquid illo maxime totam eos quos et recusandae error in tempora
              ipsa distinctio, officiis non. Beatae fugit dignissimos eveniet
              voluptatem facere ex animi ad ipsum odit officia, est iure. Ea,
              obcaecati! Eius, ipsam. Fugit alias, dicta iste vero possimus
              aliquid velit eius nostrum esse nemo consectetur amet praesentium.
              Excepturi, autem aliquid.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
