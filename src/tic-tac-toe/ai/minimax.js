import { PLAYER_X, PLAYER_O, EMPTY } from '../logic/constants'
import { checkWinner, isDraw } from '../logic/gameLogic'

export const getBestMove = (board) => {
  let bestScore = -Infinity
  let move

  board.forEach((cell, index) => {
    if (cell === EMPTY) {
      board[index] = PLAYER_O
      let score = minimax(board, false)
      board[index] = EMPTY

      if (score > bestScore) {
        bestScore = score
        move = index
      }
    }
  })

  return move
}

const minimax = (board, isMaximizing) => {
  const winner = checkWinner(board)
  if (winner === PLAYER_O) return 1
  if (winner === PLAYER_X) return -1
  if (isDraw(board)) return 0

  if (isMaximizing) {
    let best = -Infinity
    board.forEach((cell, i) => {
      if (cell === EMPTY) {
        board[i] = PLAYER_O
        best = Math.max(best, minimax(board, false))
        board[i] = EMPTY
      }
    })
    return best
  } else {
    let best = Infinity
    board.forEach((cell, i) => {
      if (cell === EMPTY) {
        board[i] = PLAYER_X
        best = Math.min(best, minimax(board, true))
        board[i] = EMPTY
      }
    })
    return best
  }
}
