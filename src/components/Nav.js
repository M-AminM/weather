import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const Nav = () => {
  const [activeLine, setActiveLine] = useState({
    Home: false,
    CheckWeather: false,
    Contact: false,
  });

  const LineAnim = {
    hidden: {
      width: "0%",
      transition: {
        duration: 1,
      },
    },
    show: {
      width: "100%",
      transition: {
        duration: 1,
      },
    },
  };

  const { pathname } = useLocation();

  console.log(pathname);

  return (
    <NavStyle>
      <h1>
        <Link id="logo" to="/">
          Home
          <Line
            variants={LineAnim}
            initial="hidden"
            animate={pathname === "/" ? "show" : "hidden"}
          />
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/weather">
            Check Weather
            <Line
              variants={LineAnim}
              initial="hidden"
              animate={pathname === "/weather" ? "show" : "hidden"}
            />
          </Link>
        </li>
        <li>
          <Link to="/contact">
            Contact Us
            <Line
              variants={LineAnim}
              initial="hidden"
              animate={pathname === "/contact" ? "show" : "hidden"}
            />
          </Link>
        </li>
      </ul>
    </NavStyle>
  );
};

const NavStyle = styled.nav`
  min-height: 10vh;
  display: flex;
  justify-content: space-between;
  margin: auto;
  align-items: center;
  padding: 1rem 10rem;
  background: #282828;
  position: sticky;
  top: 0;
  z-index: 3;
  a {
    text-decoration: none;
    color: white;
  }
  ul {
    display: flex;
    list-style: none;
  }
  li {
    padding-left: 1rem;
    position: relative;
  }
  #logo {
    font-size: 1.5rem;
    font-family: "Lobster", cursive;
    font-weight: lighter;
  }
`;

const Line = styled(motion.div)`
  background: #23d997;
  height: 0.3rem;
  width: 100%;
  border-radius: 1rem;
`;

export default Nav;
