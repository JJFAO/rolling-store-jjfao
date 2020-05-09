// import logo from './rollingstore.png';
import React, { Component } from 'react'
import './App.css';
import 'antd/dist/antd.css';
import Main from './components/Main';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: 'JJ',
      products: [
        {
          id: 'prod01',
          name: 'notebook',
          brand: 'Asus',
          price: 15000
        },
        {
          id: 'prod02',
          name: 'zapatilla',
          brand: 'Nike',
          price: 3500
        },        {
          id: 'prod03',
          name: 'juego de ps4',
          brand: 'Dark Souls',
          price: 2000
        }
      ]
    }
  }

  render() {
    const {userName, products} = this.state;


    return (
      <div className="App">
        <header className="App-container">
          <Main userName={userName} products={products}/>
        </header>
      </div>
    )
  }
}
