import * as contants from './contants';

const defaultState = {
	focused: false
};

// NOTE: reducer 必须是一个纯函数
export default (state = defaultState, action) => {
	if (action.type === contants.SEARCH_FOCUS) {
		return {
			focused: true
		}
	}
	if (action.type === contants.SEARCH_BLUR) {
		return {
			focused: false
		}
	}
	return state;
}