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
	],
	artitleList: [
		{
			id: 1,
			title: '走在白云边—柒游迹户外纪实19',
			desc: '不是所有的鸡汤你都喝得起，有些很贵。关于户外听到最多无非是生与死，这是争论不休的问题，当身边有人提起时，我往往选择沉默，压根就不是一个频道上的人..'
		},
		{
			id: 2,
			title: '走在白云边—柒游迹户外纪实18',
			desc: '不是所有的鸡汤你都喝得起，有些很贵。关于户外听到最多无非是生与死，这是争论不休的问题，当身边有人提起时，我往往选择沉默，压根就不是一个频道上的人..'
		},
		{
			id: 3,
			title: '走在白云边—柒游迹户外纪实17',
			desc: '不是所有的鸡汤你都喝得起，有些很贵。关于户外听到最多无非是生与死，这是争论不休的问题，当身边有人提起时，我往往选择沉默，压根就不是一个频道上的人..'
		},
		{
			id: 4,
			title: '走在白云边—柒游迹户外纪实16',
			desc: '不是所有的鸡汤你都喝得起，有些很贵。关于户外听到最多无非是生与死，这是争论不休的问题，当身边有人提起时，我往往选择沉默，压根就不是一个频道上的人..'
		}
	]
});

// NOTE: reducer 必须是一个纯函数
export default (state = defaultState, action) => {

	switch(action.type) {
		default:	
			return state;		
	}
}