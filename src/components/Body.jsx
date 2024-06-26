import Slogan from "./Slogan";
import { useAllPost } from "../contexts/AllPostsProvider";
import Section from "./Section";
import "../styles/Body.css";

export default function Body() {
  const allPost = useAllPost();

  return (
    <div className="main">
      <Slogan />
      {allPost.map((value, index) => (
        <Section
          key={index}
          type={value.type}
          link={value.link}
          posts={value.posts}
          allPost={allPost}
        />
      ))}
    </div>
  );
}
