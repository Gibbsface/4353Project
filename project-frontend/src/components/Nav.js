import React, { Component } from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";
import "../App.css"

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
      <nav class="navbar">
        <div class="navbar-menu">
          <div class="navbar-start">
            <a id="home" class="navbar-item" onClick={this.click}>
                Home
            </a>
          </div>

          <div class="navbar-end">
            <a id="profile" class="navbar-item" onClick={this.click}>
                Profile
            </a>
            <a id="quote" class="navbar-item" onClick={this.click}>
              Order
            </a>
            <a id="history" class="navbar-item" onClick={this.click}>
                History
            </a>
          </div>
        </div>
      </nav>
    )
  } 
}

export default Nav;
