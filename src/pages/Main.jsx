import React, { Component } from 'react';
import { Row, Col } from "antd";
import ProductCard from '../components/ProductCard';


export default class Main extends Component {

    render() {
        const { products } = this.props;

        return (
            <>
                <p> Basado en tu última visita </p>

                <Row justify="center">
                    {products.map(prod => (
                        <Col key={prod.id} xs={{ span: 24 }} sm={{ span: 12 }} lg={{ span: 8 }} xl={{ span: 6 }} >
                            <ProductCard product={prod} />
                        </Col>
                    ))}
                </Row>
            </>
        )
    }
}
