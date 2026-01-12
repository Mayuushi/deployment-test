export const createGame2048Board = () =>
  Array.from({ length: 4 }, () => Array(4).fill(0))

export const addRandomGame2048Tile = (board) => {
  const emptyCells = []

  board.forEach((row, r) =>
    row.forEach((cell, c) => {
      if (cell === 0) emptyCells.push([r, c])
    })
  )

  if (!emptyCells.length) return board

  const [r, c] = emptyCells[Math.floor(Math.random() * emptyCells.length)]
  const newBoard = board.map(row => [...row])

  newBoard[r][c] = Math.random() < 0.9 ? 2 : 4
  return newBoard
}

export const moveGame2048Left = (board) => {
  let moved = false

  const newBoard = board.map(row => {
    let values = row.filter(v => v !== 0)

    for (let i = 0; i < values.length - 1; i++) {
      if (values[i] === values[i + 1]) {
        values[i] *= 2
        values[i + 1] = 0
        moved = true
      }
    }

    values = values.filter(v => v !== 0)
    while (values.length < 4) values.push(0)

    if (values.toString() !== row.toString()) moved = true
    return values
  })

  return { board: newBoard, moved }
}

export const rotateGame2048Board = (board) =>
  board[0].map((_, i) => board.map(row => row[i]).reverse())
