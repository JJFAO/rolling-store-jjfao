import React, { Component } from 'react';
import { Layout, Input, Row, Col } from "antd";
import ProductCard from './ProductCard';
const { Header, Content, Footer } = Layout;
const { Search } = Input;

export default class Main extends Component {
    render() {
        const { userName, products } = this.props;
        return (
            <Layout>
                <Header className="header">
                    <Row>
                        <Col xs={{ span: 5 }} lg={{ span: 3 }}>
                            <img src="/rollingstore.png" className="header-logo" alt="logo" />
                        </Col>
                        <Col xs={{ span: 19 }} lg={{ span: 16 }}>
                            <div className="header-search">
                                <Search
                                    placeholder="¿Qué querés comprar?"
                                    onSearch={ value => console.log(value)}
                                    enterButton
                                />
                            </div>
                        </Col>
                        <Col xs={{ span: 0 }} lg={{ span: 5 }}>
                            <div className="header-greetings">
                            Bienvenido {userName}
                            </div>
                        </Col>
                    </Row>
                </Header>
                <Content className="content">
                    { products.map( prod => 
                        <ProductCard product={prod} />
                    )}
                </Content>
                <Footer className="footer">
                    Footer
                </Footer>
            </Layout>

        )
    }
}
