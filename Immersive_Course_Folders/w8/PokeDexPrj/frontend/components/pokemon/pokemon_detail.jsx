import React from 'react';
import { Route, Link } from 'react-router-dom';

import Item from '../items/item';
import ItemDetailContainer from '../items/item_detail_container';

class PokemonDetail extends React.Component {

    componentDidMount() {
        this.props.bringPoke(this.props.match.params.id);
    }

    componentDidUpdate(prevProps) {
        if(prevProps.match.params.id !== this.props.match.params.id) {
            this.props.bringPoke(this.props.match.params.id);
        }
    }

    render() {
        const { poke, pokeIt } = this.props;

        return(
            <section>
                <Route path='/pokemon/:id/items/:itemId' component={ItemDetailContainer}/>
                <div>
                    <h2>{poke.name}</h2>
                    <ul>Items {pokeIt.map(item => <Item key={item.id} nm={item.name} itmId={item.id} pokeId={item.pokemon_id}/>)}</ul>
                </div>
            </section>
        )
    }
}

export default PokemonDetail;