import React from 'react';

class PokemonIndex extends React.Component {

    componentDidMount() {
        this.props.loadPoke();
    }

    render() {
        const list = this.props.pokemon.map(ele => (
            (<li key={ele.id} >{ele.name}</li>) 
        ))

        return(
            <div>
                <ul>{list}</ul>
            </div>
        )
    }
}

export default PokemonIndex;