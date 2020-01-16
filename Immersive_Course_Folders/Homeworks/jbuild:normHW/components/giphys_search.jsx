import React from 'react';

import GiphysIndex from './giphys_index';

class GiphysSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = { word: "" };

        this.updateWrd = this.updateWrd.bind(this);
        this.submit = this.submit.bind(this);
    }

    updateWrd(evt) {
        this.setState({ word: evt.target.value })
    }

    submit(evt) {
        evt.preventDefault();

        this.props.queryGifs(this.state.word);
    }
    
    render() {

        return(
            <div>
                <input onChange={this.updateWrd} value={this.state.word}></input>
                <button onClick={this.submit}>Search</button>

                <GiphysIndex gyphs={this.props.gifs}/>
            </div>
        )
    }

}


export default GiphysSearch;
