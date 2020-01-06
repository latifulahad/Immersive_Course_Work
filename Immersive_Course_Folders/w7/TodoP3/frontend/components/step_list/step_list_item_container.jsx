import { connect } from 'react-redux';
import StepListItem from './step_list_item';
import { receiveStep, delStep, upStep } from "../../actions/step_actions"

const mapDispatchToProps = (dispatch, { step }) => ({
    receiveStep: (stp) => dispatch(upStep(stp)),
    removeStep: () => dispatch(delStep(step))
})

export default connect(null, mapDispatchToProps)(StepListItem);