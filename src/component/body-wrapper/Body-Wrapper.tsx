import React from 'react';
import { Route, Switch } from 'react-router';
import Dashboard from '../dashboard/Dashboard';
import './Body-Wrapper.scss';

class BodyWrapper extends React.Component {
    render() {
        return (
            <div className="main-body">
                <div className="route-side-wrapper">
                    <div className="router-wrapper">
                        <Switch>
                            <Route path="/" exact component={Dashboard}></Route>
                        </Switch>
                    </div>
                    <div className="side-search">
                        Side search
                    </div>
                </div>
            </div>
        );
    }
}

export default BodyWrapper;