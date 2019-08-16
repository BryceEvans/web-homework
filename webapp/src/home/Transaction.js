import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Transaction extends Component {
  render () {
    return (
      <div>
        <div>
          {this.props.description} ({this.props.amount}) ({this.props.merchant})
        </div>
      </div>
    )
  }
}

export default Transaction

Transaction.propTypes = {
  description: PropTypes.string,
  merchant: PropTypes.string,
  amount: PropTypes.number
}
