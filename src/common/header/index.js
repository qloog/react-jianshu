import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import {
	HeaderWrapper,
	Logo,
	Nav, NavItem,
	SearchWrapper,
	NavSearch,
	Addition,
	Button
} from './style';

class Header extends Component {

	constructor(props) {
		super(props);
		this.state = {
			focused: false
		}

		this.handleInputFocus = this.handleInputFocus.bind(this);
		this.handleInputBlur = this.handleInputBlur.bind(this);
	}

	render() {
		return (
			<HeaderWrapper>
				<Logo />
				<Nav>
					<NavItem className="left active">首页</NavItem>
					<NavItem className="left">下载</NavItem>
					<NavItem className="right">AA</NavItem>
					<NavItem className="right">登录</NavItem>
					<SearchWrapper>
						<CSSTransition
							in={this.state.focused}
							timeout={200}
							classNames="slide"
						>
							<NavSearch
								className={this.state.focused ? 'focused' : ''}
								onFocus={this.handleInputFocus}
								onBlur={this.handleInputBlur}
							></NavSearch>
						</CSSTransition>
					</SearchWrapper>
				</Nav>
				<Addition>
					<Button className="writting">写文章</Button>
					<Button className="reg">注册</Button>
				</Addition>
			</HeaderWrapper>
		)
	}

	handleInputFocus() {
		this.setState({
			focused: true
		})
	}

	handleInputBlur() {
		this.setState({
			focused: false
		})
	}
}

export default Header;