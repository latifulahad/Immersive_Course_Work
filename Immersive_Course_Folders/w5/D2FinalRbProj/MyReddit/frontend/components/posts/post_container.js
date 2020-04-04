import { connect } from 'react-redux';
import Post from './post';

const mapStateToProps = (state) => ({
   filler: "" 
})

const mapDispatchToProps = (dispatch) => ({
    other: ""
})

export default connect(mapStateToProps, mapDispatchToProps)(Post);
