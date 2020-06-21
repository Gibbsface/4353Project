import React, { Component } from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";

class Nav extends Component {
  constructor(props){
    super(props)
    this.click = this.click.bind(this);
  }

  click = (e) => {
    this.props.nh(e.currentTarget.id);
  }

  render() {
    return(
      <nav className="navbar is-black">
        <div className="navbar-menu">
          <div className="navbar-start">
            <button id="home" className="navbar-item" onClick={this.click}>
                HOME
            </button>
          </div>

          <div className="navbar-end">
          <button id="profile" className="navbar-item" onClick={this.click}>
              Profile
          </button>

          <button id="quote" className="navbar-item" onClick={this.click}>
              Order
          </button>

          <button id="history" className="navbar-item" onClick={this.click}>
              History
          </button>
          </div>
        </div>
      </nav>
    )
  } 
}

export default Nav;
