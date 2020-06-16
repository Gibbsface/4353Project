import React from "react";
/* import "./style.css"; */
import { Link } from "react-router-dom";

export class Register extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Create your Account</div>
        <div className="content">
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="Username" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="text" name="password" placeholder="Password" />
            </div>
            <div className="form-group">
              <label htmlFor="re-password">Re-enter Password</label>
              <input
                type="text"
                name="re-password"
                placeholder="Re-enter Password"
              />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn">
            Register
          </button>
        </div>
        <div className="footer">
          <p>Already have an Account? &nbsp;</p>
          <Link to="/login">
            <li>Login Here</li>
          </Link>
        </div>
      </div>
    );
  }
}

export default Register;
