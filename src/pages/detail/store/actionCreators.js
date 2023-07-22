import axios from 'axios';
import * as constants from './constants';
import { fromJS } from 'immutable';

const changeDetail = (title, content) => ({
	type: constants.CHANGE_DETAIL,
	title,
	content
})

// 返回一个函数，redux-chunk 可以执行该函数
export const getDetail = (id) => {
	return (dispatch) => {
		axios.get('/api/detail.json?id='+id).then((res) => {
			const result = res.data.data;
			dispatch(changeDetail(result.title, result.content));
		})
	}
}