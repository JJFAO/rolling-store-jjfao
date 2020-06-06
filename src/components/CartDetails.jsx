import React, { Component } from 'react';
import { Radio, Input, Button } from 'antd';
const { Group } = Radio;

export default class CartDetails extends Component {
  state = {
    creditCard: '',
    shippingAddress: ''
  }

  onWriteAddress = e => {
    this.setState({ shippingAddress: e.target.value })
  }

  onSelectCreditCard = e => {
    this.setState({ creditCard: e.target.value })
  }

  render() {
    const { creditCard, shippingAddress } = this.state
    const { product, updateCart } = this.props
    const radioStyle = { display: 'block' }

    return(
      <div className="cartDetails">
        <p>¿Donde queres recibir tu compra?</p>
        <Input value={shippingAddress} onChange={this.onWriteAddress} />

        <p>¿Que tarjeta querés usar?</p>
        <Group value={creditCard} onChange={this.onSelectCreditCard}>
          <Radio value='visa' style={radioStyle}>
            <p style={{ color: 'white' }}>Visa</p>
          </Radio>
          <Radio value='mastercard' style={radioStyle}>
            <p style={{ color: 'white' }}>MasterCard</p>
          </Radio>
        </Group>

        <Button onClick={() => updateCart(product, creditCard, shippingAddress)}>
          Confirmar compra
        </Button> 
      </div>
    )
  }
}