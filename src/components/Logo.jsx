import { Link } from "react-router-dom";
import logo from "../assets/logo/D-Logo-Dark.svg";

import "../styles/Logo.css";

export default function Logo() {
  return (
    <div className="logo">
      <Link to="/">
        <img src={logo} alt="DeCritic Logo" />
      </Link>
    </div>
  );
}
