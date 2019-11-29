import React from 'react';
import Clock from './clock';
import Tabs from './tabs';
import Weather from './weather';
import AutoComplete from './autocomplete';

class Widget extends React.Component {
    constructor(props) {
        super(props);

        this.panes = [
            {title: 'news', content: 'Sabit is the best'}, 
            {title: 'f1', content: 'The new Senna?'}, 
            {title: 'bodyBuild', content: 'Want better separation?'}
        ];
        this.names = ['Anik', 'Bunny', 'Cynthia', 'Fuad', 'Sabit'];
    }

    render() {
        return(
            <div>
                <Clock />
                <Tabs panes={this.panes}/> 
                <AutoComplete nms={this.names}/> 
            </div>
        )
    }

}
//Weather Component needs to be added for displaying !present 4 sanitation Purpose
export default Widget;