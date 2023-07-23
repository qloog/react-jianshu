import React, { Component } from 'react';
import { connect } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

// 使用 react-router-dom v6 版本，在 类模式下无法使用 useParams 获取到参数
// 所以增加以下func来处理，然后通过console.log就可以看到 match属性了
// see: https://stackoverflow.com/questions/64782949/how-to-pass-params-into-link-using-react-router-v6
export function withRouter(Children){
   return(props)=>{

      const match  = {params: useParams()};
      const navigate  = useNavigate();
      return <Children {...props}  match = {match} navigate = {navigate}/>
  }
}

class Write extends Component {
	render() {
		return (
			<div>写文章页面</div>
		);
	}

	componentDidMount() {
    const { loginStatus, navigate } = this.props;
    if (!loginStatus) {
      navigate('/login');
    }
  }
}

const mapState = (state) => ({
	loginStatus: state.getIn(['login', 'login'])
});

const mapDispatch = (dispatch) => ({
	
});

export default connect(mapState, mapDispatch)(withRouter(Write));

