import axios from 'axios';
import * as constants from './constants';
import { fromJS } from 'immutable';

const doLogin = () => ({
	type: constants.DO_LOGIN,
	value: true
})

// 返回一个函数，redux-chunk 可以执行该函数
export const login = (account, password) => {
	return (dispatch) => {
		axios.get('/api/login.json?account='+account+'&password='+password).then((res) => {
			const result = res.data.data;
			if (result) {
				dispatch(doLogin());
			}
		})
	}
}

export const logout = () => ({
	type: constants.LOGOUT,
	value: false
});