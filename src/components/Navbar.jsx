import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import ReactGA from "react-ga4";
import axios from "axios";
import fullLogo from "../assets/logo/G-Logo-Light.svg";
import logo from "../assets/logo/G-Favicon.svg";
import { useAllPost } from "../contexts/AllPostsProvider";
import searchIcon from "../assets/icons/SearchLight.svg";
import xIcon from "../assets/icons/XLight.svg";
import Search from "./Search";
import API_URL from "../../config/global";

import "../styles/Navbar.css";

export default function Navbar() {
  const allPost = useAllPost();

  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isLoginVisible, setIsLoginVisible] = useState(true);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const burgerRef = useRef(null);
  const navRef = useRef(null);

  const [res, setRes] = useState({});

  useEffect(() => {
    // Retrieve user info from localStorage
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    if (userInfo && userInfo.token) {
      getData(userInfo.token);
    }

    if (userInfo) {
      setUser(userInfo);
    }
  }, []);

  const getData = async (token) => {
    try {
      const config = {
        headers: {
          Authorization: token,
        },
      };
      const response = await axios.get(`${API_URL}/home`, config);
      if (response.data === "Invalid Token") {
        alert("login again");
      } else if (response.data === "Server Busy") {
        alert("unauthorised access");
      } else if (response?.status) {
        setRes(response.data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleLogout = () => {
    const isConfirmed = window.confirm("Are you sure you want to log out?");

    if (isConfirmed) {
      // Send logout attempt event to Google Analytics
      ReactGA.event({
        category: "User",
        action: "Attempted Logout",
        label: res.email,
      });

      localStorage.removeItem("userInfo");
      setUser(null);
      navigate("/");
    }
  };

  const handleClick = (type, link, posts) => {
    // Send menu item click event to Google Analytics
    ReactGA.event({
      category: "Navigation",
      action: "Clicked Menu Item",
      label: type,
    });

    navigate(`/all/${link}`, { state: { type, posts } });

    burgerRef.current.classList.remove("bx-x");
    navRef.current.classList.remove("open");
  };

  const handleLens = () => {
    setIsSearchVisible(!isSearchVisible);
    setIsLoginVisible(!isLoginVisible);
  };

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const iconStyle = {
    marginRight: isSearchVisible ? "-10px" : "-5px",
    paddingLeft: isSearchVisible ? "15px" : "0",
  };

  const menuHandle = () => {
    burgerRef.current.classList.toggle("bx-x");
    navRef.current.classList.toggle("open");
  };

  return (
    <nav>
      <div className="container">
        <div className="n-logo">
          <Link to="/">
            <img src={screenWidth > 800 ? fullLogo : logo} alt="DeCritic Logo" />
          </Link>
        </div>

        {!isSearchVisible && (
          <div className="menu">
            <ul className="navlist" ref={navRef}>
              {allPost.map((value, index) => (
                <li
                  key={index}
                  onClick={() =>
                    handleClick(value.type, value.link, value.posts)
                  }
                >
                  {value.type.split(" ")[0]}
                </li>
              ))}
            </ul>

            <div
              className="bx bx-menu"
              id="menu-icon"
              onClick={menuHandle}
              ref={burgerRef}
            ></div>
          </div>
        )}

        <div className="search">
          {(isSearchVisible && <Search />) || (screenWidth > 800 && <Search />)}
          <div className="lens" onClick={handleLens} style={iconStyle}>
            <img src={isSearchVisible ? xIcon : searchIcon} alt="search icon" />
          </div>
        </div>

        {isLoginVisible && (
          <div className="n-login">
            {user ? (
              <>
                <button onClick={handleLogout}>Logout</button>
              </>
            ) : (
              <Link to="/login">
                <button type="button">Login</button>
              </Link>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
