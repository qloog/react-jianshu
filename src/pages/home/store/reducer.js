import { fromJS} from 'immutable';

// NOTE: fromJS 会将一个js对象转换为 immutable 对象
const defaultState = fromJS({
	topicList: [
		{
			id: 1,
			title: 'golang',
		},
		{
			id: 2,
			title: 'php',
		},
		{
			id: 3,
			title: 'java',
		},
	]
});

// NOTE: reducer 必须是一个纯函数
export default (state = defaultState, action) => {

	switch(action.type) {
		default:	
			return state;		
	}
}