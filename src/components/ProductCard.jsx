import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ProductCard extends Component {

    getUrl = (id) => (`https://firebasestorage.googleapis.com/v0/b/rolling-store-jjfao.appspot.com/o/${id}.png?alt=media`)

    render() {
        const { name, brand, price, id } = this.props.product
        return (
            <div className="product-card">
                <Link to={`/product/${id}`}>
                    <div style={{ height: '400px', overflow: 'hidden', display: 'flex', alignItems: 'center', background: 'white' }}>
                        <img src={this.getUrl(id)} alt="" style={{ width: '100%' }} />
                    </div>
                    <div>producto: {name}</div>
                    <div>marca: {brand}</div>
                    <div>precio: {price}</div>
                </Link>
            </div>
        )
    }
}
