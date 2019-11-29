import React from 'react';

class AutoComplete extends React.Component {
constructor(props){
    super(props);
    this.state = { currentInp: "" };

    this.PNames = this.PNames.bind(this);
    this.addNms = this.addNms.bind(this);
    this.fill4me = this.fill4me.bind(this);
}

    addNms(evt) {
        evt.preventDefault();

        this.setState({ currentInp: evt.target.value });
    }

    PNames() {
        const ans = [];
        const wrd = this.state.currentInp;

        this.props.nms.forEach((nm) => {
            for(let i = 0; i < wrd.length; i++) { 
                if(nm[i] === wrd[i]) { ans.push(nm); }
             }
        })

        return ans;
    }

    fill4me(evt) {
        evt.preventDefault();

        const wntLi = document.querySelector('#mainIn');
        wntLi.value = evt.target.textContent;
    }

    render() {
        const nms = this.PNames().map((nm, idx) => {
            return(
                <li key={idx} onClick={this.fill4me}>{nm}</li>
            );
        });

        return(
            <div>
                <label>
                Type Name
                    <input id="mainIn" type="text" onChange={this.addNms} value={this.state.currentInp}></input>
                </label>

                <ul>
                    {nms}
                </ul>
            </div>
        )
    }

}

export default AutoComplete;
