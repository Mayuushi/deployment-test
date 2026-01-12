const Cell = ({ value, onClick }) => {
  return (
    <button className="ttt-cell" onClick={onClick}>
      {value}
    </button>
  )
}

export default Cell
