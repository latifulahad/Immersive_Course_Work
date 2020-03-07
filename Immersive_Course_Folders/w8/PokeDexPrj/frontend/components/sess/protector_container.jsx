import React from 'react';
import { connect } from "react-redux"
import { Route, withRouter, Redirect } from 'react-router-dom';

const ProtectCom = ({ path, logedIn, component: Component }) => (
    <Route path={path} render={(props) => (
        logedIn ? (
            <Component {...props} />
        ) : (
                <Redirect to="/" />
            )
    )} />
)

const mapStateToProps = (state) => {
    return { logedIn: Boolean(state.ui.session.id) }
};

export const ProtectComContainer = withRouter(connect(mapStateToProps)(ProtectCom));