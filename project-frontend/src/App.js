import React, {Component} from "react";
//import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import WelcomePage from "./pages/WelcomePage";

class App extends Component {
  
  state = {
    isLoggedIn: false,
    registerToggle: true
  }

  
  render() {
    return this.props.isLoggedIn 
      ? <HomePage  /> 
      : <WelcomePage registerToggle={this.state.registerToggle}/>
  }
}

export default App;
