import * as contants from './contants';
import { fromJS} from 'immutable';

// NOTE: fromJS 会将一个js对象转换为 immutable 对象
const defaultState = fromJS({
	focused: false,
	list: []
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
	if (action.type === contants.CHANGE_LIST) {
		return state.set('list', action.data);
	}
	return state;
}