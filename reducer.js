
import {setFilms} from './data/actions/state';

const reducer = (state, action) => {
	switch (action.type) {
		case "setFilms":
	 		return {
	 			...state,
	 			films: action.payload,
	 			loading: false
		};
		default: 
      		return state;
	}
  };

export default reducer;