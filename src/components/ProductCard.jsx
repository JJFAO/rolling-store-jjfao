import React, { Component } from 'react'

export default class ProductCard extends Component {
    render() {
        const { name, brand, price } = this.props.product
        return (
            <div className="product-card">
                <div>producto: {name}</div>
                <div>marca: {brand}</div>
                <div>precio: {price}</div>
            </div>
        )
    }
}
