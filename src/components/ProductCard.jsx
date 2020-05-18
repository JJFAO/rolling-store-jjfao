import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'antd'

export default class ProductCard extends Component {
    render() {
        const { name, brand, price, id } = this.props.product
        return (
            <div className="product-card">
                <div>producto: {name}</div>
                <div>marca: {brand}</div>
                <div>precio: {price}</div>
                <Button type="primary">
                    <Link to={`/product/${id}`}>
                        Ver más
                    </Link>
                </Button>
            </div>
        )
    }
}
