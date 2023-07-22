import React, { Component } from 'react';
import { connect } from 'react-redux';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writter from './components/Writter';
import { HomeWrapper, HomeLeft, HomeRight } from './style';
import { actionCreators } from './store';

class Home extends Component {
	render() {
		return (
			<HomeWrapper>
				<HomeLeft>
					<img className='banner-img' src='https://lupic.cdn.bcebos.com/20220107/3085894865_14_472_337.jpg' />
					<Topic />
					<List />
				</HomeLeft>
				<HomeRight>
					<Recommend />
					<Writter />
				</HomeRight>
			</HomeWrapper>
		)
	}

	componentDidMount() {
		this.props.changeHomeData();
	}
}

// map dispatch to props
// 容器组件，上面的render为ui组件
const mapDispatch = (dispatch) => ({
	changeHomeData() {
		const action = actionCreators.getHomeInfo();
		dispatch(action);
	}
});

export default connect(null, mapDispatch)(Home);