import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]


// Write your code here

class MoneyManager extends Component {
  state = {
    historyDetails: [],
    title: '',
    amount: '',
    type: 'Income',
    balance: 0,
    income: 0,
    expenses: 0,
  }

  onClickSubmit = event => {
    event.preventDefault()
    const {title, amount, type, balance} = this.state
    const newTransaction = {id: uuidv4(), title, amount, type}

    this.setState(prevState => ({
      historyDetails: [...prevState.historyDetails, newTransaction],
      title: '',
      amount: '',
    }))

    if (type.toLocaleLowerCase() === 'income') {
      this.setState(prevState => ({
        balance: prevState.balance + parseInt(amount),
        income: prevState.income + parseInt(amount),
        type: 'Income',
      }))
    } else {
      this.setState(prevState => ({
        balance: prevState.balance - parseInt(amount),
        expenses: prevState.expenses + parseInt(amount),
        type: 'Expenses',
      }))
    }
  }

  onDeleteTransaction = id => {
    const {historyDetails} = this.state
    const deletedTransactions = historyDetails.filter(each => each.id !== id)
    this.setState({
      historyDetails: deletedTransactions,
    })
    console.log(id)
    const matchedId = historyDetails.find(each => each.id === id)
    console.log(matchedId)
    if (matchedId.type === 'Income') {
      this.setState(prevState => ({
        income: prevState.income - parseInt(matchedId.amount),
        balance: prevState.balance - parseInt(matchedId.amount),
      }))
    } else {
      this.setState(prevState => ({
        expenses: prevState.expenses - parseInt(matchedId.amount),
        balance: prevState.balance + parseInt(matchedId.amount),
      }))
    }
  }

  onChangeInputTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeInputAmount = event => {
    this.setState({amount: event.target.value})
  }

  onChangeInputType = event => {
    const selectedtype = event.target.value.toLocaleLowerCase()
    if (selectedtype === 'income') {
      this.setState({type: 'Income'})
    } else if (selectedtype === 'expenses') {
      this.setState({type: 'Expenses'})
    }
  }

  render() {
    const {historyDetails, title, amount, type, balance, expenses, income} =
      this.state
    console.log(type)
    return (
      <div className="background-sec">
        <div className="content-sec">
          <div className="money-manager-container">
            <h1 className="richard">Hi, Richard</h1>
            <p className="welcome">
              Welcome back to your
              <span className="span-el"> Money Manager</span>
            </p>
          </div>
          <ul>
            <MoneyDetails
              balance={balance}
              expenses={expenses}
              income={income}
            />
          </ul>
          <div className="input-and-history-container">
            <div className="input-container">
              <h1 className="add-transaction">Add Transaction</h1>
              <form onSubmit={this.onClickSubmit}>
                <label htmlFor="title" className="label-text">
                  TITLE
                </label>
                <br />
                <input
                  type="text"
                  className="input-el"
                  id="title"
                  onChange={this.onChangeInputTitle}
                  placeholder="TITLE"
                  value={title}
                />
                <br />
                <label htmlFor="amount" className="label-text">
                  AMOUNT
                </label>
                <br />
                <input
                  type="text"
                  className="input-el"
                  id="amount"
                  onChange={this.onChangeInputAmount}
                  placeholder="AMOUNT"
                  value={amount}
                />
                <br />
                <label htmlFor="select" className="label-text">
                  TYPE
                </label>
                <br />
                <select
                  id="select"
                  className="input-el"
                  onChange={this.onChangeInputType}
                >
                  <option value={transactionTypeOptions[0].optionId}>
                    {transactionTypeOptions[0].displayText}
                  </option>
                  <option value={transactionTypeOptions[1].optionId}>
                    {transactionTypeOptions[1].displayText}
                  </option>
                </select>
                <button className="add-btn">Add</button>
              </form>
            </div>
            <div className=" input-container history-container">
              <h1 className="add-transaction">History</h1>
              <ul className="history-details-container">
                <li className="history-details">
                  <p className="title-detail">Title</p>
                  <p className="amount-detail">Amount</p>
                  <p className="type-detail">Type</p>
                </li>
                <ul>
                  {historyDetails.map(eachDetail => (
                    <TransactionItem
                      eachTransaction={eachDetail}
                      key={eachDetail.id}
                      deleteTransaction={this.onDeleteTransaction}
                    />
                  ))}
                </ul>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
