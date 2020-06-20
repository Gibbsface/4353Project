import React, {Component} from "react";
//import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import WelcomePage from "./pages/WelcomePage";

class App extends Component {
  
  state = {
    isLoggedIn: false,
  }

  login = () => {
    this.setState({isLoggedIn: true});
    console.log("logging in...")
  }

  
  render() {
    return this.state.isLoggedIn 
      ? <HomePage /> 
      : <WelcomePage login={this.login}/>
  }
}

export default App;
