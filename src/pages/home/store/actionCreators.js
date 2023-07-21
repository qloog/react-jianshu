import axios from 'axios';
import * as constants from './constants';

// 返回对象
const getHomeData = (result) => ({
	type: constants.CHANGE_HOME_DATA,
	topicList: result.topicList,
	articleList: result.articleList,
	recList: result.recList,
});

// 返回一个函数，redux-chunk 可以执行该函数
export const getHomeInfo = () => {
	return (dispatch) => {
		axios.get('/api/home.json').then((res) => {
			const result = res.data.data;
			// send action to store
			dispatch(getHomeData(result));
		})
	}
}