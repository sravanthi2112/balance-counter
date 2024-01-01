// Write your code here
import './index.css'

const TransactionItem = props => {
  const {eachTransaction, deleteTransaction} = props
  const {title, amount, type, id} = eachTransaction
  const onClickDelete = () => {
    deleteTransaction(id)
  }
  return (
    <li className="history-details">
      <p className="details title-detail">{title}</p>
      <p className="amount-detail details">Rs {amount}</p>
      <p className="type-detail details">{type}</p>
      <button className="delete-btn" data-testid="delete" onClick={onClickDelete}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete"
        />
      </button>
    </li>
  )
}

export default TransactionItem
