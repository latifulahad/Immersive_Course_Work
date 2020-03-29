import React from 'react';
import { Route, Link } from 'react-router-dom';

import LoginContainer from '../session/login_container';
import ThreadsContainer from './thread_contianer';

class Subs extends React.Component {

    render() {
        let navL
        this.props.loggedIn ? navL = "" : navL = <Link to="/usrLog" >Login</Link>;

        return(
            <div>
                <header className="header">
                    <nav className="header-nav">
                        <ul className="header-list">
                            {navL}
                        </ul>
                    </nav>
                </header>

                <main className="content">
                    <section className="content-main">
                        <ThreadsContainer />
                        <Route path="/usrLog" component={LoginContainer} />
                    </section>

                    <section className="content-sidebar"></section>
                </main>

            </div>
        )
    }
}

export default Subs;