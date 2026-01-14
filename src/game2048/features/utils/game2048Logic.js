import { GAME_2048_SIZE, GAME_2048_TARGET } from '../constants/game2048Constants'

export const createGame2048Board = () =>
  Array.from({ length: GAME_2048_SIZE }, () =>
    Array(GAME_2048_SIZE).fill(0)
  )

export const addRandomGame2048Tile = (board) => {
  const empty = []

  board.forEach((row, r) =>
    row.forEach((cell, c) => {
      if (cell === 0) empty.push([r, c])
    })
  )

  if (!empty.length) return board

  const [r, c] = empty[Math.floor(Math.random() * empty.length)]
  const newBoard = board.map(row => [...row])
  newBoard[r][c] = Math.random() < 0.9 ? 2 : 4
  return newBoard
}

export const moveGame2048Left = (board) => {
  let moved = false
  let score = 0

  const newBoard = board.map(row => {
    let values = row.filter(v => v !== 0)

    for (let i = 0; i < values.length - 1; i++) {
      if (values[i] === values[i + 1]) {
        values[i] *= 2
        score += values[i] // Add the merged value to score
        values[i + 1] = 0
        moved = true
      }
    }

    values = values.filter(v => v !== 0)
    while (values.length < GAME_2048_SIZE) values.push(0)

    if (values.toString() !== row.toString()) moved = true
    return values
  })

  return { board: newBoard, moved, score }
}

export const rotateGame2048Board = (board) =>
  board[0].map((_, i) => board.map(row => row[i]).reverse())

// ✅ WIN CHECK
export const checkGame2048Win = (board) =>
  board.flat().some(value => value === GAME_2048_TARGET)

// ❌ LOSE CHECK
export const checkGame2048Lose = (board) => {
  for (let r = 0; r < GAME_2048_SIZE; r++) {
    for (let c = 0; c < GAME_2048_SIZE; c++) {
      if (board[r][c] === 0) return false
      if (c < GAME_2048_SIZE - 1 && board[r][c] === board[r][c + 1]) return false
      if (r < GAME_2048_SIZE - 1 && board[r][c] === board[r + 1][c]) return false
    }
  }
  return true
}
