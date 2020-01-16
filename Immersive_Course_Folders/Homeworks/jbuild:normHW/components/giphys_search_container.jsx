import { connect } from 'react-redux';
import GiphysSearch from './giphys_search';
import { bringGifs } from '../actions/giphy_actions';

const mapStateToProps = (state) => ({
    gifs: state.giphs
});

const mapDispatchToProps = dispatch => ({
    queryGifs: (wrd) => dispatch(bringGifs(wrd))
});

export default connect(mapStateToProps, mapDispatchToProps)(GiphysSearch);