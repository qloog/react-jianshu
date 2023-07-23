import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './common/header';
import Home from './pages/home';
import Login from './pages/login';
import Detail from './pages/detail';
import Write from './pages/write';
import store from './store';

class App extends Component {
  render() {
    return (
    	<Provider store={store}>	
      	<BrowserRouter>
          <Header />
      		<Routes>
      			<Route exact path='/' element={<Home />}></Route>
            <Route exact path='/login' element={<Login />}></Route>
      			<Route path='/detail/:id' element={<Detail />} />
            <Route path='/write' element={<Write />} />
      		</Routes>
      	</BrowserRouter>
      </Provider>
    );
  }
}

export default App;


