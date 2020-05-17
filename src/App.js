// import logo from './rollingstore.png';
import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import Main from './components/Main';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Results from './components/Results';
import { firebaseApp } from "./utils/firebase";


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: 'JJ',
      products: [],
      results: [],
      term: ''
    }
    this.productsRef = firebaseApp.database().ref().child('products');
  }

  componentDidMount() {
    this.listenForProducts(this.productsRef);
  }

  listenForProducts(productsRef) {
    // firebaseApp.database().ref().on('value', snap => {
    //   snap.forEach(child => {
        
    //   });
    // });
    productsRef.on('value', snap => {
    console.log("App -> listenForProducts -> snap", snap)
      let products = [];
      snap.forEach(child => {
        products.push({
          name: child.val().name,
          brand: child.val().brand,
          price: child.val().price,
          id: child.val().id
        });
      });
      this.setState({ products });
    });
  }

  updateTerm(term) {
    this.setState({ term })
  }

  updateList(results) {
    this.setState({
      results
    })
  }

  render() {
    const { userName, products, term, results } = this.state;
    const updateTerm = this.updateTerm.bind(this);
    const updateList = this.updateList.bind(this);

    return (
      <Router>
        <Switch>
          <Route path="/" exact>
            <div className="App-container">
              <Main
                userName={userName}
                products={products}
                updateTerm={updateTerm}
                term={term}
                updateList={updateList}
              />
            </div>
          </Route>
          <Route path="/results">
            <div className="App-container">
              <Results
                userName={userName}
                products={products}
                results={results}
                updateTerm={updateTerm}
                updateList={updateList}
              />
            </div>
          </Route>
        </Switch>
      </Router>
    )
  }
}
