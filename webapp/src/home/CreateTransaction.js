import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

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
        <div>
          <input onChange={e => this.setState({ merchant: e.target.value })} placeholder='Enter Merchant' type='text' value={merchant} />
          <input onChange={e => this.setState({ description: e.target.value })} placeholder='Enter Description' type='text' value={description} />
          <input onChange={e => this.setState({ amount: e.target.value })} placeholder='Enter Amount' type='text' value={amount} />
        </div>
        <Mutation mutation={POST_MUTATION} variables={{ merchant, description, amount }}>
          {postMutation => <button onClick={postMutation}>Submit</button>}
        </Mutation>
      </div>
    )
  }
}
