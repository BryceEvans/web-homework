import React, { Fragment, Component } from 'react'
// import { Link } from 'react-router-dom'

export class Transaction extends Component {
  constructor (props) {
    super(props)
    this.state = {
      merchant: '',
      amount: '',
      description: '',
      isCredit: true,
      isDebit: false
    }
    // this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    console.log('EVENT Value', event.target.value)
    this.setState({ value: event.target.value })
  }

  render () {
    return (
      <Fragment>
        <div>
          {/* <Link to='/another'>Another route</Link> */}
          {/* <div>Content for /another route</div> */}
          <div>Add Transaction</div>
          <form>
            {/* <label>
              Name:
              <input type='text' />
            </label> */}
            <label>
              Merchant:
              <input onChange={(e) => this.handleChange(e)} placeholder='Enter Merchant' type='text' value={this.state.merchant.value} />
            </label>
            <label>
              Amount:
              <input onChange={(e) => this.handleChange(e)} placeholder='Enter Amount' type='number' value={this.state.amount.value} />
              <select >
                <option value='Credit'>
                  Credit
                </option>
                <option value='Debit'>
                  Debit
                </option>
              </select>
              {/* <input name='gender' type='radio' value='debit'>
                Debit
              </input>
              <input name='gender' type='radio' value='credit'>
                Credit
              </input> */}
            </label>
            <label>
              Description:
              <input onChange={(e) => this.handleChange(e)} placeholder='Enter Description' type='text' value={this.state.description.value} />
            </label>
            <input type='submit' value='Submit' />
          </form>
        </div>
      </Fragment>
    )
  }
}
