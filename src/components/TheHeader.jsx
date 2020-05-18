import React from 'react'
import { Layout, Row, Col, Input } from "antd";
import { withRouter, /* Redirect */ } from 'react-router-dom';
const { Header } = Layout;
const { Search } = Input;

class TheHeader extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            // term: ''
        }
        // this.updateTerm = this.updateTerm.bind(this);
    }

    // updateTerm(term) {
    //   this.setState({ term })
    // }

    // handleChange = (e) => {
    //   let term = e.target.value;
    //   this.updateTerm(term)
    // }

    handleSearch = (term) => {
        const currentProducts = this.props.products;
        let newProducts = [];

        if (term !== '') {
            newProducts = currentProducts.filter(({ name }) => {
                const lc = name.toLowerCase();
                const filter = term.toLowerCase();
                return lc.includes(filter);
            })
        } else {
            newProducts = currentProducts;
        }
        this.props.updateList(newProducts);
        this.props.history.push('/results');
        // this.setRedirect();
    }

    // setRedirect = () => {
    //   this.setState({ redirect: true })
    // }


    render() {
        const { userName } = this.props;
        // const { redirect } = this.state;

        return (
            <Header className="header">

                {/* {redirect && <Redirect to='/results'></Redirect>} */}

                <Row>

                    <Col xs={{ span: 5 }} lg={{ span: 3 }}>
                        <img src="/rollingstore.png" className="header-logo" alt="logo" />
                    </Col>

                    <Col xs={{ span: 19 }} lg={{ span: 16 }}>
                        <div className="header-search">
                            <Search
                                placeholder="¿Qué querés comprar?"
                                onSearch={this.handleSearch}
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

export default withRouter(TheHeader)
