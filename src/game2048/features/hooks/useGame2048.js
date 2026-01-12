import { useState, useCallback } from 'react'
import {
  createGame2048Board,
  addRandomGame2048Tile,
  moveGame2048Left,
  rotateGame2048Board
} from '../utils/game2048Logic'

export default function useGame2048() {
  const [board, setBoard] = useState(() =>
    addRandomGame2048Tile(
      addRandomGame2048Tile(createGame2048Board())
    )
  )

  const move = useCallback((direction) => {
    let workingBoard = board

    if (direction === 'ArrowUp')
      workingBoard = rotateGame2048Board(
        rotateGame2048Board(rotateGame2048Board(board))
      )
    if (direction === 'ArrowRight')
      workingBoard = rotateGame2048Board(rotateGame2048Board(board))
    if (direction === 'ArrowDown')
      workingBoard = rotateGame2048Board(board)

    const result = moveGame2048Left(workingBoard)
    if (!result.moved) return

    let finalBoard = result.board

    if (direction === 'ArrowUp')
      finalBoard = rotateGame2048Board(finalBoard)
    if (direction === 'ArrowRight')
      finalBoard = rotateGame2048Board(rotateGame2048Board(finalBoard))
    if (direction === 'ArrowDown')
      finalBoard = rotateGame2048Board(
        rotateGame2048Board(rotateGame2048Board(finalBoard))
      )

    setBoard(addRandomGame2048Tile(finalBoard))
  }, [board])

  const handleKey = useCallback((e) => {
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
      move(e.key)
    }
  }, [move])

  return { board, handleKey }
}
