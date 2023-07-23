import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RecWrapper, RecItem } from '../style';

class Recommend extends Component {
	render() {
		const { list } = this.props;
		return (
			<RecWrapper>
				{
					list.map((item, index) => {
						return (
							<RecItem key={item.get('id')} id={item.get('id')} imgurl={item.get('imgURL')} >
							</RecItem>			
						)
					})
				}
			</RecWrapper>
		)
	}
}

const mapState = (state) => ({
	list: state.getIn(['home', 'recList'])
});

export default connect(mapState, null)(Recommend);