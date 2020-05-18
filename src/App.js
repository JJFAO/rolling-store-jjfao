// import logo from './rollingstore.png';
import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import { firebaseApp } from "./utils/firebase";
import Main from './components/Main';
import Results from './components/Results';
import TheHeader from './components/TheHeader';
import TheFooter from './components/TheFooter';
import Product from './components/Product';
import Cart from './components/Cart';
import Success from './components/Success';
const { Content } = Layout;


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
            <Router>
                <div className="App-container">
                    <Layout>

                        <TheHeader userName={userName} updateList={updateList} products={products} />

                        <Content className="content">
                            <Switch>

                                <Route path="/" exact>
                                    <Main products={products} />
                                </Route>

                                <Route path="/results">
                                    <Results products={products} results={results} />
                                </Route>

                                <Route path="/product/:id" >
                                    <Product />
                                </Route>

                                <Route path="/cart" >
                                    <Cart />
                                </Route>

                                <Route path="/success" >
                                    <Success />
                                </Route>

                            </Switch>
                        </Content>

                        <TheFooter />

                    </Layout>
                </div>
            </Router>
        )
    }
}
