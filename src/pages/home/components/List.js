import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreators } from '../store';
import { ListItem, ListInfo, LoadMore } from '../style';

class List extends Component {
	render() {
		const { list, loadMoreList, page } = this.props;
		return (
			<div>
				{
					list.map((item, index) => {
						return (
							<Link key={index} to={"/detail/" + item.get('id')}>
								<ListItem>
									<img className="pic" alt='' src="//upload-images.jianshu.io/upload_images/19418900-27c32b8d63bc2649.jpg?x-oss-process=image/resize,w_360,h_240" />
									<ListInfo>
										<h3 className="title">{item.get('title')}</h3>
										<p className="desc">{item.get('desc')}</p>
									</ListInfo>
								</ListItem>				
							</Link>
						)
					})
				}
				<LoadMore onClick={() => loadMoreList(page)}>加载更多</LoadMore>
			</div>
		)
	}
}

const mapState = (state) => ({
	list: state.getIn(['home', 'articleList']),
	page: state.getIn(['home', 'articlePage'])
});

const mapDispatch = (dispatch) => ({
	loadMoreList(page) {
		dispatch(actionCreators.loadMoreList(page + 1));
	}
});

export default connect(mapState, mapDispatch)(List);

