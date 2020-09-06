import CreateSub from "./sub_form";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
    mock: ""    
})

const mapDispatchToProps = (dispatch) => ({
    mock: ""
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateSub);