import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './common/header';
import store from './store';

class App extends Component {
  render() {
    return (
    	<Provider store={store}>
    		<div>
	      	<Header />
	      	<BrowserRouter>
	      		<Routes>
	      			<Route exact path='/' element={<Home />} />
	      			<Route path='/detail' element={<Detail />} />
	      		</Routes>
	      	</BrowserRouter>
      	</div>
      </Provider>
    );
  }
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}


function Detail() {
  return (
    <div>
      <h2>Detail</h2>
    </div>
  );
}


export default App;


