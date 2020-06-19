import React, {Component} from "react";
//import { Link } from "react-router-dom";
import "react-bulma-components/dist/react-bulma-components.min.css";

export class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (    
      <form action="" className="box mt-6">
        <div className="field">
          <label className="label">
            Username
          </label>
          <div className="control has-icons-left">
            <input
              type="username"
              placeholder="Username"
              className="input"
              required
            />
            <span className="icon is-small is-left">
              <i className="fa fa-user"></i>
            </span>
          </div>
        </div>
        <div className="field">
          <label className="label">
            Password
          </label>
          <div className="control has-icons-left">
            <input
              type="password"
              placeholder="*******"
              className="input"
              required
            />
            <span className="icon is-small is-left">
              <i className="fa fa-lock"></i>
            </span>
          </div>
        </div>
        <div className="field has-text-centered">
          <button className="button is-link mt-2">
            Login
          </button>
            <p className="mt-2">Don't have an Account?</p>
          <button className="button">
            <p>Register Here</p>
          </button>
        </div>
      </form>
             
    );
  }
}

export default Login;
