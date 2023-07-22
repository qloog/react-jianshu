import { fromJS } from 'immutable';
import * as constants from './constants';

// NOTE: fromJS 会将一个js对象转换为 immutable 对象
const defaultState = fromJS({
	title: '',
	content: ''
});

// NOTE: reducer 必须是一个纯函数
export default (state = defaultState, action) => {

	switch(action.type) {
		case constants.CHANGE_DETAIL:
			return state.merge({
				title: action.title,
				content: action.content
			});
		default:	
			return state;		
	}
}