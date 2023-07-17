import React, { Component } from 'react';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writter from './components/Writter';
import { HomeWrapper, HomeLeft, HomeRight } from './style';

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
}

export default Home;