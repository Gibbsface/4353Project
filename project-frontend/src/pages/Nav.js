import React from "react";
import { Link } from "react-router-dom";
import "react-bulma-components/dist/react-bulma-components.min.css";

function Nav() {
  return (
    <nav class="navbar is-black" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <Link to="/">
          <li class="navbar-item has-text-white" style={{ fontSize: 30 }}>
            Fuel Nav
          </li>
        </Link>
        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarTemp"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarTemp" class="navbar-menu">
        <div class="navbar-start" style={{ marginLeft: "50em" }}>
          <Link to="/">
            <li
              class="navbar-item has-text-white desktop"
              style={{ fontSize: 30 }}
            >
              Home
            </li>
          </Link>
          <Link to="/fuelquote">
            <li
              class="navbar-item has-text-white desktop"
              style={{ fontSize: 30 }}
            >
              Fuel Quote Form
            </li>
          </Link>
          <Link to="/history">
            <li
              class="navbar-item has-text-white desktop"
              style={{ fontSize: 30 }}
            >
              Fuel Quote History
            </li>
          </Link>
        </div>

        <div class="navbar-end">
          <Link to="/login">
            <li
              class="navbar-item has-text-white desktop"
              style={{ fontSize: 30 }}
            >
              Sign in
            </li>
          </Link>
          <Link to="/register">
            <li
              class="navbar-item has-text-white desktop"
              style={{ fontSize: 30 }}
            >
              Register
            </li>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
