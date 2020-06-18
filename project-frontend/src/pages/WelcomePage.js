import React from "react";
import "./../App.css";
import { Link } from "react-router-dom";
import "react-bulma-components/dist/react-bulma-components.min.css";

function Page() {
  return (
    <section class="hero is-fullheight">
      <header class="hero-body">
        <div
          class="is-overlay has-text-centered single-spaced"
          style={{ top: 150 }}
        >
          <h1 class="title is-1 has-text-black">Find your way to fuel</h1>
          <Link
            to="/login"
            class="button is-danger is-inverted is-rounded is-outlined has-text-weight-bold has-text-black"
            style={{
              listStyle: "none",
              width: "10%",
              border: "0.15em solid black",
            }}
          >
            <li>Get your fuel quote now</li>
          </Link>
        </div>
      </header>
      <footer class="hero-footer" style={{ padding: "5rem" }}>
        <div class="content has-text-centered"></div>
        <p class="has-text-centered has-text-white title is-4">
          ​Using our highly efficient pricing module to show the best prices
          near you
        </p>
      </footer>
    </section>
  );
}

export default Page;
