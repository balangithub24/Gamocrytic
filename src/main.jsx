import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

// import ReactGA from "react-ga4";
import { AllPostsProvider } from "./contexts/AllPostsProvider"; // Adjust the path as necessary

// ReactGA.initialize("");

// Send pageview with a custom path
// ReactGA.send({ hitType: "pageview", page: "/logiin", title: "suiii" });

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AllPostsProvider>
      <App />
    </AllPostsProvider>
  </BrowserRouter>
);
