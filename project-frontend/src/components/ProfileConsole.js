import React from "react";

class ProfileConsole extends React.Component {
  render () { return (
    <div className="box">
      <ul className="list">
        <li className="list-item">
          <h1 className="label">Full Name:</h1>
          <p className="is-size-4 has-text-right is-italic"> {this.props.profile.name} </p>
        </li>
        <li className="list-item">
          <h1 className="label">Address:</h1>
          <p className="is-size-4 has-text-right is-italic"> {this.props.profile.addr1} </p>
        </li>
        {this.props.profile.addr2 ? 
          <li className="list-item">
            <h1 className="label">Address (line 2):</h1>
            <p className="is-size-4 has-text-right is-italic"> {this.props.profile.addr2} </p>
          </li>
          : <div></div>}
        <li className="list-item">
          <h1 className="label">City:</h1>
          <p className="is-size-4 has-text-right is-italic"> {this.props.profile.city} </p>
        </li>
        <li className="list-item">
          <h1 className="label">State:</h1>
          <p className="is-size-4 has-text-right is-italic"> {this.props.profile.state} </p>
        </li>
        <li className="list-item">
          <h1 className="label">Zip Code:</h1>
          <p className="is-size-4 has-text-right is-italic"> {this.props.profile.zip} </p>
        </li>
      </ul>
      <div className="has-text-centered">
        <button className="button is-info" onClick={this.props.edit}>
          Edit Profile
        </button>
      </div>
    </div>);
  }
}

export default ProfileConsole;