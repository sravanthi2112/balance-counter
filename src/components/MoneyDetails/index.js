// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {balance, expenses, income} = props
  return (
    <li className="money-details-list">
      <div className="moneny-details-container">
        <div className="your-balance-conatiner">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            alt="balance"
            className="money-details-images"
          />
          <div>
            <p className="detail">Your Balance</p>
            <p className="rupees" data-testid="balanceAmount">
              Rs {balance}
            </p>
          </div>
        </div>
        <div className="your-income-conatiner">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
            alt="income"
            className="money-details-images"
          />
          <div>
            <p className="detail">Your Income</p>
            <p className="rupees" data-testid="incomeAmount">
              Rs {income}
            </p>
          </div>
        </div>
        <div className="your-expenses-conatiner">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
            alt="expenses"
            className="money-details-images"
          />
          <div>
            <p className="detail">Your Expenses</p>
            <p className="rupees" data-testid="expensesAmount">
              Rs {expenses}
            </p>
          </div>
        </div>
      </div>
    </li>
  )
}

export default MoneyDetails
