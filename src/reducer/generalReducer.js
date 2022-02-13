import * as actions from '../actions/types';

const generalReducer = (state = {}, action) => {
	if (action.type === actions.ADD_SPARKLE) {
		return {
			...state,
			sparkles: state.sparkles + 1,
		};
	} else if (action.type === actions.REMOVE_SPARKLE) {
		return {
			...state,
			sparkles: state.sparkles >= 1 ? state.sparkles - 1 : 0,
		};
	}
	return state;
};

export default generalReducer;
