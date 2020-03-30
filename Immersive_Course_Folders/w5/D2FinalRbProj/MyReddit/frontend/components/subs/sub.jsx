import React from 'react';
import { Route, Link } from 'react-router-dom';

import LoginContainer from '../session/login_container';
import CreateUserContainer from '../users/create_user_container';
import ThreadsContainer from './thread_contianer';

class Subs extends React.Component {

    render() {
        let navL
        this.props.loggedIn ? navL = <button onClick={this.props.logOut}>Log-out</button> : navL = <Link to="/usrLog" >Login</Link>;

        return(
            <div>
                <header className="header">
                    <nav className="header-nav">
                        <ul className="header-list">
                            {navL}
                            <Link to="/mkUser">Sign Up</Link>
                        </ul>
                    </nav>
                </header>

                <main className="content">
                    <section className="content-sidebar">
                        <Route exact path="/" component={ThreadsContainer} />
                    </section>

                    <section className="content-main">
                        <Route path="/usrLog" component={LoginContainer} />
                        <Route path="/mkUser" component={CreateUserContainer} />
                    </section>
                </main>

            </div>
        )
    }
}

export default Subs;