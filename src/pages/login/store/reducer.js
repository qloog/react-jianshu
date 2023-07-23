import { fromJS } from 'immutable';
import * as constants from './constants';

// NOTE: fromJS 会将一个js对象转换为 immutable 对象
const defaultState = fromJS({
	login: false
});

// NOTE: reducer 必须是一个纯函数
export default (state = defaultState, action) => {

	switch(action.type) {
		case constants.DO_LOGIN:
			return state.set('login', action.value);
		case constants.LOGOUT:
			return state.set('login', action.value);
		default:	
			return state;		
	}
}