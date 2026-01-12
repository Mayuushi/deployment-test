import { useEffect } from 'react'
import useGame2048 from '../hooks/useGame2048'
import useGame2048Touch from '../hooks/useGame2048Touch'
import Game2048Tile from './Game2048Tile'
import Game2048StatusOverlay from './Game2048StatusOverlay'

export default function Game2048Board() {
  const { board, status, handleKey, resetGame } = useGame2048()

  const { onTouchStart, onTouchEnd } = useGame2048Touch(handleKey)

  useEffect(() => {
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [handleKey])

  return (
    <div
      className="game2048-wrapper"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="game2048-board">
        {board.flat().map((value, index) => (
          <Game2048Tile key={index} value={value} />
        ))}
      </div>

      <Game2048StatusOverlay
        status={status}
        onRestart={resetGame}
      />
    </div>
  )
}
