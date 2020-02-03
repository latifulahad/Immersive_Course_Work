import React from 'react';
import { Route, Link } from 'react-router-dom';

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
            <div>
                <Route path='/pokemon/:id/items/:itemId' component={ItemDetailContainer}/>
                <h2>{poke.name}</h2>
                <ul>{pokeIt.map(item => <Link to={`/pokemon/:id/items/${itemId}`}>{item.name}</Link>)}</ul>
            </div>
        )
    }
}

export default PokemonDetail;