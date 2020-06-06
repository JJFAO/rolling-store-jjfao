import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom';
import { firebaseApp } from "../utils/firebase";
import { Col, Row, Button } from 'antd';

class Product extends Component {

    constructor(props) {
        super(props);
        this.state = {
            product: {}
        }
    }

    componentDidMount() {
        const ref = firebaseApp.database().ref().child('products');
        const { id } = this.props.match.params;

        ref.orderByChild("id").equalTo(id).on("value", async (snapshot) => {
            this.setState({ product: snapshot.toJSON()[id] });
        });

    }

    getUrl = (id) => (`https://firebasestorage.googleapis.com/v0/b/rolling-store-jjfao.appspot.com/o/${id}.png?alt=media`)

    render() {
        const { product } = this.state;
        const { name, price, brand, id, description, shippingTime } = product;
        const src = this.getUrl(id);
        return (
            <div>
                <p className="title" style={{color: '#1d4cb9'}}> Información del producto id: {id} </p>

                <Row className="productInfo">
                    <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                        <div className="productInfo-imageContainer">
                            <img src={src} className="product-image" style={{ height: '50vh' }} alt="product" />
                        </div>
                    </Col>
                    <br />
                    <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                        <div className="productInfo-description">
                            <div>{`producto: ${name} "${brand}"`} </div>
                            <Row>
                                <Col span={12}> <div>precio: {price} </div> </Col>
                                <Col span={12}> <div>llega en: {shippingTime} </div> </Col>
                            </Row>
                            <br />
                            <div style={{ textAlign: 'left' }}>descripción: {description}</div>
                            <br />

                            <Link
                                to={{
                                    pathname: '/cart/',
                                    state: { product }
                                }}
                            >
                                <Button>Comprar</Button>
                            </Link>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Product;
