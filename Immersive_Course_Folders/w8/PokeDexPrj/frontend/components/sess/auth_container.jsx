import React from 'react';
import { connect } from "react-redux";
import { Route, Redirect, withRouter} from 'react-router-dom';

const AuthCom = ({ path, ritePer, component: Component }) => (
    <Route path={path} render={(props) => (
        ritePer ? (
            <Component {...props} />
        ) : (
                <Redirect to="/" />
            )
        )} />
);

const mapStateToProps = (state, ownProps) => {
    let value = ownProps.match.params.userId === state.ui.session.id;
    return { ritePer: value }
}

export const AuthComContainer = withRouter(connect(mapStateToProps)(AuthCom));
