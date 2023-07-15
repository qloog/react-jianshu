# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## 开发项目

### 安装脚手架

```
npm install -g create-react-app
```

### 新建项目

```
create-react-app jianshu-react
```

> 使用 5.0+的 create-react-app 创建的project, App.js 中的代码风格为函数式的，如果想写类风格的，需要手动修改，这里手动改为了类风格

### 安装 styled-component

```
npm install styled-component
```

> 相比于在一个样式文件里写样式，使用 `styled-component` 的方式写样式更好管理，而且css都是分散在每一个子组件中

### 配置 reset.css

为了让不同的浏览器表现形式更加一致，所以需要将全局默认样式统一，重置css  

可以使用 `https://meyerweb.com/eric/tools/css/reset/` 这里的样式  

然后在 `src/style.js(style.css->style.js)` 中配置

```js
import { createGlobalStyle } from 'styled-components';

createGlobalStyle`
  // 这里是具体的css
`
````

### 开发具体的组件

到这里就可以开发自己的业务组件了

1、增加header组件

包括：logo, Nav菜单, 按钮和搜索框及动画

2、使用react-redux进行应用的数据管理

为了让数据管理更加方便，这里安装redux

```bash
npm install redux --save
npm install react-redux --save
```

3、新建store和reducer

新建store `src/store/index.js` 

```javascript
import { createStore } from 'redux';
import reducer from './reducer';

const store = createStore(reducer);

export default store;
```

新建reducer `src/store/reducer.js`

```javascript
const defaultState = {};

// NOTE: reducer 必须是一个纯函数
export default (state = defaultState, action) => {
	return state;
}
```

> 这里需要回忆下 redux中 store和reducer之间的关系

4、在App.js中引入 store

```
// src/App.js
...
import store from './store';
```

4、在App.js中引入 Provider

```
// src/App.js
...
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
    	<Provider store={store}>
      		<Header />
      	</Provider>
    );
  }
}

```

`Provider` 主要的目的是连接 `store`，这样它的子组件就都有能力使用 `store` 中的数据了。

5、在组件中进行连接

在 `src/header/index.js` 中增加 `connect`, 并修改export

```
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
	return {

	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		
	}
}

// export default Header 改为如下
export default connect(mapStateToProps, mapDispatchToProps)(Header);
```

6、将数据定义在store中

此时需要将原来 header 中的数据转移到 store中, 同时删除原来 state

```
// 在 src/store/reducer.js，增加
const defaultState = {
	focused: false
};


// 在 src/header/index.js， 删除constructor中的
this.state = {
	focused: false
}

```

6、修改组件中的数据获取方式

a. 先将store中的数据映射为组件的props

```
const mapStateToProps = (state) => {
	return {
		focused: state.focused
	}
}
```

b. 在修改获取方式

由原来的 `this.state.focused` 改为 `this.props.focused`

c. 修改改变原state的函数

删除原来的 `handleInputFocus` 和 `handleInputBlur` 以及 `constructor` 函数，
然后使用 `redux flow` 的那一套流程来接管。

具体修改步骤：
将原来的 `this.handleInputFocus` 改为 `this.props.handleInputFocus`, 然后在 `mapDispatchToProps` 中增加 `handleInputFocus`, 再补充对应的逻辑。

```
const mapDispatchToProps = (dispatch) => {
	return {
		handleInputFocus() {
			const action = {
				type: 'search_focus'
			};
			dispatch(action);
		},
	}
}
```
在 `reducer.js` 中增加对应的处理

```
export default (state = defaultState, action) => {
	if (action.type === 'search_focus') {
		return {
			focused: true
		}
	}
	return state;
}
```

`handleInputBlur` 同理修改即可。

7、优化 header 组件

此时 header 组件只剩下 render 函数了，所以可以优化成为一个 **无状态组件**

```
// 新
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

// 旧
class Header extends Component {

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
					</SearchWrapper>
				</Nav>
				<Addition>
					<Button className="writting">写文章</Button>
					<Button className="reg">注册</Button>
				</Addition>
			</HeaderWrapper>
		)
	}
}
```

> NOTE: 需要去掉新写法中的 `this`
> 改写后好处：性能比较好，因为少了原写法里的一些生命周期函数

8、安装 redux-devtools 工具

为了方便进行本地调试，这里安装一个调试工具 `https://github.com/reduxjs/redux-devtools`

根据说明文档(https://github.com/reduxjs/redux-devtools/tree/main/extension#12-advanced-store-setup)，进行代码配置, 如下

```
import { createStore, compose } from 'redux';
import reducer from './reducer';

// 新增
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// 在下面代码添加 composeEnhancers()
const store = createStore(reducer, composeEnhancers());

export default store;
```

9、使用 combineReducers 优化代码

- 1. 随着业务代码越写越多，我们的 `src/store/reducer` 里的代码量也会越来越多，变的不好维护  
- 2. 此时我们可以将 `src/store/reducer` 里的代码进行拆分，将其业务代码写到对应的组件内, 比如 `src/common/header/score/reducer`  
- 3. 然后使用 `combineReducers` 在 `src/store/reducer` 中进行组合

10、actionCreators与constants的拆分

为了方便action和常量的统一管理，会对 `header/index` 中的action创建和 `header/reducer` 的 action 常量进行拆分

在组件 `header` 中新建 `actionCreators.js` 和 `contants.js`， 然后填充对应的内容。

```
// actionCreators.js
import * as contants from './contants';

export const searchFocus = () => ({
	type: contants.SEARCH_FOCUS
});

export const searchBlur = () => ({
	type: contants.SEARCH_BLUR
});

// contants.js
export const SEARCH_FOCUS = 'header/SEARCH_FOCUS';
export const SEARCH_BLUR = 'header/SEARCH_BLUR';

```

10、统一store出口

为了store的使用，会将store下的内容，都统一在 `index.js` 中进行导出。

```
import reducer from './reducer';
// 导出
import * as actionCreators from './actionCreators';
import * as contants from './contants';

export { reducer, actionCreators, contants };
```

11、使用 Immutable.js来管理store中的数据

对于 `reducer` 中的 state 的数据 **一定是不能修改的**， 需要牢记，只能copy后修改再返回

为了防止开发过程的对原始 state 的修改，这里引入 `Immutable` 组件来管理，`Immutable` 是由fackbook团队历时3年所开发的

Immutable 直译就是不可改变，通过引入 Immutable 来生成一个 Immutable 对象

a. 安装 Immutable

```
npm install immutable
```

b. 将 state 变为 Immutable 对象

> 所有调用state的地方都要改为 Immutable 对象的形式

```
// reducer中的 defaultState 要改为 Immutable 对象
const defaultState = fromJS({
	focused: false
});

// 对获取的修改
state.get('focused');

// 对写入的修改
// immutable对象的set方法，会结合之前immutable之前的值和设置的值，返回一个全新的对象
state.set('focused', true);
```

12、使用 redux-immutable 统一数据格式 

以 `state.header.get('focused')` 为例，state是一个js对象，header是一个 `immutable` 对象，行为不统一
我们希望统一为 `immutable` 对象, 这时需要引入一个第三方库 `redux-immutable` 来统一管理.

```
// 安装 redux-immutable
npm install redux-immutable

// 修改 src/store/reducer 中的 combineReducers
import { combineReducers } from 'redux';
改为
import { combineReducers } from 'redux-immutable';
// 改完后的 `combineReducers` 就是一个 immutable 对象了。

// 修改获取值的地方, 此时的state是一个 immutable 对象了
state.get('header').get('focused')
// or 和上面的get是等价的
state.getIn['header', 'focused']
```

13、增加搜索标签组件

主要是ui的布局处理

14、安装 redux-thunk

> 将header的无状态组件改为带类风格组件，方便后续方法方便获取参数，不用来回传递参数。

为了 **在action中可以传递函数** (默认只能传递对象)，需要安装一个 redux中间件(action和store之间) `redux-thunk`

```
npm install redux-thunk
```

使用 `redux-thunk`, 即在 `store/index.js` 中进行简单配置

```
import { createStore, compose, applyMiddleware } from 'redux';
// 新增
import thunk from 'redux-thunk';
import reducer from './reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(
	// 新增
	applyMiddleware(thunk);
));

export default store;
```

15、从接口中获取数据

新增调用 `dispatch(actionCreators.getSearchTagList());`

然后在 `actionCreators` 里增加 `getSearchTagList` 函数(注意：不是返回的对象了)

为了能调用远程api, 这了安装一个http库 `axios`

```
npm install axios
```

新增函数

```
// src/commom/header/actionCreators.js
export const getSearchTagList = () => {
	return (dispatch) => {
		// 配发一个异步的请求
		axios.get('/api/rec_taglist.json').then((res) => {
			const data = res.data;
			// 派发action给store
			dispatch(changeList(data.data));
		}).catch(() => {
			console.log('error');
		})
	}
};
```

> 注意数据格式(js格式和immutable格式)之间传递保持一致，需要使用 fromJS 进行转换

从 store 中获取 list

```
const mapStateToProps = (state) => {
	return {
		focused: state.get('header').get('focused'),
		list: state.get('header').get('list')
	}
}
```

最后在ui组件中使用 `list.map` 进行展示。







