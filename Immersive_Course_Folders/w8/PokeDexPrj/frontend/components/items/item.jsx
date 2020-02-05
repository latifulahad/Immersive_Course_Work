import React from 'react';
import { Link } from 'react-router-dom';

class Item extends React.Component {
    render() {
        const { nm, itmId, pokeId } = this.props;

        return(
            <li key={itmId}>
                <Link to={`/pokemon/${pokeId}/items/${itmId}`}>{nm}</Link>
            </li>
        )
    } 
}

export default Item;