import React from 'react';
import { Route, Link } from 'react-router-dom';

import LoginContainer from '../session/login_container';
import EditUsrContainer from '../users/edit_usr_container';
import CreateUserContainer from '../users/create_user_container';
import ThreadContainer from './thread_contianer';
import DeleteTrd from './delete_trd_container';
import PostContainer from '../posts/post_container';
import PostFormContainer from '../posts/post_form_container';
import CreateSubContainer from "./sub_form_container";
import ReplyToComContainer from '../posts/reply_to_com_container';
import LogOut from '../session/log_out';

class Subs extends React.Component {

    componentDidMount() {
        this.props.bringThreads();
    }

    componentDidUpdate() {
        this.props.clearErr();
    }

    render() {

        let thrds = this.props.threads.map((trd, idx) => (
            <li><Link className="thread-link" key={idx} to={`/thread/${trd.id}`}>{trd.title}</Link></li>
        ))

        let navL, navSign, createSub, welcomeHeader
        if(this.props.history.location.pathname === "/") { welcomeHeader = <h2 className="Welcome-header" >Welcome to the Knock off Reddit :)</h2>; }
        window.lala = this.props.history;
        this.props.loggedIn ? createSub = <Link to="mkThrd" >+Add Thread</Link> : true;
        this.props.loggedIn ? navL = <LogOut func={this.props.logOut}/> : navL = <Link to="/usrLog" >Login</Link>;
        this.props.loggedIn ? navSign = <Link style={{ marginLeft: 3 }} to="/edtUsr">Edit Account</Link> : navSign = <Link style={{ marginLeft: 3 }} to="/mkUser">Sign Up</Link>;

        return(
            <div>
                <header className="header">
                    <nav className="header-nav">
                    <Link className="home-link" to="/">HOME</Link>
                        <ul className="header-list">
                            {navL}
                            {navSign}
                        </ul>
                    </nav>
                </header>

                <main className="content">
                    <section className="content-sidebar">
                        <h2>Threads</h2>
                        {createSub}
                        <ul className="thrdNms">
                            {thrds}
                        </ul>
                    </section>

                    <section className="content-main">
                        {welcomeHeader}

                        <Route path="/usrLog" component={LoginContainer} />
                        <Route path="/edtUsr" component={EditUsrContainer} />
                        <Route path="/mkUser" component={CreateUserContainer} />
                        <Route path="/mkThrd" component={CreateSubContainer} />
                        <Route path="/delTrd/:id" component={DeleteTrd} />
                        <Route exact path="/thread/:id" component={ThreadContainer} />
                        <Route exact path="/thread/:id/post/:postId" component={PostContainer} />
                        <Route exact path="/thread/:id/post" component={PostFormContainer} />
                        <Route exact path="/thread/:id/post/:postId/comment/:cmtId" component={ReplyToComContainer} />
                    </section>
                </main>

            </div>
        )
    }
}

export default Subs;