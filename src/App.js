// import logo from './rollingstore.png';
import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import Main from './components/Main';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Results from './components/Results';
import { firebaseApp } from "./utils/firebase";
import TheHeader from './components/TheHeader';


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: 'JJ',
            products: [],
            results: [],
        }
        this.productsRef = firebaseApp.database().ref().child('products');
    }

    componentDidMount() {
        this.listenForProducts(this.productsRef);
    }

    listenForProducts(productsRef) {
        productsRef.on('value', snap => {
            let products = [];
            snap.forEach(child => {
                // const { id, name, price, brand } = child.val();
                const prod = child.val();
                products.push(prod);
            });
            this.setState({ products });
        });
    }

    updateList(results) {
        this.setState({ results })
    }

    render() {
        const { userName, products, results } = this.state;
        const updateList = this.updateList.bind(this);

        return (
            <>
            <Router>

                <TheHeader
                    userName={userName}
                    updateList={updateList}
                    products={products}
                />

                <div className="App-container">
                    <Switch>

                        <Route path="/" exact>
                            <Main
                                products={products}
                            />
                        </Route>

                        <Route path="/results">
                            <Results
                                products={products}
                                results={results}
                            />
                        </Route>

                    </Switch>
                </div>

            </Router>
            </>
        )
    }
}
