import React from "react";
import { Link } from "react-router-dom";
import "react-bulma-components/dist/react-bulma-components.min.css";

export class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section class="hero is-fullheight">
        <div class="hero-body">
          <div class="container">
            <div class="columns is-centered">
              <div class="column is-3-desktop">
                <form action="" class="box">
                  <div class="field">
                    <label for="" class="label">
                      Username
                    </label>
                    <div class="control has-icons-left">
                      <input
                        type="username"
                        placeholder="Username"
                        class="input"
                        required
                      />
                      <span class="icon is-small is-left">
                        <i class="fa fa-user"></i>
                      </span>
                    </div>
                  </div>
                  <div class="field">
                    <label for="" class="label">
                      Password
                    </label>
                    <div class="control has-icons-left">
                      <input
                        type="password"
                        placeholder="*******"
                        class="input"
                        required
                      />
                      <span class="icon is-small is-left">
                        <i class="fa fa-lock"></i>
                      </span>
                    </div>
                  </div>
                  <div class="content has-text-centered">
                    <button
                      class="button is-link"
                      style={{ marginTop: "1em", marginBottom: 0 }}
                    >
                      Login
                    </button>
                    <p style={{ marginTop: "1em", marginBottom: 0 }}>
                      Don't have an Account?
                    </p>
                    <Link to="/register" style={{ listStyle: "none" }}>
                      <li>Register Here</li>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Login;
