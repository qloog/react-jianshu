import { fromJS } from 'immutable';
import * as constants from './constants';

// NOTE: fromJS 会将一个js对象转换为 immutable 对象
const defaultState = fromJS({
	topicList: [],
	articleList: [],
	recList: []
});

// NOTE: reducer 必须是一个纯函数
export default (state = defaultState, action) => {

	switch(action.type) {
		case constants.CHANGE_HOME_DATA:
			return state.merge({
				topicList: fromJS(action.topicList),
				articleList: fromJS(action.articleList),
				recList: fromJS(action.recList)
			});
		default:	
			return state;		
	}
}