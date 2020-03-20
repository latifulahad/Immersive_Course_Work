import React from 'react';

import { withRouter } from "react-router-dom";

class PokemonForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: "", attack: "", defense: "", moves: "", poke_type: "", image_url: "" };

        this.handleSun = this.handleSun.bind(this);
        this.update = this.update.bind(this);
        this.printErrors = this.printErrors.bind(this);
    }


    update(properT) {
        return e => this.setState({ [properT]: e.target.value });
    }

    handleSun(e) {
        e.preventDefault();
        const reqObj = Object.assign({}, this.state);
        reqObj["moves"] = reqObj['moves'].split(',');

        this.props.sendPokeData(reqObj).then(res => { 
            this.props.history.push(`/pokemon/${res.pokemon.id}`)
            this.setState({name: "", attack: "", defense: "", moves: "", poke_type: "", image_url: ""})
        });
    }


    printErrors() {
        if(this.props.errors) {
            return this.props.errors.map(err => {
                return(<li>{err}</li>);
            })
        };

    }

    render() {
        
        return(
            
            <form class="poke-add" onSubmit={this.handleSun}>
                <h2>Add a Friend</h2>

                <input onChange={this.update("name")} type="text" value={this.state.name} placeholder="Name"/>
                    <br></br>
                <input onChange={this.update("attack")} type="number" value={this.state.attack} placeholder="attack"/>
                    <br></br>
                <input onChange={this.update("defense")} type="number" value={this.state.defense} placeholder="defense"/>
                    <br></br>
                <input onChange={this.update("image_url")} type="text" value={this.state.image_url} placeholder="image"/>
                    <br></br>
                <input onChange={this.update("moves")} type="text" value={this.state.moves} placeholder="moves"/>
                    <br></br>
                <select onChange={this.update("poke_type")} value={this.state.poke_type}>
                    { POKEMON_TYPES.map((type, idx) => {
                            return(<option key={idx} value={type} >{type}</option>)
                        })
                    }
                </select>

                <button>Submit</button>
                
                <ul>{this.printErrors()}</ul>
            </form>   
        )
    }
}

export default withRouter(PokemonForm);