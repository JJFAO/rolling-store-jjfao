import React, { Component } from 'react';
import { Row, Col } from "antd";
import ProductCard from '../components/ProductCard';
import { withRouter } from 'react-router-dom';


class Results extends Component {

    constructor(props) {
        super(props);
        this.state = {
            results: [],
        }
    }

    componentDidMount() {
        const { products } = this.props;
        const { term } = this.props.match.params;
        const results = this.filterProducts(term, products);
        this.setState({ results });
    }

    componentDidUpdate(prevProps) {
        const { products, match: { params: { term } } } = this.props;
        const { products: prevProds } = prevProps;
        const prevTerm = prevProps.match.params.term;

        if (products !== prevProds || term !== prevTerm) {
            const results = this.filterProducts(term, products);
            this.setState({ results });
        }
    }

    filterProducts = (term, products) => {
        return products.filter(({ name }) => {
            const lc = name.toLowerCase();
            const filter = term.toLowerCase();
            return lc.includes(filter);
        })
    }

    render() {
        const { results } = this.state;

        return (
            <>
                <p> Resultados </p>

                <Row justify="center">
                    {results.map(prod => (
                        <Col key={prod.id} xs={{ span: 24 }} sm={{ span: 12 }} lg={{ span: 8 }} xl={{ span: 6 }}>
                            <ProductCard product={prod} />
                        </Col>
                    ))}
                </Row>
            </>
        )
    }
}

export default withRouter(Results);
