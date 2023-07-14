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

到这里就可以开发自己的组件了

1、增加header组件

包括：logo, Nav菜单, 按钮和搜索框及动画

2、数据管理-含详细修改步骤

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




