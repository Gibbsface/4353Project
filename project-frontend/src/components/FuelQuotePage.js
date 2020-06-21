import React, { Component } from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";

export class FuelQuote extends Component {

  render() {
    return (
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-3-desktop">
            <form action="" className="box">
              <div className="field">
                <label className="label">
                  Gallons Requested
                    </label>
                <div className="control has-icons-left">
                  <input
                    type="number"
                    placeholder="0"
                    className="input"
                    required
                  />
                  <span className="icon is-small is-left">
                    <i className="fa fa-hashtag"></i>
                  </span>
                </div>
              </div>
              <div className="field">
                <label className="label">Delivery Address</label>
                <div className="control has-icons-left">
                  <input
                    type="text"
                    placeholder="address from page"
                    className="input"
                  />
                  <span className="icon is-small is-left">
                    <i className="fa fa-lock"></i>
                  </span>
                </div>
              </div>
              <div className="field">
              <label className="label">
                    Delivery Date
                  </label>
                <div className="control has-icons-left">
                  <input
                    type="date"
                    className="input"
                    required
                  />
                  <span className="icon is-small is-left">
                    <i className="fa fa-calendar"></i>
                  </span>
                </div>
              </div>
              <div className="field">
              <label className="label">
                    Suggested Price
                  </label>
                <div className="control has-icons-left">
                  <input
                    type="text"
                    placeholder="0"
                    className="input"
                    disabled
                  />
                  <span className="icon is-small is-left">
                    <i className="fa fa-dollar"></i>
                  </span>
                </div>
              </div>
              <div className="field">
              <label className="label">
                    Total Price
                  </label>
                <div className="control has-icons-left">
                  <input
                    type="text"
                    placeholder="0"
                    className="input"
                    disabled
                  />
                  <span className="icon is-small is-left">
                    <i className="fa fa-dollar"></i>
                  </span>
                </div>
              </div>
              <input type="button" className="button" value="Submit"></input>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default FuelQuote;
