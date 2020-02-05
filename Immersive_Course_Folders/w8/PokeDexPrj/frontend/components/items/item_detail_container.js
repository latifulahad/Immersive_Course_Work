import { connect } from 'react-redux';
import ItemDetail from './item_detail'

const mapStateToProps = (state, ownProps) => {
    const itmInfo = state.entities.items[ownProps.match.params.itemId];
    return({ itmInfo });
} 
 
export default connect(mapStateToProps)(ItemDetail);