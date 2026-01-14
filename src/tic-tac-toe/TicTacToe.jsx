import { useState } from 'react'
import Board from './components/Board'
import Status from './components/Status'
import { PLAYER_X, PLAYER_O, EMPTY } from './logic/constants'
import { checkWinner, isDraw } from './logic/gameLogic'
import { getBestMove } from './ai/minimax'
import './styles/ticTacToe.css'

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(EMPTY))
  const [isPlayerTurn, setIsPlayerTurn] = useState(true)

  const winner = checkWinner(board)
  const draw = isDraw(board) && !winner

  const handleClick = (index) => {
    if (!isPlayerTurn || board[index] || winner) return

    const newBoard = [...board]
    newBoard[index] = PLAYER_X
    setBoard(newBoard)
    setIsPlayerTurn(false)

    setTimeout(() => aiMove(newBoard), 300)
  }

  const aiMove = (currentBoard) => {
    if (checkWinner(currentBoard) || isDraw(currentBoard)) return

    const bestMove = getBestMove(currentBoard)
    const newBoard = [...currentBoard]
    newBoard[bestMove] = PLAYER_O

    setBoard(newBoard)
    setIsPlayerTurn(true)
  }

  const resetGame = () => {
    setBoard(Array(9).fill(EMPTY))
    setIsPlayerTurn(true)
  }

  return (
    <div className="relative bg-gradient-to-br from-amber-100 to-orange-200 p-6 rounded-2xl shadow-2xl border border-amber-200/50 text-center">
      <h1 className="text-4xl font-bold mb-8 drop-shadow-lg text-amber-900">Tic Tac Toe (AI)</h1>

      <Status winner={winner} draw={draw} />

      <Board board={board} onClick={handleClick} />

      <button
        className="mt-5 px-8 py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-full cursor-pointer transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 uppercase tracking-wide"
        onClick={resetGame}
      >
        Restart
      </button>
    </div>
  )
}

export default TicTacToe
