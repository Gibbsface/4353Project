import React from "react";
import EditConsole from "./EditConsole";
import Profile from "./ProfileConsole"

class ProfileManagementPage extends React.Component {
  constructor(props) {
    super(props);
    //this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.toEdit = this.toEdit.bind(this);
    this.state = {
      isEditing: false,
      profile: {
        name: "",
        addr1: "",
        addr2: "",
        state: "",
        zip: ""
      },
    };
  }

  componentWillMount() {
    fetch("http://localhost:8080/api/profile_info", {
      method: "get",
      credentials: "include",
      mode: "cors",
    })
      .then((res) => res.json())
      .then((profile) => {
        const newProfile = {
            name: profile[0].full_name,
            addr1: profile[0].address_1,
            addr2: profile[0].address_2,
            state: profile[0].state,
            zip: profile[0].zipcode
        };
        this.setState({ profile: newProfile});});
  }

  toEdit() {
    this.setState({ isEditing: !this.state.isEditing });
  }

  onChange(e) {
    this.setState({ profile: {[e.target.name]: e.target.value }});
  }

  render() {
    return (
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-3-desktop">
            {this.state.isEditing ? <EditConsole edit={this.toEdit} profile={this.state.profile}/> : <Profile edit={this.toEdit} profile={this.state.profile}/>}
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileManagementPage;
