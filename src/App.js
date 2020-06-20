// import logo from './rollingstore.png';
import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import { firebaseApp } from "./utils/firebase";
import Main from './pages/Main';
import Results from './pages/Results';
import TheHeader from './components/TheHeader';
import TheFooter from './components/TheFooter';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Success from './pages/Success';
import { connect } from "react-redux";
import { getVisibleProducts } from "./reducers/products";
const { Content } = Layout;


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: 'JJ',
            // products: [],
            results: [],
            cart: {
                productToBuy: {},
                creditCard: '',
                shippingAddress: ''
              },
        }
        // this.productsRef = firebaseApp.database().ref().child('products');
    }

    // componentDidMount() {
    //     this.listenForProducts(this.productsRef);
    // }

    // listenForProducts(productsRef) {
    //     productsRef.on('value', snap => {
    //         let products = [];
    //         snap.forEach(child => {
    //             // const { id, name, price, brand } = child.val();
    //             const prod = child.val();
    //             products.push(prod);
    //         });
    //         this.setState({ products });
    //     });
    // }

    updateCart(prod, creditCard = '', shippingAddress = '') {
        this.setState({
          cart: {
              productToBuy: { ...prod },
              creditCard,
              shippingAddress
            }
        })
        // console.log("App -> updateCart -> cart", prod, creditCard, shippingAddress)
      }

    render() {
        const { products } = this.props;
        const { userName } = this.state;
        const updateCart = this.updateCart.bind(this);

        return (
            <Router>
                <div className="App-container">
                    <Layout>

                        <TheHeader userName={userName}/>

                        <Content className="content">
                            <Switch>

                                <Route path="/" exact>
                                    <Main products={products} />
                                </Route>

                                <Route path="/results/:term" >
                                    <Results products={products} />
                                </Route>

                                <Route path="/product/:id" component={Product} />

                                <Route path="/cart" render={props => <Cart {...props} updateCart={updateCart} />} />

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

const mapStateToProps = state => ({
    products: getVisibleProducts(state.products)
  })
  
  export default connect(
    mapStateToProps
  )(App)