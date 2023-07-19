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
	],
	recList: [
		{
			id: 1,
			title: '走在白云边—柒游迹户外纪实19',
			imgURL: 'http://cdn2.jianshu.io/assets/web/banner-s-daily-e6f6601abc495573ad37f2532468186f.png'
		},
		{
			id: 2,
			title: '走在白云边—柒游迹户外纪实18',
			imgURL: 'https://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png'
		},
		{
			id: 3,
			title: '走在白云边—柒游迹户外纪实17',
			imgURL: 'https://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png'
		},
		{
			id: 4,
			title: '走在白云边—柒游迹户外纪实16',
			imgURL: 'https://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png'
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