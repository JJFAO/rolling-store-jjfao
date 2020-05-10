// import logo from './rollingstore.png';
import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import Main from './components/Main';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Results from './components/Results';


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
        }, {
          id: 'prod03',
          name: 'juego de ps4',
          brand: 'Dark Souls',
          price: 2000
        }
      ],
      results: [],
      term: ''
    }
  }

  updateTerm(term) {
    this.setState({ term })
  }

  updateList(newList, term) {
    const { products } = this.state;
    term !== '' ?
    this.setState({
      results: newList,
      term
    }) :
    this.setState({results: products})
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
