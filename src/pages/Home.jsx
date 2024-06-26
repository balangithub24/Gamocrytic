import Navbar from "../components/Navbar";
import Body from "../components/Body";
import Footer from "../components/Footer";

import "../styles/Home.css";

export default function Home() {

  return (
    <div id="home" className="home">
      <Navbar />
      <Body />
      <Footer />
    </div>
  );
}
