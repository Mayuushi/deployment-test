import Cell from './Cell'

const Board = ({ board, onClick }) => {
  return (
    <div className="relative bg-amber-800 p-4 rounded-xl shadow-inner grid grid-cols-3 gap-3 touch-none mx-auto my-8">
      {board.map((value, index) => (
        <Cell
          key={index}
          value={value}
          onClick={() => onClick(index)}
        />
      ))}
    </div>
  )
}

export default Board
