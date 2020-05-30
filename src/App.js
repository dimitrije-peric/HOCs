import React, { Component } from 'react';
import Hoc from './HOC';
import StockList from './StockList';
import UserList from './UserList';

const StocksData = [
  {
    id: 1,
    name: 'TSC'
  },
  {
      id: 2,
      name: 'DGS'
  },
  {
      id: 3,
      name: 'DIS'
  }
];

const UserData = [
  {
    id: 1,
    name: 'Krunal'
      
  },
  {
      id: 2,
      name: 'Ankit'
  },
  {
      id: 3,
      name: 'Rushabh'
  }
];

const Stocks = Hoc(
  StockList,
  StocksData
);

const Users = Hoc(
  UserList,
  UserData
);

class App extends Component {
  render() {
    return (
      <div>
        <Users></Users>
      </div>
    )
  }
}

// App=HOC(App);
export default App; 