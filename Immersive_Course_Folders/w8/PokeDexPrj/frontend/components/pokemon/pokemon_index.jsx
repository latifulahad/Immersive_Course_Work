import React from 'react';
import { Route, Link } from 'react-router-dom';

import PokemonIndexItem from './pokemon_index_item';
import PokemonDetailContainer from './pokemon_detail_container';
import PokemonFormContainer from './pokemon_form_container';

import LoginContainer from '../sessions/login_form_container' 
import ShowUserContainer from '../sessions/show_user_container';

class PokemonIndex extends React.Component {

    componentDidMount() {
        this.props.loadPoke();
    }

    render() {
        const list = this.props.pokemon.map(ele => (
            (<PokemonIndexItem key={ele.id} poke={ele}/>) 
        ));
        let userInfo = "";

        if(this.props.loggedIn) {
           userInfo
        } else {
            userInfo = <LoginContainer />
        }
        
        return(
            <div>
                <ShowUserContainer id={this.props.sessionInfo}/>
                {userInfo}

                <Route path="/pokemon/:id" component={PokemonDetailContainer}/>
                <Route path="/users/:id" component={ShowUserContainer}/>
                
                <Route path="/" component={PokemonFormContainer} />
                <ul>{list}</ul>
            </div>
        )
    }
}

export default PokemonIndex;