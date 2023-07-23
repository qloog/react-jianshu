import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import { actionCreators as loginActionCreators} from '../../pages/login/store';
import {
	HeaderWrapper,
	Logo,
	Nav, NavItem,
	SearchWrapper,
	NavSearch,
	SearchInfo,
	SearchInfoTitle,
	SearchInfoSwitch,
	SearchInfoItem,
	Addition,
	Button
} from './style';

class Header extends Component {

	getSearchTag() {
		const { focused, mouseIn, list, page, totalPage, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
		const newList = list.toJS(); // immutable -> js
		const pageList = [];

		if (newList.length) {
			for (let i = (page - 1)*10; i < page * 10; i++) {
				pageList.push(
					<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>			
				)
			}	
		}
		

		if (focused || mouseIn) {
			return (
				<SearchInfo 
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
				>
					<SearchInfoTitle>
						热门搜索
						<SearchInfoSwitch onClick={() => handleChangePage(page, totalPage)}>换一换</SearchInfoSwitch>
					</SearchInfoTitle>
					<div>
						{pageList}
					</div>
				</SearchInfo>
			);
		} else {
			return null;
		}
	}

	render () {
		return (
			<HeaderWrapper>
				<Link to='/'>
					<Logo />
				</Link>
				<Nav>
					<NavItem className="left active">首页</NavItem>
					<NavItem className="left">下载</NavItem>
					<NavItem className="right">AA</NavItem>
					{
						this.props.login 
						? <NavItem onClick={this.props.logout}className="right">退出</NavItem>
						: <Link to='/login'><NavItem className="right">登录</NavItem></Link>
					}
					<SearchWrapper>
						<CSSTransition
							in={this.props.focused}
							timeout={200}
							classNames="slide"
						>
							<NavSearch
								className={this.props.focused ? 'focused' : ''}
								onFocus={this.props.handleInputFocus}
								onBlur={this.props.handleInputBlur}
							></NavSearch>
						</CSSTransition>
						{ this.getSearchTag(this.props.focused) }
					</SearchWrapper>
				</Nav>
				<Addition>
					<Link to='/write'>
						<Button className="writting">写文章</Button>
					</Link>
					<Button className="reg">注册</Button>
				</Addition>
			</HeaderWrapper>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		focused: state.get('header').get('focused'),
		list: state.get('header').get('list'),
		page: state.get('header').get('page'),
		totalPage: state.get('header').get('totalPage'),
		mouseIn: state.get('header').get('mouseIn'),
		login: state.get('login').get('login')
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		handleInputFocus() {
			dispatch(actionCreators.getSearchTagList());
			dispatch(actionCreators.searchFocus());
		},
		handleInputBlur() {
			dispatch(actionCreators.searchBlur());
		},
		handleMouseEnter() {
			dispatch(actionCreators.mouseEnter());	
		},
		handleMouseLeave() {
			dispatch(actionCreators.mouseLeave());	
		},
		handleChangePage(page, totalPage) {
			if (page < totalPage) {
				dispatch(actionCreators.changePage(page + 1));		
			} else {
				dispatch(actionCreators.changePage(1));		
			}
		},
		logout() {
			dispatch(loginActionCreators.logout());	
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);