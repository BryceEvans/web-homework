import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { css } from '@emotion/core'

const ADD_TRANSACTION = gql`
  mutation AddTransaction ($amount: Float!) {
    addTransaction(amount: $amount) {
      # id
      # merchant_id
      # description
      amount
      # credit
      # debit
  }
}
`

export class CreateTransaction extends Component {
  state = {
    // merchant_id: '',
    // description: '',
    amount: ''
    // credit: true,
    // debit: false
  }

  render () {
    const { amount } = this.state
    return (
      <div>
        <div css={inputStyle}>
          {/* <input onChange={e => this.setState({ merchant: e.target.value })} placeholder='Enter Merchant' type='text' value={merchant} />
          <input onChange={e => this.setState({ description: e.target.value })} placeholder='Enter Description' type='text' value={description} /> */}
          <input onChange={e => this.setState({ amount: e.target.value })} placeholder='Enter Amount' type='text' value={amount} />
        </div>
        <Mutation mutation={ADD_TRANSACTION} variables={{ amount }}>
          {AddTransaction => <button css={buttonStyle} onClick={AddTransaction}>Submit</button>}
        </Mutation>
      </div>
    )
  }
}

const inputStyle = css`
    display: grid;
    grid-row-gap: 24px;
    padding: 8px;
`

const buttonStyle = css`
    background-color: green;
    color: white;
    padding: 8px;
    border-radius: 10px;
    margin-top: 5px;
    margin-right: 25px;
`
