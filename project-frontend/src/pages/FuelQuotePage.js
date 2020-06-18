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
          <div class="container">
            <div class="columns is-centered">
              <div class="column is-3-desktop">
                <form action="" class="box">
                  <div class="field">
                    <label class="label">
                      Gallons Requested
                        </label>
                    <div class="control has-icons-left">
                      <input
                        type="number"
                        placeholder="0"
                        class="input"
                        required
                      />
                      <span class="icon is-small is-left">
                        <i class="fa fa-hashtag"></i>
                      </span>
                    </div>
                  </div>
                  <div class="field">
                    <label for="" class="label">Delivery Address</label>
                    <div class="control has-icons-left">
                      <input
                        type="text"
                        placeholder="address from page"
                        disabled="true"
                        class="input"
                      />
                      <span class="icon is-small is-left">
                        <i class="fa fa-lock"></i>
                      </span>
                    </div>
                  </div>
                  <div class="field">
                  <label class="label">
                        Delivery Date
                      </label>
                    <div class="control has-icons-left">
                      <input
                        type="date"
                        class="input"
                        required
                      />
                      <span class="icon is-small is-left">
                        <i class="fa fa-calendar"></i>
                      </span>
                    </div>
                  </div>
                  <div class="field">
                  <label for="" class="label">
                        Suggested Price
                      </label>
                    <div class="control has-icons-left">
                      <input
                        type="text"
                        placeholder="0"
                        class="input"
                        disabled
                      />
                      <span class="icon is-small is-left">
                        <i class="fa fa-dollar"></i>
                      </span>
                    </div>
                  </div>
                  <div class="field">
                  <label for="" class="label">
                        Total Price
                      </label>
                    <div class="control has-icons-left">
                      <input
                        type="text"
                        placeholder="0"
                        class="input"
                        disabled
                      />
                      <span class="icon is-small is-left">
                        <i class="fa fa-dollar"></i>
                      </span>
                    </div>
                  </div>
                  <input type="button" class="button" value="Submit"></input>
                </form>
              </div>
            </div>
          </div>
        </header>
      </section>
    );
  }
}

export default FuelQuote;
