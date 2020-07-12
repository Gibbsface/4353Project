import React, { Component } from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";

export class FuelQuote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: [
        {
          gallons_requested: "",
          address_1: "",
          delivery_date: "",
          suggessted_price: "0",
          total_amount_due: "0",
        },
      ],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:8080/api/fuel_quote_post", {
      method: "post",
      headers: new Headers({
        "content-type": "application/json",
      }),
      mode: "cors",
      credentials: "include",
      body: JSON.stringify(this.state),
    }).then((res) => {
      res.json().then((result) => {
        //this.props.rToggle();
      });
    });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  componentDidMount() {
    fetch("http://localhost:8080/api/fuel_quote", {
      method: "get",
      credentials: "include",
      mode: "cors",
    })
      .then((res) => res.json())
      .then((quote) =>
        this.setState({ quote }, () => console.log("Quote fetched...", quote))
      );
  }

  //Make sure they cant change gallons or date after calculation.
  //Make sure date cannot be past date

  render() {
    return (
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-3-desktop">
            <form className="box" onSubmit={this.handleSubmit}>
              <div className="field">
                <label className="label">Gallons Requested</label>
                <div className="control has-icons-left">
                  <input
                    type="number"
                    placeholder="0"
                    min="0"
                    max="10000"
                    name="gallons_requested"
                    className="input"
                    required
                    //value={this.gallons_requested}
                    onChange={this.onChange}
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
                    name="address"
                    value={this.state.quote.map((quote) => quote.address_1)}
                    onChange={this.onChange}
                    disabled
                  />
                  <span className="icon is-small is-left">
                    <i className="fa fa-lock"></i>
                  </span>
                </div>
              </div>
              <div>
                <label className="label">Delivery Date</label>
                <div className="control has-icons-left">
                  <input
                    type="date"
                    id="datefield"
                    className="input"
                    min="2020-07-11"
                    name="delivery_date"
                    //value={this.state.delivery_date}
                    onChange={this.onChange}
                    required
                  />
                  <span className="icon is-small is-left">
                    <i className="fa fa-calendar"></i>
                  </span>
                </div>
              </div>
              <div className="field">
                <label className="label">Suggested Price</label>
                <div className="control has-icons-left">
                  <input
                    type="text"
                    placeholder="0"
                    className="input"
                    disabled
                    name="suggestedPrice"
                    onChange={this.onChange}
                    // value={this.state.suggessted_price}
                  />
                  <span className="icon is-small is-left">
                    <i className="fa fa-dollar"></i>
                  </span>
                </div>
              </div>
              <div className="field">
                <label className="label">Total Price</label>
                <div className="control has-icons-left">
                  <input
                    type="text"
                    placeholder="0"
                    className="input"
                    name="totalPrice"
                    //value={this.state.total_amount_due}
                    onChange={this.onChange}
                    disabled
                  />
                  <span className="icon is-small is-left">
                    <i className="fa fa-dollar"></i>
                  </span>
                </div>
              </div>
              <div className="field has-text-centered">
                <button className="button" onClick={this.props.rToggle}>
                  <p>Calculate Price</p>
                </button>
              </div>
              <div className="field has-text-centered">
                <input
                  type="submit"
                  className="button is-link"
                  value="Submit Form"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default FuelQuote;
