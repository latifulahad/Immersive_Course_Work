import React from 'react';
import { Route, Link } from 'react-router-dom';

import PokemonIndexItem from './pokemon_index_item';
import PokemonDetailContainer from './pokemon_detail_container';
import PokemonFormContainer from './pokemon_form_container';

import LoginContainer from '../sess/login_form_container' 
import ShowUserContainer from '../sess/show_user_container';
import UpdateUserContainer from '../sess/update_user_container';
import { ProtectComContainer } from '../sess/protector_container';

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
        window.ans2 = this.props.sessionInfo;

        return(
            <div>
                {logER}
                <Route path="/sessions" component={LoginContainer} />
                <ProtectComContainer path="/users/:userId" component={ShowUserContainer}/>
                <Route path="/" component={PokemonFormContainer} />
                <Route path="/pokemon/:id" component={PokemonDetailContainer}/>
                <Route path="/userUp/:id" component={UpdateUserContainer} />
                
                <ul>{list}</ul>
            </div>
        )
    }
}

export default PokemonIndex;
