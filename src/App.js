import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import CustomCellEditTable from './components/bootstrapTable/CustomCellEditTable';

var products = [{
      id: 1,
      name: "Product1",
      price: 120
  }, {
      id: 2,
      name: "Product2",
      price: 80
  }];


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <CustomCellEditTable data={products} />
      </div>
    );
  }
}

export default App;
