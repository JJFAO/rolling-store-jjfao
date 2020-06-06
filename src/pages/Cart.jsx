import React, { Component } from 'react';
import { Layout, Row, Col } from 'antd';
import ProductCard from '../components/ProductCard';
import CartDetails from '../components/CartDetails';
const { Content } = Layout;

export default class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            creditCard: '',
            shippingAddress: ''
        }
    }

    componentDidMount() {
        const { product } = this.props.location.state
        this.props.updateCart(product)
    }

    render() {
        const { product } = this.props.location.state
        const { updateCart } = this.props

        return (
            <>
                <p className="title"> Mi carrito </p>
                <Row justify={'center'}>
                    <Col xs={{ span: 24 }} lg={{ span: 12 }} xl={{span: 6}}>
                        <CartDetails product={product} updateCart={updateCart} />
                    </Col>
                    <Col xs={{ span: 24 }} lg={{ span: 12 }} xl={{span: 6}}>
                        <ProductCard product={product} />
                    </Col>
                </Row>
            </>
        )
    }
}