const WIN_PATTERNS = [
  [0,1,2],[3,4,5],[6,7,8],
  [0,3,6],[1,4,7],[2,5,8],
  [0,4,8],[2,4,6]
]

export const checkWinner = (board) => {
  for (let pattern of WIN_PATTERNS) {
    const [a,b,c] = pattern
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a]
    }
  }
  return null
}

export const isDraw = (board) => {
  return board.every(cell => cell !== null)
}
