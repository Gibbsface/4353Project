import React from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";

export class Register extends React.Component {
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
        <div className="field">
          <label className="label">
            Re-Enter Password
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
          <button className="button is-link mt-2" onClick={this.props.login}>
            Register
          </button>
            <p className="mt-2 ">Already have an Account?</p>
          <button className="button" onClick={this.props.rToggle}>
            <p>Login here</p>
          </button>
        </div>
      </form> 
    );
  }
}

export default Register;
