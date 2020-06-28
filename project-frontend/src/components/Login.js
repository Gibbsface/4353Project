import React, { Component } from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  async componentDidMount(){
    console.log(document.cookie);
  }

  async onSubmit(event) {
    event.preventDefault();
    let xhttp = new XMLHttpRequest();
    xhttp.open('POST', "http://localhost:8080/api/login");
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.withCredentials = true;
    xhttp.send(JSON.stringify({
      username: this.state.username,
      password: this.state.password
    }))
    xhttp.onreadystatechange = (e)=>{
      if(xhttp.readyState == XMLHttpRequest.DONE){
        console.log(xhttp.response);
        this.props.login();
      }
    }
  }

  render() {
    return (
      <form className="box mt-6" onSubmit={this.onSubmit}>
        <div className="field">
          <label className="label">Username</label>
          <div className="control has-icons-left">
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="input"
              required
              value={this.state.username}
              onChange={this.handleChange}
            />
            <span className="icon is-small is-left">
              <i className="fa fa-user"></i>
            </span>
          </div>
        </div>
        <div className="field">
          <label className="label">Password</label>
          <div className="control has-icons-left">
            <input
              type="password"
              name="password"
              placeholder="*******"
              className="input"
              required
              value={this.state.password}
              onChange={this.handleChange}
            />
            <span className="icon is-small is-left">
              <i className="fa fa-lock"></i>
            </span>
          </div>
        </div>
        <div className="field has-text-centered">
          <input type="submit" value="Login" className="button is-link mt-2" />
          <p className="mt-2 has-text-centered">Don't have an Account?</p>
          <button
            className="button has-text-centered"
            onClick={this.props.rToggle}
          >
            <p>Register Here</p>
          </button>
        </div>
      </form>
    );
  }
}

export default Login;
