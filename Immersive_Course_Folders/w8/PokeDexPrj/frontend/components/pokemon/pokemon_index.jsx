import React from 'react';
import { Route, Link, Redirect } from 'react-router-dom';

import PokemonIndexItem from './pokemon_index_item';
import PokemonDetailContainer from './pokemon_detail_container';
import PokemonFormContainer from './pokemon_form_container';

import LoginContainer from '../sess/login_form_container' 
import ShowUserContainer from '../sess/show_user_container';
import AuthTag from '../sess/auth_tag';

class PokemonIndex extends React.Component {

    componentDidMount() {
        this.props.loadPoke();
    }

    render() {
        const list = this.props.pokemon.map(ele => (
            (<PokemonIndexItem key={ele.id} poke={ele}/>) 
        ));
        
        let logER
        this.props.loggedIn ? logER = <Link to={`/users/${this.props.sessionInfo}`} >UserInfo</Link> : logER = <Link to="/sessions" >Login</Link>;

        window.ans = this.props.loggedIn;
        return(
            <div>
                {logER}
                
                <Route path="/sessions" component={LoginContainer} />
                <Route path="/users/:userId" component={ShowUserContainer} />
                <Route path="/" component={PokemonFormContainer} />
                <Route path="/pokemon/:id" component={PokemonDetailContainer}/>
                
                <ul>{list}</ul>
            </div>
        )
    }
}

export default PokemonIndex;
