import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import {
	HeaderWrapper,
	Logo,
	Nav, NavItem,
	SearchWrapper,
	NavSearch,
	Addition,
	Button
} from './style';

const Header = (props) => {
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
						in={props.focused}
						timeout={200}
						classNames="slide"
					>
						<NavSearch
							className={props.focused ? 'focused' : ''}
							onFocus={props.handleInputFocus}
							onBlur={props.handleInputBlur}
						></NavSearch>
					</CSSTransition>
				</SearchWrapper>
			</Nav>
			<Addition>
				<Button className="writting">写文章</Button>
				<Button className="reg">注册</Button>
			</Addition>
		</HeaderWrapper>
	);
}

const mapStateToProps = (state) => {
	return {
		focused: state.header.get('focused')
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		handleInputFocus() {
			dispatch(actionCreators.searchFocus());
		},
		handleInputBlur() {
			dispatch(actionCreators.searchBlur());
		}

	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);