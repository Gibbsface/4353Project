import React from "react";
import { Link } from "react-router-dom";
import "react-bulma-components/dist/react-bulma-components.min.css";

export class FuelQuote extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section class="hero is-fullheight">
        <header class="hero-body">
          <div
            class="is-overlay has-text-centered single-spaced"
            style={{ top: 150 }}
          >
            <h1 class="title is-1 has-text-black">
              Insert your stuff on this page
            </h1>
          </div>
        </header>
      </section>
    );
  }
}

export default FuelQuote;
