import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import FuelQuote from './FuelQuotePage';
import FuelQuoteHistory from './FuelQuoteHistory';
import { ProfileManagementPage } from './ProfileManagementPage';
import Nav from './Nav';

function Page() {
    return (
        <Router>
            <Route path="/" exact>
                <div>
                    <p>Home Page</p>
                </div>
            </Route>
            <Route path="/fuelquote">
                <FuelQuote/>
            </Route>
            <Route path="/history">
                <FuelQuoteHistory/>
            </Route>
            <Route path="/profilemanagement">
                <ProfileManagementPage/>
            </Route>
        </Router>
    );
}

export default Page;
