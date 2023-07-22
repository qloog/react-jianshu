import React, { Component } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { DetailWrapper, Header, Content } from './style';
import { actionCreators } from './store'

// 使用 react-router-dom v6 版本，在 类模式下无法使用 useParams 获取到参数
// 所以增加以下func来处理，然后通过console.log就可以看到 match属性了
// see: https://stackoverflow.com/questions/64782949/how-to-pass-params-into-link-using-react-router-v6
export function withRouter(Children){
   return(props)=>{

      const match  = {params: useParams()};
      return <Children {...props}  match = {match}/>
  }
}

class Detail extends Component {
	render() {
		return (
			<DetailWrapper>
				<Header>
					{this.props.title}
				</Header>
				<Content 
					dangerouslySetInnerHTML={{__html: this.props.content}}
				/>
			</DetailWrapper>
		)
	}

	componentDidMount() {
		this.props.getDetail(this.props.match.params.id);
	}
}

const mapState = (state) => ({
	title: state.getIn(['detail', 'title']),
	content: state.getIn(['detail', 'content'])
});

const mapDispatch = (dispatch) => ({
	getDetail(id) {
		dispatch(actionCreators.getDetail(id))
	}
});

export default connect(mapState, mapDispatch)(withRouter(Detail));