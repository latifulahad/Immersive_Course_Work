import CreateSub from "./sub_form";
import { connect } from "react-redux";
import { create_Thrd } from "./../../utils/ajax_func"
import { bringThreads } from "./../../actions/threads_actions"

const mapStateToProps = (state) => ({
    usrId: state.ui.session.id   
})

const mapDispatchToProps = (dispatch) => ({
    sendData: (data) => create_Thrd(data),
    bringThreads: () => dispatch(bringThreads())
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateSub);