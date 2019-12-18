import { connect } from 'react-redux';
import StepListItem from './step_list_item';
import { receiveStep, removeStep } from "../../actions/step_actions"

const mapDispatchToProps = (dispatch, { step }) => ({
    receiveStep: (stp) => dispatch(receiveStep(stp)),
    removeStep: () => dispatch(removeStep(step))
})

export default connect(null, mapDispatchToProps)(StepListItem);