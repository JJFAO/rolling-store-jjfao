import React, { Component } from 'react';
import { Layout, Input, Row, Col } from "antd";
import ProductCard from './ProductCard';
import { Redirect } from 'react-router-dom';
const { Header, Content, Footer } = Layout;
const { Search } = Input;


export default class Results extends Component {
    state= {
        redirect: false
    }

    setRedirect = () => {
        this.setState({redirect: true})
        console.log('asd');
        
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='results'></Redirect>
        }
    }

    render() {
        const { userName, products } = this.props;
        return (
            <Layout>
            { this.renderRedirect() }
                <Header className="header">
                    <Row>
                        <Col xs={{ span: 5 }} lg={{ span: 3 }}>
                            <img src="/rollingstore.png" className="header-logo" alt="logo" />
                        </Col>
                        <Col xs={{ span: 19 }} lg={{ span: 16 }}>
                            <div className="header-search">
                                {  }
                                <Search
                                    placeholder="¿Qué querés comprar?"
                                    onSearch={ this.setRedirect }
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
                    <p> Resultados </p>
                    <Row>
                    { products.map( prod => (
                        <Col xs={{ span: 24 }} lg={{ span: 8 }}>
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
