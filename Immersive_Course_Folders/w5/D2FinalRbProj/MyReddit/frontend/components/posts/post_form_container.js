import { connect } from 'react-redux';
import PostForm from './post_form';

const mapStateToProps = (state) => ({
    usrId: state.session.id
})

export default connect(mapStateToProps)(PostForm);