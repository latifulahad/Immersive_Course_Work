import React from 'react';

class Header extends React.Component {
    render() {
        const pns = this.props.panes.map((pn, idx) => {
            return(
                <li key={idx} onClick={() => this.props.ndedFun(idx)}>{pn.title}</li>
            )
        });

        return(
            <ul>{pns}</ul>
        )
    }
}

class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = { paneNum: 0 };
    }

    chgState(num) {
        this.setState({ paneNum: num })
    }

    render() {
        const wntedTab = this.props.panes[this.state.paneNum];

        return(
            <div>
                <Header panes={this.props.panes} pnNum={this.state.paneNum} ndedFun={this.chgState.bind(this)}/> 
                <h1>{wntedTab.title}</h1>
                <article>{wntedTab.content}</article>
            </div>
        )
    }
}

export default Tabs;

