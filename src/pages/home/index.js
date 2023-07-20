import React, { Component } from 'react';
import { connect } from 'react-redux';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writter from './components/Writter';
import { HomeWrapper, HomeLeft, HomeRight } from './style';
import axios from 'axios';

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
		axios.get('/api/home.json').then((res) => {
			const result = res.data.data;
			console.log('----------');
			console.log(result);
			const action = {
				type: 'change_home_data',
				topicList: result.topicList,
				articleList: result.articleList,
				recList: result.recList,
			}
			this.props.changeHomeData(action);
		})
	}
}

// map dispatch to props
const mapDispatch = (dispatch) => ({
	changeHomeData(action) {
		// send action to store
		dispatch(action);
	}
})

export default connect(null, mapDispatch)(Home);