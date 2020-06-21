import React, {Component} from 'react';
import Quote from '../components/FuelQuotePage';
import History from '../components/FuelQuoteHistory';
import Profile from '../components/ProfileManagementPage';
import Nav from '../components/Nav';

class HomePage extends Component {
    constructor(props){
        super(props);
        this.navHandler = this.navHandler.bind(this);
    }

    state = {
        page: "quote"
    }

    navHandler(tab) {
        this.setState({page: tab});
    }

    appletSwitch(s) {
        switch (s) {
            case "quote":
                return <Quote />
            case "profile":
                return <Profile />
            case "history":
                return <History />
            default:
                return <div></div>
        }
    }

    render() {
        return(
            <div>
                <Nav nh={this.navHandler}/>
                
                <section className="hero is-fullheight-with-navbar">
                    <div className="section">
                        {this.appletSwitch(this.state.page)}
                    </div>
                </section>
            </div>
        );
    }


        // <Router>
        //     <Route path="/" exact>
        //         <div>
        //             <p>Home Page</p>
        //         </div>
        //     </Route>
        //     <Route path="/fuelquote">
        //         <FuelQuote/>
        //     </Route>
        //     <Route path="/history">
        //         <FuelQuoteHistory/>
        //     </Route>
        //     <Route path="/profilemanagement">
        //         <ProfileManagementPage/>
        //     </Route>
        // </Router>
}

export default HomePage;
