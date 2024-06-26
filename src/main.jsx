import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

import ReactGA from "react-ga4";
import { AllPostsProvider } from "./contexts/AllPostsProvider"; // Adjust the path as necessary

ReactGA.initialize("G-J3HF1KPR55");

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AllPostsProvider>
      <App />
    </AllPostsProvider>
  </BrowserRouter>
);
