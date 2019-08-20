import React, { Component } from 'react'
import Transaction from './Transaction'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const TRANSACTION_QUERY = gql`
  {
    transaction {
      id
      merchant
      description
      amount
      credit
      debit
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
          const TransactionsToRender = data.transaction
          return (
            <div>
              {TransactionsToRender.map(transaction => <Transaction key={transaction.id} transaction={transaction} />)}
            </div>
          )
        }}
      </Query>
    )
  }
}
