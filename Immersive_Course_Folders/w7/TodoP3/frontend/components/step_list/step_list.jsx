import React from 'react';
import StepListItemContainer from './step_list_item_container';
import StepListForm from './step_list_form';


class StepList extends React.Component {

    render() {
        const newSteps = this.props.steps.map((stp, idx) => {
            return (<StepListItemContainer key={idx} step={stp} />)
        })
        
        return(
            <div>
                <ul>{newSteps}</ul>
                <StepListForm todo_id={this.props.todo_id} receiveStep={this.props.receiveStep}/>
            </div>
        )
    }
}

export default StepList;