import React, { Component } from 'react'
import { Layout } from 'antd';
const { Footer } = Layout;

export default class TheFooter extends Component {
    render() {
        return (
            <Footer className="footer">
                <div className="footer-opacity">
                Footer
                </div>
            </Footer>
        )
    }
}
