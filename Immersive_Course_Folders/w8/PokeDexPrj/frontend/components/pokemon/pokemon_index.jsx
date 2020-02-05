import React from 'react';
import { Route } from 'react-router-dom';

import PokemonIndexItem from './pokemon_index_item';
import PokemonDetailContainer from './pokemon_detail_container';
import PokemonFormContainer from './pokemon_form_container';

class PokemonIndex extends React.Component {

    componentDidMount() {
        this.props.loadPoke();
    }

    render() {
        const list = this.props.pokemon.map(ele => (
            (<PokemonIndexItem key={ele.id} poke={ele}/>) 
        ))

        return(
            <div>
                <Route path="/pokemon/:id" component={PokemonDetailContainer}/>
                <Route path="/" component={PokemonFormContainer} />
                <ul>{list}</ul>
            </div>
        )
    }
}

export default PokemonIndex;