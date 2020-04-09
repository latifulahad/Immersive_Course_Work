import React from 'react';
import { Route, Link } from 'react-router-dom';

import LoginContainer from '../session/login_container';
import CreateUserContainer from '../users/create_user_container';
import ThreadContainer from './thread_contianer';
import PostContainer from '../posts/post_container';
import PostFormContainer from '../posts/post_form_container';

class Subs extends React.Component {

    componentDidMount() {
        this.props.bringThreads();
    }

    render() {

        let thrds = this.props.threads.map((trd, idx) => (
            <Link className="thread-link" key={idx} to={`/thread/${trd.id}`}>{trd.title}</Link>
        ))

        let navL
        this.props.loggedIn ? navL = <button onClick={this.props.logOut}>Log-out</button> : navL = <Link to="/usrLog" >Login</Link>;

        return(
            <div>
                <header className="header">
                    <nav className="header-nav">
                        <ul className="header-list">
                            {navL}
                            <Link style={{marginLeft: 3}} to="/mkUser">Sign Up</Link>
                        </ul>
                    </nav>
                </header>

                <main className="content">
                    <section className="content-sidebar">
                        <ul>
                            {thrds}
                        </ul>
                        
                    </section>

                    <section className="content-main">
                        <Route path="/usrLog" component={LoginContainer} />
                        <Route path="/mkUser" component={CreateUserContainer} />
                        <Route exact path="/thread/:id" component={ThreadContainer} />
                        <Route exact path="/thread/:id/post/:postId" component={PostContainer} />
                        <Route path="/thread/:id/post" component={PostFormContainer} />
                    </section>
                </main>

            </div>
        )
    }
}

export default Subs;