import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Transaction extends Component {
  render () {
    return (
      <div>
        <div>
          {/* {this.props.description}  */}
          {this.props.transaction.amount}
          {/* ({this.props.merchant}) */}
        </div>
      </div>
    )
  }
}

Transaction.propTypes = {
  // description: PropTypes.string,
  // merchant: PropTypes.string,
  transaction: PropTypes.float
}
