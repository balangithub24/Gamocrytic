import Slogan from "./Slogan";
import { useAllPost } from "../contexts/AllPostsProvider";
import Section from "./Section";
import "../styles/Body.css";

export default function Body() {
  const allPost = useAllPost();

  return (
    <div className="main">
      <Slogan />
      {allPost.map((group, index) => (
        <Section
          key={index}
          sectionTitle={group.sectionTitle}
          sectionUrl={group.sectionUrl}
          sectionPosts={group.sectionPosts}
        />
      ))}
    </div>
  );
}
