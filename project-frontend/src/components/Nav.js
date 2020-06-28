import React, { Component } from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";
import "../App.css"

class Nav extends Component {
  constructor(props) {
    super(props)
    this.click = this.click.bind(this);
  }

  click = (e) => {
    this.props.nh(e.currentTarget.id);
  }

  render() {
    return (
      <nav className="navbar">
        <div className="navbar-menu">
          <div className="navbar-start">
            <a id="home" className="navbar-item" onClick={this.click}>
              Home
            </a>
          </div>

          <div className="navbar-end">
            <a id="profile" className="navbar-item" onClick={this.click}>
              Profile
            </a>
            <a id="quote" className="navbar-item" onClick={this.click}>
              Order
            </a>
            <a id="history" className="navbar-item" onClick={this.click}>
              History
            </a>
            <a id="signout" className="navbar-item" onClick={this.click}>
              Sign Out
            </a>
          </div>
        </div>
      </nav>
    )
  }
}

export default Nav;
