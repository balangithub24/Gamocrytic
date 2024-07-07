import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import "../styles/About.css"

export default function Privacy() {
  return (
    <>
      <Navbar />
      <div className="all">
        <div className="a-top">
          <div className="a-title">
            <h2>Privacy Policy</h2>
          </div>
        </div>
        <div className="about-content">
          <h2>Introduction</h2>
          <p>
            Welcome to gamocrytic&apos;s Privacy Policy. Your privacy is important to
            us. This Privacy Policy outlines how we collect, use, disclose, and
            safeguard your information when you visit our website
            www.gamocrytic.com.
          </p>

          <h2>Information We Collect</h2>
          <p>We may collect personal information such as:</p>
          <ul>
            <li>
              Contact information (e.g., name, email address) provided
              voluntarily when you subscribe to our newsletter or contact us.
            </li>
            <li>
              Usage data (e.g., IP address, browser type, referring pages)
              collected automatically through cookies and similar technologies.
            </li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>We may use the information we collect for purposes such as:</p>
          <ul>
            <li>Providing and improving our services.</li>
            <li>
              Communicating with you, including responding to inquiries and
              sending newsletters.
            </li>
            <li>
              Analyzing trends and user behavior to enhance user experience.
            </li>
          </ul>

          <h2>Disclosure of Your Information</h2>
          <p>We may disclose your personal information:</p>
          <ul>
            <li>To comply with legal obligations or protect our rights.</li>
            <li>
              With service providers who assist us in operating our website.
            </li>
          </ul>

          <h2>Security of Your Information</h2>
          <p>
            We take reasonable measures to protect your personal information
            from unauthorized access or disclosure.
          </p>

          <h2>Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy periodically. We encourage you to
            review this page for any changes.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about these Terms and Conditions, please&nbsp;
            <Link to="/privacy">contact us</Link>.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
