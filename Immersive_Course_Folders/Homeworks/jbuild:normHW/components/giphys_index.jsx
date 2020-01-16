import React from 'react';

import GiphysIndexItem from './giphys_index_item';

class GiphysIndex extends React.Component {
    
    render() {
        const list = this.props.gyphs.map((gf, idx) => (
        <GiphysIndexItem gif={gf} key={gf.id} num={idx}/>
        ))

        return(
            <ul>{list}</ul>
        )
    }

}

export default GiphysIndex;