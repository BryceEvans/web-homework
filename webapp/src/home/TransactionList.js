import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { Transaction } from './index'

const TRANSACTION_QUERY = gql`
  {
    transactions {
      id
      # merchant
      # description
      amount
      # credit
      # debit
    }
  }
`

export class TransactionList extends Component {
  render () {
    return (
      <Query query={TRANSACTION_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>
          if (error) return <div>Error</div>
          const TransactionsToRender = data.transactions
          console.log('TTR', data)
          if (TransactionsToRender === null) {
            return (
              <div>
                <h1>
                  This isnt working yet
                </h1>
              </div>
            )
          } else {
            return (
              <div>
                {TransactionsToRender.map(transaction => <Transaction key={transaction.id} transaction={transaction} />)}
              </div>
            )
          }
        }}
      </Query>
    )
  }
}
