import React from 'react'
import { Layout, Row, Col } from "antd";
import Search from 'antd/lib/transfer/search';
const { Header } = Layout;

class TheHeader extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        }
        console.log(this.props.location);
        
    }

    handleSearch = (term) => {
        let currentProducts = [];
        let newProducts = [];

        if (term !== '') {
            currentProducts = this.props.products;
            newProducts = currentProducts.filter(item => {
                const lc = item.name.toLowerCase();
                const filter = term.toLowerCase();
                return lc.includes(filter)
            })
        } else {
            newProducts = this.props.products
        }
        this.props.updateList(newProducts);
        
    }
    
    handleChange = (e) => {
        let term = e.target.value;
        this.props.updateTerm(term)
    }


    render() {
        const {userName} = this.props;
        return (
            <Header className="header">
                <Row>
                    <Col xs={{ span: 5 }} lg={{ span: 3 }}>
                        <img src="/rollingstore.png" className="header-logo" alt="logo" />
                    </Col>
                    <Col xs={{ span: 19 }} lg={{ span: 16 }}>
                        <div className="header-search">
                            <Search
                                placeholder="¿Qué querés comprar?"
                                onSearch={this.handleSearch}
                                onChange={this.handleChange}
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
        )
    }
}

export default TheHeader
