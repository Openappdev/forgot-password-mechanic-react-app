import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from "react-router-dom";
import ResetPassword from "../pages/ResetPassword";

const routers = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Redirect to="/forgot-password" />
                    {/* redirect the user to /forgot-password page when opening the app from inital route ( "/" ) */}
                </Route>
                <Route path="/forgot-password">
                    <ResetPassword />
                </Route>
            </Switch>
        </Router>
    );
};

export default routers;
