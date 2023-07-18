import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TopicWrapper, TopicItem } from '../style';

class Topic extends Component {
	render() {
		return (
			<TopicWrapper>
				{
					this.props.list.map((item) => {
						return (
							<TopicItem key={item.get('id')}>
								<img 
									className="topic-pic"
									src="//upload.jianshu.io/users/upload_avatars/301940/189d69dd-af7c-4290-9e2c-89e98acf3603.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"
								/>
								{item.get('id')}-{item.get('title')}
							</TopicItem>
						)
					})
				}
				
				
			</TopicWrapper>
		)
	}
}

const mapState = (state) => ({
	list: state.get('home').get('topicList')
});

export default connect(mapState, null)(Topic);