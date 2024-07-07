import { Link } from "react-router-dom";
import { useEffect } from "react";
import Logo from "./Logo";

import "../styles/Footer.css";

export default function Footer() {
 
  useEffect(() => {
    const toggleScrollToTopButton = () => {
      const slider = document.querySelector(".slider");
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        slider.classList.add("show");
      } else {
        slider.classList.remove("show");
      }
    };

    window.addEventListener("scroll", toggleScrollToTopButton);
    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", toggleScrollToTopButton);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="foot">
      <div className="line">
        <div className="box-1"></div>
        <div className="box-2"></div>
        <div className="box-3"></div>
      </div>

      <Logo />

      <div className="f-content">
        <div className="overview vertical">
          <h3>Overview</h3>
          <Link to="/about">About</Link>
          <Link to="/about">Help Center</Link>
          <Link to="/about">Careers</Link>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/about">Digital Services Act</Link>
          <Link to="/terms">Terms of Use</Link>
        </div>
        <div className="follow vertical">
          <div className="f-top">
            <h3>Follow Us</h3>
            <div className="icons">
              <Link to="https://www.facebook.com/">
                <i className="bx bxl-facebook"></i>
              </Link>
              <Link to="https://twitter.com/">
                <i className="bx bxl-twitter"></i>
              </Link>
              <Link to="https://www.instagram.com/">
                <i className="bx bxl-instagram-alt"></i>
              </Link>
            </div>
          </div>
          <div className="f-bottom">
            <p>&copy; 2024 gamocrytic. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
        <div className="explore vertical">
          <h3>Explore Other Brands</h3>
          <Link to="https://www.gamespot.com/">
            <p>GameSpot</p>
          </Link>
          <Link to="https://www.giantbomb.com/">
            <p>GiantBomb</p>
          </Link>
          <Link to="https://www.tvguide.com/">
            <p>TVGuide</p>
          </Link>
          <Link to="https://gamefaqs.gamespot.com/">
            <p>GameFAQs</p>
          </Link>
        </div>
      </div>
       <div className="slider" onClick={scrollToTop}>
        <i className="bx bx-up-arrow-alt"></i>
      </div>
    </div>
  );
}
