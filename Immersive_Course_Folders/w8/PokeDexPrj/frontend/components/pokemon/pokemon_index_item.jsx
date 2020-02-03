import React from 'react';
import { Link } from 'react-router-dom';
 
class PokemonIndexItem extends React.Component {

    render() {
        const pokeMn = this.props.poke;
        return(
            <li>
                <Link to={`/pokemon/${pokeMn.id}`}>{pokeMn.name}</Link>
            </li>
        )
    }
}

export default PokemonIndexItem;