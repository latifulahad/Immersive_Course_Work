import React from 'react';
import StepListItemContainer from './step_list_item_container';

class StepList extends React.Component {

    render() {
        const newSteps = this.props.steps.map((stp, idx) => {
            return (<StepListItemContainer key={idx} step={stp} />)
        })

        return(
            <div>
                <ul>{newSteps}</ul>
            </div>
        )
    }
}

export default StepList;