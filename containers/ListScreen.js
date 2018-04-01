import ListScreen from '../screens/ListScreen';
import {connect} from 'react-redux';
import { getFilms } from '../data/actions/api';
 
const mapStateToProps = (state) => ({
  films: state.films,
  loading: state.loading
});

const mapDispatchToProps = (dispatch) => {
	return {
		onLoad: () => dispatch(getFilms()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ListScreen);