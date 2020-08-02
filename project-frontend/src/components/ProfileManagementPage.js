
import React from "react";
import EditConsole from "./EditConsole";
import Profile from "./ProfileConsole";

class ProfileManagementPage extends React.Component {
  constructor(props) {
    super(props);
    //this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.edit = this.edit.bind(this);
    this.submit = this.submit.bind(this);
    this.state = {
      isEditing: false,
      profile: {
        full_name: "",
        address_1: "",
        address_2: "",
        city: "",
        state: "",
        zipcode: "",
      },
    };
  }

  componentWillMount() {
    this.getProfile();
  }

  getProfile() {
    fetch("http://localhost:8080/api/profile_info", {
      method: "get",
      credentials: "include",
      mode: "cors",
    })
      .then((res) => res.json())
      .then((profile) => {
        const newProfile = {
          full_name: profile[0].full_name,
          address_1: profile[0].address_1,
          address_2: profile[0].address_2,
          city: profile[0].city,
          state: profile[0].state,
          zipcode: profile[0].zipcode,
        };
        this.setState({ profile: newProfile });
      });
  }

  edit() {
    this.setState({ isEditing: true });
  }

  submit() {
    this.setState({ isEditing: false });
    this.getProfile();
  }

  onChange(e) {
    this.setState({ profile: { [e.target.name]: e.target.value } });
  }

  render() {
    return (
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-3-desktop">
            {this.state.isEditing ? (
              <EditConsole submit={this.submit} profile={this.state.profile} />
            ) : (
              <Profile edit={this.edit} profile={this.state.profile} />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileManagementPage;
