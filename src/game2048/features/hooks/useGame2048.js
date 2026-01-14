import { useState, useCallback } from 'react'
import {
  createGame2048Board,
  addRandomGame2048Tile,
  moveGame2048Left,
  rotateGame2048Board,
  checkGame2048Win,
  checkGame2048Lose
} from '../utils/game2048Logic'
import { GAME_2048_STATUS } from '../constants/game2048Constants'

export default function useGame2048() {
  const [board, setBoard] = useState(() =>
    addRandomGame2048Tile(
      addRandomGame2048Tile(createGame2048Board())
    )
  )
  const [status, setStatus] = useState(GAME_2048_STATUS.PLAYING)
  const [score, setScore] = useState(0)

  const move = useCallback((direction) => {
    if (status !== GAME_2048_STATUS.PLAYING) return

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

    // Add score from merged tiles
    setScore(prevScore => prevScore + result.score)

    let finalBoard = result.board

    if (direction === 'ArrowUp')
      finalBoard = rotateGame2048Board(finalBoard)
    if (direction === 'ArrowRight')
      finalBoard = rotateGame2048Board(rotateGame2048Board(finalBoard))
    if (direction === 'ArrowDown')
      finalBoard = rotateGame2048Board(
        rotateGame2048Board(rotateGame2048Board(finalBoard))
      )

    finalBoard = addRandomGame2048Tile(finalBoard)

    if (checkGame2048Win(finalBoard))
      setStatus(GAME_2048_STATUS.WON)
    else if (checkGame2048Lose(finalBoard))
      setStatus(GAME_2048_STATUS.LOST)

    setBoard(finalBoard)
  }, [board, status])

  const handleKey = useCallback((e) => {
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
      move(e.key)
    }
  }, [move])

  const resetGame = () => {
    setBoard(
      addRandomGame2048Tile(
        addRandomGame2048Tile(createGame2048Board())
      )
    )
    setStatus(GAME_2048_STATUS.PLAYING)
    setScore(0)
  }

  return { board, status, score, handleKey, resetGame }
}
