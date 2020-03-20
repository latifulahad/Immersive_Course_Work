import React from 'react';
import { connect } from "react-redux";
import { Route, Redirect, withRouter} from 'react-router-dom';

const AuthComponent = ({path, component: Component, ritePer}) => (
    <Route path={path} render={(props) => (
        ritePer ? (
            <Component {...props}/>
        ) : (
            <Redirect to="/"/>
        )
    )}/>
)

const mapStateToProps = (state, ownProps) => {
    let value = state.ui.session.id === parseInt(ownProps.match.params.userId);
    return { ritePer: value }
}

export const AuthComContainer = withRouter(connect(mapStateToProps)(AuthComponent));
