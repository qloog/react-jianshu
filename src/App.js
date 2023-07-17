import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './common/header';
import Home from './pages/home';
import store from './store';

class App extends Component {
  render() {
    return (
    	<Provider store={store}>
    		<div>
	      	<Header />
	      	<BrowserRouter>
	      		<Routes>
	      			<Route exact path='/' element={<Home />}></Route>
	      			<Route path='/detail' element={<Detail />} />
	      		</Routes>
	      	</BrowserRouter>
      	</div>
      </Provider>
    );
  }
}


function Detail() {
  return (
    <div>
      <h2>Detail</h2>
    </div>
  );
}


export default App;


