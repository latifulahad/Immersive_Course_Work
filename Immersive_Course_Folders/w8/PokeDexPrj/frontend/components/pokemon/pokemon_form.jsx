import React from 'react';

import { withRouter } from "react-router-dom";

class PokemonForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: "", type: "", attack: "", defense: "", moves: "", poke_type: "", image_url: "" };

        this.handleSun = this.handleSun.bind(this);
        this.update = this.update.bind(this);
    }


    update(properT) {
        let list = [];
        return e => {
            if(properT === "moves") { 
                list = e.target.value.split(",");
                this.setState({ [properT]: list }) 
            }

            this.setState({ [properT]: e.target.value });
        }
    }

    handleSun(e) {
        e.preventDefault();
    
        this.props.sendPokeData(this.state).then(res => { 
            this.props.history.push(`/pokemon/${res.pokemon.id}`)
            this.setState({name: "", type: "", attack: "", defense: "", moves: "", poke_type: "", image_url: ""})
        });
    }

    render() {
        window.ans = this.props
        return(
            <div>
                <form onSubmit={this.handleSun}>
                    <input onChange={this.update("name")} type="text" value={this.state.name} placeholder="Name"/>
                    <input onChange={this.update("attack")} type="number" value={this.state.attack} placeholder="attack"/>
                    <input onChange={this.update("defense")} type="number" value={this.state.defense} placeholder="defense"/>
                    <input onChange={this.update("image_url")} type="text" value={this.state.image_url} placeholder="image"/>
                    <input onChange={this.update("moves")} type="text" value={this.state.moves} placeholder="moves"/>
                    <input onChange={this.update("poke_type")} type="text" value={this.state.poke_type} placeholder="poke_type"/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default withRouter(PokemonForm);