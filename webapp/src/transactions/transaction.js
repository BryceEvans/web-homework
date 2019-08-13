import React, { Fragment } from 'react'
// import { Link } from 'react-router-dom'

export function Transaction () {
  return (
    <Fragment>
      {/* <Link to='/another'>Another route</Link> */}
      {/* <div>Content for /another route</div> */}
      <div>Add Transaction</div>
      <form>
        <label>
          Name:
          <input type='text' />
        </label>
        <label>
          Amount:
          <input type='number' />
          <select>
            <option value='credit'>
              Credit
            </option>
            <option value='debit'>
              Debit
            </option>
          </select>
        </label>
        {/* <label>
          Description:
          <input type='text' />
        </label>
        <label>
          Merchant:
          <input type='text' />
        </label> */}
        <input type='submit' value='Submit' />
      </form>
    </Fragment>
  )
}
