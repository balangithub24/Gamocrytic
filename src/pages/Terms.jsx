import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

import "../styles/About.css"

export default function Terms() {
  return (
    <>
      <Navbar />
      <div className="all">
        <div className="a-top">
          <div className="a-title">
            <h2>Terms and Conditions</h2>
          </div>
        </div>
        <div className="about-content">
          <h2>Introduction</h2>
          <p>
            Welcome to gamocrytic! These terms and conditions outline the rules
            and regulations for the use of gamocrytic&apos;s Website, located at
            www.gamocrytic.com.
          </p>

          <h2>Intellectual Property Rights</h2>
          <p>
            Other than the content you own, under these Terms, gamocrytic and/or
            its licensors own all the intellectual property rights and materials
            contained in this Website.
          </p>

          <h2>Restrictions</h2>
          <p>You are specifically restricted from all of the following:</p>
          <ul>
            <li>Publishing any Website material in any other media.</li>
            <li>
              Selling, sublicensing and/or otherwise commercializing any Website
              material.
            </li>
            <li>Publicly performing and/or showing any Website material.</li>
            <li>
              Using this Website in any way that is or may be damaging to this
              Website.
            </li>
            <li>
              Using this Website in any way that impacts user access to this
              Website.
            </li>
            <li>
              Using this Website contrary to applicable laws and regulations, or
              in any way may cause harm to the Website, or to any person or
              business entity.
            </li>
            <li>
              Engaging in any data mining, data harvesting, data extracting or
              any other similar activity in relation to this Website.
            </li>
          </ul>

          <h2>Your Content</h2>
          <p>
            In these Website Standard Terms and Conditions, &quot;Your Content&quot; shall
            mean any audio, video, text, images or other material you choose to
            display on this Website.
          </p>

          <h2>Disclaimer</h2>
          <p>
            This Website is provided &quot;as is,&quot; with all faults, and gamocrytic
            makes no express or implied representations or warranties, of any
            kind related to this Website or the materials contained on this
            Website.
          </p>

          <h2>Changes to Terms</h2>
          <p>
          gamocrytic reserves the right to modify these Terms at any time. We
            recommend reviewing these Terms regularly for any updates.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about these Terms and Conditions, please&nbsp;
            <Link to="/terms">contact us</Link>.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
