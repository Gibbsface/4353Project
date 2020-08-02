import React from "react";

const stateList = [
    {
      name: "Alabama",
      abbreviation: "AL",
    },
    {
      name: "Alaska",
      abbreviation: "AK",
    },
    {
      name: "American Samoa",
      abbreviation: "AS",
    },
    {
      name: "Arizona",
      abbreviation: "AZ",
    },
    {
      name: "Arkansas",
      abbreviation: "AR",
    },
    {
      name: "California",
      abbreviation: "CA",
    },
    {
      name: "Colorado",
      abbreviation: "CO",
    },
    {
      name: "Connecticut",
      abbreviation: "CT",
    },
    {
      name: "Delaware",
      abbreviation: "DE",
    },
    {
      name: "District Of Columbia",
      abbreviation: "DC",
    },
    {
      name: "Federated States Of Micronesia",
      abbreviation: "FM",
    },
    {
      name: "Florida",
      abbreviation: "FL",
    },
    {
      name: "Georgia",
      abbreviation: "GA",
    },
    {
      name: "Guam",
      abbreviation: "GU",
    },
    {
      name: "Hawaii",
      abbreviation: "HI",
    },
    {
      name: "Idaho",
      abbreviation: "ID",
    },
    {
      name: "Illinois",
      abbreviation: "IL",
    },
    {
      name: "Indiana",
      abbreviation: "IN",
    },
    {
      name: "Iowa",
      abbreviation: "IA",
    },
    {
      name: "Kansas",
      abbreviation: "KS",
    },
    {
      name: "Kentucky",
      abbreviation: "KY",
    },
    {
      name: "Louisiana",
      abbreviation: "LA",
    },
    {
      name: "Maine",
      abbreviation: "ME",
    },
    {
      name: "Marshall Islands",
      abbreviation: "MH",
    },
    {
      name: "Maryland",
      abbreviation: "MD",
    },
    {
      name: "Massachusetts",
      abbreviation: "MA",
    },
    {
      name: "Michigan",
      abbreviation: "MI",
    },
    {
      name: "Minnesota",
      abbreviation: "MN",
    },
    {
      name: "Mississippi",
      abbreviation: "MS",
    },
    {
      name: "Missouri",
      abbreviation: "MO",
    },
    {
      name: "Montana",
      abbreviation: "MT",
    },
    {
      name: "Nebraska",
      abbreviation: "NE",
    },
    {
      name: "Nevada",
      abbreviation: "NV",
    },
    {
      name: "New Hampshire",
      abbreviation: "NH",
    },
    {
      name: "New Jersey",
      abbreviation: "NJ",
    },
    {
      name: "New Mexico",
      abbreviation: "NM",
    },
    {
      name: "New York",
      abbreviation: "NY",
    },
    {
      name: "North Carolina",
      abbreviation: "NC",
    },
    {
      name: "North Dakota",
      abbreviation: "ND",
    },
    {
      name: "Northern Mariana Islands",
      abbreviation: "MP",
    },
    {
      name: "Ohio",
      abbreviation: "OH",
    },
    {
      name: "Oklahoma",
      abbreviation: "OK",
    },
    {
      name: "Oregon",
      abbreviation: "OR",
    },
    {
      name: "Palau",
      abbreviation: "PW",
    },
    {
      name: "Pennsylvania",
      abbreviation: "PA",
    },
    {
      name: "Puerto Rico",
      abbreviation: "PR",
    },
    {
      name: "Rhode Island",
      abbreviation: "RI",
    },
    {
      name: "South Carolina",
      abbreviation: "SC",
    },
    {
      name: "South Dakota",
      abbreviation: "SD",
    },
    {
      name: "Tennessee",
      abbreviation: "TN",
    },
    {
      name: "Texas",
      abbreviation: "TX",
    },
    {
      name: "Utah",
      abbreviation: "UT",
    },
    {
      name: "Vermont",
      abbreviation: "VT",
    },
    {
      name: "Virgin Islands",
      abbreviation: "VI",
    },
    {
      name: "Virginia",
      abbreviation: "VA",
    },
    {
      name: "Washington",
      abbreviation: "WA",
    },
    {
      name: "West Virginia",
      abbreviation: "WV",
    },
    {
      name: "Wisconsin",
      abbreviation: "WI",
    },
    {
      name: "Wyoming",
      abbreviation: "WY",
    },
  ];

class EditConsole extends React.Component {
  constructor(props){
    super(props);
    this.submit = this.props.submit.bind(this);
    this.state = {
      name: this.props.profile.name,
      addr1: this.props.profile.addr1,
      addr2: this.props.profile.addr2,
      state: this.props.profile.state,
      zip: this.props.profile.zip
    };
  }

  handleClick() {
    const changes = [];
    const items = ["name", "addr1", "addr2", "state", "zip"];
    for(var id of items){
      var value = document.getElementById(id).value;
      if(value != this.state[id]){
        changes.push({
          field: id,
          value: value
        });}
    }
    fetch("http://localhost:8080/api/profile_update", {
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      method: "POST",
      mode: "cors",
      credentials: "include",
      body: JSON.stringify({changes})
    });

    this.props.submit();
  }

  render() { return (
    <div className="box">
      <div className="field"> 
        <label className="label">Full Name:</label>
        <div className="control">
          <input className="input" id="name" type="text" defaultValue={this.props.profile.name}/>
        </div>
      </div>

      <div className="field"> 
        <label className="label">Address:</label>
        <div className="control">
          <input className="input" id="addr1" type="text" defaultValue={this.props.profile.addr1}/>
        </div>
      </div>

      <div className="field"> 
        <label className="label">Adress (line 2):</label>
        <div className="control">
          <input className="input" id="addr2" type="text" defaultValue={this.props.profile.addr2}/>
        </div>
      </div>

      <div className="field"> 
        <label className="label">City:</label>
        <div className="control">
          <input className="input" id="state" type="text" defaultValue={this.props.profile.state}/>
        </div>
      </div>

      <div className="field"> 
        <label className="label">State:</label>
        <div className="control">
          <select className="select">
            {stateList.map((s)=>(<option key={s.name}>{s.name}</option>))}
          </select>
        </div>
      </div>

      <div className="field"> 
        <label className="label">Zip Code:</label>
        <div className="control">
          <input className="input" id="zip" type="number" defaultValue={this.props.profile.zip}/>
        </div>
      </div>

      <div className="has-text-centered">
        <button className="button is-danger" onClick={()=>{this.handleClick()}}>
          Submit Changes
        </button>
      </div>
    </div>);
  }
}

export default EditConsole;