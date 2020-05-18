import React, { Component } from 'react';
import { Layout,  Row, Col } from "antd";
import ProductCard from './ProductCard';
const { Content, Footer } = Layout;


export default class Main extends Component {

    render() {
        const { products } = this.props;

        return (
            <Layout>
                <Content className="content">
                    <p> Basado en tu última visita </p>
                    <Row justify="center">

                        {products.map(prod => (
                            <Col key={prod.id} xs={{ span: 24 }} sm={{ span: 12 }} lg={{ span: 8 }} xl={{ span: 6 }} >
                                <ProductCard product={prod} />
                            </Col>
                        ))}

                    </Row>
                </Content>

                <Footer className="footer">
                    Footer
                </Footer>
            </Layout>

        )
    }
}
