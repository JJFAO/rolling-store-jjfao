import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { firebaseApp } from "../utils/firebase";

class Product extends Component {

    constructor(props) {
        super(props);
        this.state = {
            product: {}
        }
    }

    getUrl = (id) => (`https://firebasestorage.googleapis.com/v0/b/rolling-store-jjfao.appspot.com/o/${id}.png?alt=media`)

    componentDidMount() {
        const ref = firebaseApp.database().ref().child('products');
        const { id } = this.props.match.params;

        ref.orderByChild("id").equalTo(id).on("value", async (snapshot) => {
            console.log(snapshot.toJSON()[id]);

            this.setState({ product: snapshot.toJSON()[id] });
        });

    }

    render() {
        const { name, price, brand, id } = this.state.product;
        return (
            <div>
                <h3> {name} </h3>
                <img src={this.getUrl(id)} alt="" style={{width: '100%', maxWidth: '400px'}} />
                <p>Marca: {brand} </p>
                <p>Precio: {price} </p>
            </div>
        )
    }
}

export default withRouter(Product);
