import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { css } from '@emotion/core'

const POST_MUTATION = gql`
  mutation PostMutation($description: String!, $merchant: String!, $amount: Float!) {
    post(description: $description, merchant: $merchant, amount: $amount) {
      id
      description
      merchant
      amount
    }
  }
`

export class CreateTransaction extends Component {
  state = {
    merchant: '',
    description: '',
    amount: ''
  }

  render () {
    const { merchant, description, amount } = this.state
    return (
      <div>
        <div css={inputStyle}>
          <input onChange={e => this.setState({ merchant: e.target.value })} placeholder='Enter Merchant' type='text' value={merchant} />
          <input onChange={e => this.setState({ description: e.target.value })} placeholder='Enter Description' type='text' value={description} />
          <input onChange={e => this.setState({ amount: e.target.value })} placeholder='Enter Amount' type='text' value={amount} />
        </div>
        <Mutation mutation={POST_MUTATION} variables={{ merchant, description, amount }}>
          {postMutation => <button css={buttonStyle} onClick={postMutation}>Submit</button>}
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
