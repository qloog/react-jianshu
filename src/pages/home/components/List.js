import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListItem, ListInfo } from '../style';

class List extends Component {
	render() {
		const { list } = this.props;
		return (
			<div>
				{
					list.map((item) => {
						return (
							<ListItem key={item.get('id')}>
								<img className="pic" src="//upload-images.jianshu.io/upload_images/19418900-27c32b8d63bc2649.jpg?x-oss-process=image/resize,w_360,h_240" />
								<ListInfo>
									<h3 className="title">{item.get('title')}</h3>
									<p className="desc">{item.get('desc')}</p>
								</ListInfo>
							</ListItem>				
						)
					})
				}
			</div>
		)
	}
}

const mapState = (state) => ({
	list: state.getIn(['home', 'articleList'])
});

export default connect(mapState, null)(List);

