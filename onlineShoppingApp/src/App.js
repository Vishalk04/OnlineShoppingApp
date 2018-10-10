import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import OrderList from './container/OrderList';

class App extends Component {
  render() {
    return (
                <div className="App">
                        <div>
                        <h1>React-Redux -[IssueTracker -Demo]</h1>
                        <hr/>
                        <h2>Issue-List</h2>
                        <OrderList/>
                        <hr/> 
                        <h2>Issue-Detail</h2>
                  </div>
                </div>
    );
  }
}

export default App;
