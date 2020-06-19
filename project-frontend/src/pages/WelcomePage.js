import React, {Component} from "react";
import Login from "../components/Login.js"
import Register from "../components/Register.js"
//import { Link } from "react-router-dom";
import "react-bulma-components/dist/react-bulma-components.min.css";
import "../App.css";

class WelcomePage extends Component {
  constructor(props){
    super(props)
    console.log(this.props);
  }

  render() {
    return(
      <section className="hero is-fullheight">
        <div className="container mt-6">
          {this.props.registerToggle ? <Login /> : <Register />}
        </div>
      </section>
    );
  }
}

export default WelcomePage;

//   <section className="hero is-fullheight">
  //   <header className="hero-body">
  //     <div
  //       className="is-overlay has-text-centered single-spaced"
  //       style={{ top: 150 }}
  //     >
  //       <h1 className="title is-1 has-text-black">Find your way to fuel</h1>
  //       {/* <button
  //         to="/login"
  //         class="button is-danger is-inverted is-rounded is-outlined has-text-weight-bold has-text-black"
  //         style={{
  //           listStyle: "none",
  //           width: "10%",
  //           border: "0.15em solid black",
  //         }}
  //       >
  //         <p>Get your fuel quote now</p>
  //       </button> */}
  //     </div>
  //   </header>
  //   <footer className="hero-footer" style={{ padding: "5rem" }}>
  //     <div className="content has-text-centered"></div>
  //     <p className="has-text-centered has-text-white title is-4">
  //       ​Using our highly efficient pricing module to show the best prices
  //       near you
  //     </p>
  //   </footer>
  // </section>
