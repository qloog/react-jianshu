import * as contants from './contants';
import { fromJS } from 'immutable';
import axios from 'axios';

// 这里统一定义action
// NOTE: 需要导出的都放在上面，需要导出的放在下面

const changeList = (data) => ({
	type: contants.CHANGE_LIST,
	// NOTE: 这里的data为传过来的js数组，
	// 为了和 reducer 中的保持一致，这里需要使用fromJS进行转换
	data: fromJS(data)
});


export const searchFocus = () => ({
	type: contants.SEARCH_FOCUS
});

export const searchBlur = () => ({
	type: contants.SEARCH_BLUR
});

// 以上都是返回的对象
// 这里返回一个函数，需要配置 redux-thunk来支持
export const getSearchTagList = () => {
	return (dispatch) => {
		// 配发一个异步的请求
		axios.get('/api/rec_taglist.json').then((res) => {
			const data = res.data;
			// 派发action给store
			dispatch(changeList(data.data));
		}).catch(() => {
			console.log('error');
		})
	}
};