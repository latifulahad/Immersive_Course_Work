import React from 'react';

class Subs extends React.Component {

    render() {
        let navL
        this.props.loggedIn ? navL = "Hey there" : navL;

        return(
            <div>
                <header className="header">
                    <nav className="header-nav">
                        <ul className="header-list">
                            <li>Hello</li>
                        </ul>
                    </nav>
                </header>


            </div>
        )
    }
}

export default Subs;