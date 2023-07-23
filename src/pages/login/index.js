import React, { Component } from 'react';
import { connect } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { actionCreators } from './store'
import { LoginWrapper, LoginBox, Input, Button } from './style';

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

class Login extends Component {
	render() {
		const { loginStatus, navigate } = this.props;
		
		if (!loginStatus) {
			return (
				<LoginWrapper>
					<LoginBox>
						<Input placeholder="用户名" ref={(input) => {this.account = input}}/>
						<Input placeholder="密码" type="password"  ref={(input) => {this.password = input}}/>
						<Button onClick={() => this.props.login(this.account, this.password)}>登录</Button>
					</LoginBox>
				</LoginWrapper>
			)
		} else {
			return navigate('/');
		}
		
	}
}

const mapState = (state) => ({
	loginStatus: state.getIn(['login', 'login'])
});

const mapDispatch = (dispatch) => ({
	login(accountElem, passwordElem) {
		dispatch(actionCreators.login(accountElem.value, passwordElem.value));
	}
});

export default connect(mapState, mapDispatch)(withRouter(Login));

