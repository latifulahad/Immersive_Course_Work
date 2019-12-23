import React from 'react';

class StepListItem extends React.Component {
    constructor(props) {
        super(props);
        this.toggleItem = this.toggleItem.bind(this);
    }

    toggleItem(evt) {
        evt.preventDefault();
        let newObj = Object.assign({}, this.props.step)

        if (newObj.done === true) {
            newObj.done = false;
            this.props.receiveStep(newObj);
        } else {
            newObj.done = true;
            this.props.receiveStep(newObj);
        }
    }

    render() {
        let step = this.props.step;

        return (
            <li>
                <div>
                    <h3>{step.title}</h3>
                    <p>{step.body}</p>
                </div>

                <button onClick={this.toggleItem}>{`${step.done}`}</button>
                <button onClick={this.props.removeStep}>Remove Step</button>
            </li>
        )
    }
}

export default StepListItem;