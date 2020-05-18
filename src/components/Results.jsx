import React, { Component } from 'react';
import { Row, Col } from "antd";
import ProductCard from './ProductCard';


export default class Results extends Component {

    render() {
        const { results } = this.props;

        return (
            <>
                <p> Resultados </p>

                <Row justify="center">
                    {results.map(prod => (
                        <Col key={prod.name} xs={{ span: 24 }} sm={{ span: 12 }} lg={{ span: 8 }} xl={{ span: 6 }}>
                            <ProductCard product={prod} />
                        </Col>
                    ))}
                </Row>
            </>
        )
    }
}
