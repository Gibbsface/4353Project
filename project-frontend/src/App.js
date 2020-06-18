import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import WelcomePage from "./pages/WelcomePage";
import Nav from "./pages/Nav";
import FuelQuotePage from "./pages/FuelQuotePage";
import FuelQuoteHistory from "./pages/FuelQuoteHistory";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={WelcomePage}>
          <WelcomePage />
        </Route>
        <Route path="/fuelquote" component={FuelQuotePage}>
          <FuelQuotePage />
        </Route>
        <Route path="/history" component={FuelQuoteHistory}>
          <FuelQuoteHistory />
        </Route>
        <Route path="/login" component={LoginPage}>
          <LoginPage />
        </Route>
        <Route path="/register" component={RegisterPage}>
          <RegisterPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
