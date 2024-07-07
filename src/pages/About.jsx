import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../styles/About.css";
export default function All() {
  return (
    <>
      <Navbar />
      <div className="all">
        <div className="a-top">
          <div className="a-title">
            <h2>About Us</h2>
          </div>
        </div>
        <div
          className="about-content"
        >
          <p>
            Welcome to <strong>DeCritic</strong>!
          </p>

          <p>
            At DeCritic, we&apos;re passionate about games. From the latest
            triple-A titles to hidden indie gems, our mission is to provide
            honest, in-depth, and insightful reviews that help gamers make
            informed choices. Founded by a team of dedicated gamers and writers,
            DeCritic combines a love for gaming with professional journalism to
            deliver content that resonates with players of all levels.
          </p>

          <h2>Our Vision</h2>
          <p>
            We believe that games are more than just a pastime; they are an art
            form that deserves thoughtful critique and appreciation. Our goal is
            to foster a community where gamers can discover new experiences,
            share their thoughts, and engage in meaningful discussions about the
            games they love.
          </p>

          <h2>What We Do</h2>
          <ul>
            <li>
              <strong>Comprehensive Reviews:</strong> Our reviews go beyond the
              surface to analyze gameplay, graphics, story, and overall
              experience, giving you a complete picture of each game.
            </li>
            <li>
              <strong>Latest News:</strong> Stay up-to-date with the latest
              happenings in the gaming world, from release dates to industry
              developments.
            </li>
            <li>
              <strong>Exclusive Interviews:</strong> Get insights from
              developers, designers, and industry insiders through our exclusive
              interviews.
            </li>
            <li>
              <strong>Opinion Pieces:</strong> Explore diverse perspectives on
              gaming trends, controversies, and the future of the industry
              through our opinion articles.
            </li>
          </ul>

          <h2>Our Team</h2>
          <p>
            DeCritic is powered by a diverse team of writers and reviewers, each
            bringing their unique voice and expertise to the table. Our team
            members are not only avid gamers but also skilled writers who are
            committed to delivering high-quality content.
          </p>

          <h2>Join Our Community</h2>
          <p>
            We invite you to be part of our growing community. Follow us on
            social media, join our forums, and subscribe to our newsletter for
            the latest reviews and news. Your feedback and participation are
            what make DeCritic a vibrant and inclusive space for all gamers.
          </p>

          <p>
            Thank you for visiting DeCritic. Let&apos;s explore the world of
            gaming together!
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
