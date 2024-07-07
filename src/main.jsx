import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

import { AllPostsProvider } from "./contexts/AllPostsProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AllPostsProvider>
      <App />
    </AllPostsProvider>
  </BrowserRouter>
);
