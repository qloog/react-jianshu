import { fromJS } from 'immutable';
import * as constants from './constants';

// NOTE: fromJS 会将一个js对象转换为 immutable 对象
const defaultState = fromJS({
	topicList: [],
	articleList: [],
	recList: [],
	articlePage: 1
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
		case constants.ADD_ARTICLE_LIST:
			return state.merge({
				articleList: state.get('articleList').concat(action.list),
				articlePage: action.nextPage
			});
		default:	
			return state;		
	}
}