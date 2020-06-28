import React, { Component } from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";

export class FuelQuote extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gallons: 0,
      addr: "",
      date: new Date(),
      suggestedPrice: 0,
      totalPrice: 0
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    
  }

  onChange(e) {
    let input = e.target;
    this.setState({ [input.name]: input.value });
  }


  componentDidMount() {
    fetch("http://localhost:8080/api/profile_info", {
      method: 'get',
      credentials: 'include',
      mode: 'cors'
    }).then(res => {
      res.json().then(result => {
        if (result.success) {
          this.setState({ addr: result.addr1 });
        }
      })
    })
  }

  render() {
    return (
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-3-desktop">
            <form className="box" onSubmit={this.handleSubmit}>
              <div className="field">
                <label className="label">
                  Gallons Requested
                    </label>
                <div className="control has-icons-left">
                  <input
                    type="number"
                    placeholder="0"
                    name="gallons"
                    className="input"
                    required
                    value={this.state.gallons}
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
                    name="addr"
                    value={this.state.addr}
                    onChange={this.onChange}
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
                    name="date"
                    value={this.state.date}
                    onChange={this.onChange}
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
                    name="suggestedPrice"
                    onChange={this.onChange}
                    value={this.state.suggestedPrice}
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
                    name="totalPrice"
                    onChange={this.onChange}
                    value={this.state.totalPrice}
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
