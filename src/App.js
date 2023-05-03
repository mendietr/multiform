// import logo from './logo.svg';

import './App.css';
import React from 'react';
import {Route} from 'react-router-dom'
import ApiProduct from './components/ApiProducts/ApiProducts.jsx'
import LocalProduct from './components/LocalProduct/LocalProduct.jsx'
import NavBar from './components/NavBar/NavBar.jsx'
import Create from './components/Create/Create.jsx'
import Detail from './components/Detail/Detail.jsx'


import About from './components/About/About.jsx'
import Home from './components/Home/Home.jsx'


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Route exact path='/'><Home name={'Mercado'} location={'México'}/></Route>
      <Route exact path='/create'><Create/></Route>
      <Route exact path='/products' render={()=> <ApiProduct/>}/>
      <Route exact path='/local' component={LocalProduct}/>
      <Route exact path='/about' component={About}/>
      <Route exact path='/product/:id' component={Detail}/>


    </div>
    );
  }
  
  export default App;
  
  // <header className="App-header">
  //   <img src={logo} className="App-logo" alt="logo" />
  //   <p>
  //     Edit <code>src/App.js</code> and save to reload.
  //   </p>
  //   <a
  //     className="App-link"
  //     href="https://reactjs.org"
  //     target="_blank"
  //     rel="noopener noreferrer"
  //   >
  //     Learn React
  //   </a>
  // </header>