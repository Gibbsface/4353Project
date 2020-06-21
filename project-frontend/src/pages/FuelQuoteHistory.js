import React from "react";
import { Link } from "react-router-dom";
import "react-bulma-components/dist/react-bulma-components.min.css";

export class History extends React.Component {
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
            <div class="container">
              <div class="box">
                <table class="table is-fullwidth">
                  <thead>
                    <tr>
                      <th>Gallons Requested</th>
                      <th>Delivery Address</th>
                      <th>Delivery Date</th>
                      <th>Suggested Price</th>
                      <th>Total Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>1</th>
                      <th>1234 Example Dr</th>
                      <th>6/18/2020</th>
                      <th>$1</th>
                      <th>$1</th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </header>
      </section>
    );
  }
}

export default History;
