import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import '../styles/Loading.css';

function Loading() {
  return (
    <>
      <Navbar />
      <div className="loading-spinner-container">
        <div className="loading-spinner"></div>
      </div>
      <Footer />
    </>
  );
}

export default Loading;
