import React, {Component} from 'react';

import Header from './components/Header'
import Main from './pages/main/index'

import Routes from './routes'
// import Body from 'k/components/Body/index'
import "./styles.css"


const App = () =>(
  <div className="App">
    <Header/>
    <Routes/>
  </div>
)

 

export default App;
