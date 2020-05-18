import React, { Component } from 'react';
import { Layout, Row, Col } from "antd";
import ProductCard from './ProductCard';
const { Content } = Layout;


export default class Results extends Component {

    render() {
        const { results } = this.props;

        return (
            <Layout>
                {this.renderRedirect()}
                
                <Content className="content">
                    <p> Resultados </p>
                    <Row justify="center">
                        {results.map(prod => (
                            <Col key={prod.name} xs={{ span: 24 }} sm={{ span: 12 }} lg={{ span: 8 }} xl={{ span: 6 }}>
                                <ProductCard product={prod} />
                            </Col>
                        ))}
                    </Row>
                </Content>

            </Layout>

        )
    }
}
