import React from 'react';
import { Route, Link } from 'react-router-dom';

import PokemonIndexItem from './pokemon_index_item';
import PokemonDetailContainer from './pokemon_detail_container';
import PokemonFormContainer from './pokemon_form_container';

import LoginContainer from '../sess/login_form_container' 
import ShowUserContainer from '../sess/show_user_container';
import UpdateUserContainer from '../sess/update_user_container';
import CreateUserContainer from '../users/create_user_container';
import { ProtectComContainer } from '../sess/protector_container';
import { AuthComContainer } from '../sess/auth_container';

class PokemonIndex extends React.Component {
    
    componentDidMount() {
        this.props.loadPoke();
    }

    render() {
        const list = this.props.pokemon.map(ele => (
            (<PokemonIndexItem key={ele.id} poke={ele}/>) 
        ));
        
        let logER, mkUsr 

        this.props.loggedIn ? logER = <Link to={`/users/${this.props.sessionInfo}`} >UserInfo</Link> : logER = <Link to="/sessions" >Login</Link>;
        this.props.loggedIn ? mkUsr = "" : mkUsr = <Link to="/user" >Create Account</Link>;

        return(
        
            <div>
                <header class="header">
                    <nav class="header-nav">
                        <ul class="header-list">
                            <li>{logER}</li>
                            <li>{mkUsr}</li>
                        </ul>
                    </nav>
                </header>
                
                <main class="content"> 
                    <section class="content-sidebar">
                        <Link to="/pokemon">Add-Pokemon</Link>
                        <ul>{list}</ul>
                    </section>

                    <section class="content-main">
                        <Route path="/sessions" component={LoginContainer} />
                        <Route path="/user" component={CreateUserContainer} />
                        <AuthComContainer path="/users/:userId" component={ShowUserContainer}/>
                        
                        <Route path="/userUp/:id" component={UpdateUserContainer} />
                        <Route path="/pokemon" component={PokemonFormContainer} />
                        <Route path="/pokemon/:id" component={PokemonDetailContainer} />
                    </section>
                </main>
            </div>
        )
    }
}

export default PokemonIndex;
