import React from 'react';
import Clock from './clock';
import Tabs from './tabs';

class Widget extends React.Component {
    constructor(props) {
        super(props);

        this.panes = [
            {title: 'news', content: 'Sabit is the best'}, 
            {title: 'f1', content: 'The new Senna?'}, 
            {title: 'bodyBuild', content: 'Want better separation?'}
        ];
    }


    render() {
        return(
            <div>
                <Clock />
                <Tabs panes={this.panes}/>        
            </div>
        )
    }

}

export default Widget;