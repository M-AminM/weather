import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = () => {
  return (
    <NavStyle>
      <h1>
        <Link id="logo" to="/">Home</Link>
      </h1>
      <ul>
        <li>
          <Link to="/weather">Check Weather</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
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

  a {
    text-decoration: none;
    color: black;
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

export default Nav;
