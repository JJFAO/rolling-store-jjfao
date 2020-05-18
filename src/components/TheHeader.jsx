import React from 'react'
import { Layout, Row, Col, Input } from "antd";
import { withRouter, Link, /* Redirect */ } from 'react-router-dom';
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

    // setRedirect = () => {
    //   this.setState({ redirect: true })
    // }

    handleSearch = (term) => {
        const { pathname } = this.props.location;
        const { history } = this.props;
        
        if (!term) {
            history.replace('/')
        } else if (pathname.includes('results')) {
            history.replace('/results/' + term)
        } else {
            history.push('/results/' + term);
        }

        // this.setRedirect();
    }

    render() {
        const { userName } = this.props;
        // const { redirect } = this.state;

        return (
            <Header className="header">

                {/* {redirect && <Redirect to='/results'></Redirect>} */}

                <Row>

                    <Col xs={{ span: 5 }} lg={{ span: 3 }}>
                        <Link to="/" >
                            <img src="/rollingstore.png" className="header-logo" alt="logo" />
                        </Link>
                    </Col>

                    <Col xs={{ span: 19 }} lg={{ span: 16 }}>
                        <div className="header-search">
                            <Search
                                placeholder="¿Qué querés comprar?"
                                onSearch={this.handleSearch}
                                enterButton
                                maxLength="30"
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
