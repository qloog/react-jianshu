const defaultState = {
	focused: false
};

// NOTE: reducer 必须是一个纯函数
export default (state = defaultState, action) => {
	if (action.type === 'search_focus') {
		return {
			focused: true
		}
	}
	if (action.type === 'search_blur') {
		return {
			focused: false
		}
	}
	return state;
}