import React from 'react';

const stateList = [
    {
        "name":"State",
        "abbreviation": ""
    },
    {
        "name": "Alabama",
        "abbreviation": "AL"
    },
    {
        "name": "Alaska",
        "abbreviation": "AK"
    },
    {
        "name": "American Samoa",
        "abbreviation": "AS"
    },
    {
        "name": "Arizona",
        "abbreviation": "AZ"
    },
    {
        "name": "Arkansas",
        "abbreviation": "AR"
    },
    {
        "name": "California",
        "abbreviation": "CA"
    },
    {
        "name": "Colorado",
        "abbreviation": "CO"
    },
    {
        "name": "Connecticut",
        "abbreviation": "CT"
    },
    {
        "name": "Delaware",
        "abbreviation": "DE"
    },
    {
        "name": "District Of Columbia",
        "abbreviation": "DC"
    },
    {
        "name": "Federated States Of Micronesia",
        "abbreviation": "FM"
    },
    {
        "name": "Florida",
        "abbreviation": "FL"
    },
    {
        "name": "Georgia",
        "abbreviation": "GA"
    },
    {
        "name": "Guam",
        "abbreviation": "GU"
    },
    {
        "name": "Hawaii",
        "abbreviation": "HI"
    },
    {
        "name": "Idaho",
        "abbreviation": "ID"
    },
    {
        "name": "Illinois",
        "abbreviation": "IL"
    },
    {
        "name": "Indiana",
        "abbreviation": "IN"
    },
    {
        "name": "Iowa",
        "abbreviation": "IA"
    },
    {
        "name": "Kansas",
        "abbreviation": "KS"
    },
    {
        "name": "Kentucky",
        "abbreviation": "KY"
    },
    {
        "name": "Louisiana",
        "abbreviation": "LA"
    },
    {
        "name": "Maine",
        "abbreviation": "ME"
    },
    {
        "name": "Marshall Islands",
        "abbreviation": "MH"
    },
    {
        "name": "Maryland",
        "abbreviation": "MD"
    },
    {
        "name": "Massachusetts",
        "abbreviation": "MA"
    },
    {
        "name": "Michigan",
        "abbreviation": "MI"
    },
    {
        "name": "Minnesota",
        "abbreviation": "MN"
    },
    {
        "name": "Mississippi",
        "abbreviation": "MS"
    },
    {
        "name": "Missouri",
        "abbreviation": "MO"
    },
    {
        "name": "Montana",
        "abbreviation": "MT"
    },
    {
        "name": "Nebraska",
        "abbreviation": "NE"
    },
    {
        "name": "Nevada",
        "abbreviation": "NV"
    },
    {
        "name": "New Hampshire",
        "abbreviation": "NH"
    },
    {
        "name": "New Jersey",
        "abbreviation": "NJ"
    },
    {
        "name": "New Mexico",
        "abbreviation": "NM"
    },
    {
        "name": "New York",
        "abbreviation": "NY"
    },
    {
        "name": "North Carolina",
        "abbreviation": "NC"
    },
    {
        "name": "North Dakota",
        "abbreviation": "ND"
    },
    {
        "name": "Northern Mariana Islands",
        "abbreviation": "MP"
    },
    {
        "name": "Ohio",
        "abbreviation": "OH"
    },
    {
        "name": "Oklahoma",
        "abbreviation": "OK"
    },
    {
        "name": "Oregon",
        "abbreviation": "OR"
    },
    {
        "name": "Palau",
        "abbreviation": "PW"
    },
    {
        "name": "Pennsylvania",
        "abbreviation": "PA"
    },
    {
        "name": "Puerto Rico",
        "abbreviation": "PR"
    },
    {
        "name": "Rhode Island",
        "abbreviation": "RI"
    },
    {
        "name": "South Carolina",
        "abbreviation": "SC"
    },
    {
        "name": "South Dakota",
        "abbreviation": "SD"
    },
    {
        "name": "Tennessee",
        "abbreviation": "TN"
    },
    {
        "name": "Texas",
        "abbreviation": "TX"
    },
    {
        "name": "Utah",
        "abbreviation": "UT"
    },
    {
        "name": "Vermont",
        "abbreviation": "VT"
    },
    {
        "name": "Virgin Islands",
        "abbreviation": "VI"
    },
    {
        "name": "Virginia",
        "abbreviation": "VA"
    },
    {
        "name": "Washington",
        "abbreviation": "WA"
    },
    {
        "name": "West Virginia",
        "abbreviation": "WV"
    },
    {
        "name": "Wisconsin",
        "abbreviation": "WI"
    },
    {
        "name": "Wyoming",
        "abbreviation": "WY"
    }
]

class ProfileManagementPage extends React.Component {

    render() {
        return (
            <div className="container">
                <div className="columns is-centered">
                    <div className="column is-3-desktop">
                        <form action="" className="box">
                            <div className="field">
                                <label className="label">
                                    Full Name
                                </label>
                                <div className="control has-icons-left">
                                    <input
                                        type="text"
                                        placeholder="Jeff Jefferson"
                                        className="input"
                                        required
                                        maxLength="50"
                                    />
                                    <span className="icon is-small is-left">
                                        <i className="fa fa-id-card"></i>
                                    </span>
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Address 1</label>
                                <div className="control has-icons-left">
                                    <input
                                        type="text"
                                        placeholder="1234 Example Dr"
                                        className="input"
                                        required
                                        maxLength="100"
                                    />
                                    <span className="icon is-small is-left">
                                    <i className="fa fa-map-marker"></i>
                                    </span>
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">
                                    Address 2
                                </label>
                                <div className="control has-icons-left">
                                    <input
                                        type="text"
                                        className="input"
                                        placeholder="Apartment, suite, building etc."
                                        maxLength="100"
                                    />
                                    <span className="icon is-small is-left">
                                    <i className="fa fa-map-marker"></i>
                                    </span>
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">
                                    City
                                </label>
                                <div className="control has-icons-left">
                                    <input
                                        type="text"
                                        placeholder="Houston"
                                        className="input"
                                        required
                                        maxLength="100"
                                    />
                                    <span className="icon is-small is-left">
                                        <i className="fa fa-map-marker"></i>
                                    </span>
                                </div>
                            </div>
                            <div className="field control has-icons-left">
                                <label className="label">
                                    State
                                </label>
                                <div className="select">
                                    <select required>
                                    {
                                        stateList.map(e=>{
                                            return (<option value={e.abbreviation}>{e.name}</option>)
                                        })
                                    }
                                    </select>
                                    <span className="icon is-small is-left">
                                        <i className="fa fa-map-marker"></i>
                                    </span>
                                </div>
                                
                            </div>
                            <div className="field">
                                <label className="label">
                                    Zip/Postal Code
                                </label>
                                <div className="control has-icons-left">
                                    <input
                                        type="text"
                                        placeholder="01234"
                                        className="input"
                                        required
                                        maxLength="9"
                                        minLength="5"
                                    />
                                    <span className="icon is-small is-left">
                                    <i className="fa fa-map-marker"></i>
                                    </span>
                                </div>
                            </div>
                            <input type="submit" className="button" value="Submit"/>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfileManagementPage;