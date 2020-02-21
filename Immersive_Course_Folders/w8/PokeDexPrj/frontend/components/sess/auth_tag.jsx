import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import ShowUserContainer from '../sess/show_user_container';
import LoginContainer from './login_form_container';

class AuthTag extends React.Component {

    render() {
        let wntTag
        this.props.logged ? wntTag = <ShowUserContainer /> : wntTag = <LoginContainer />;
        
        return(
            <section>
                {wntTag}
            </section>
        )
    }
}
    
export default AuthTag;
