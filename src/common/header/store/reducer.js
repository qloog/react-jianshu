import * as contants from './contants';
import { fromJS} from 'immutable';

const defaultState = fromJS({
	focused: false
});

// NOTE: reducer 必须是一个纯函数
export default (state = defaultState, action) => {
	if (action.type === contants.SEARCH_FOCUS) {
		// immutable对象的set方法，会结合之前immutable之前的值和设置的值，返回一个全新的对象
		return state.set('focused', true);
	}
	if (action.type === contants.SEARCH_BLUR) {
		return state.set('focused', false);
	}
	return state;
}