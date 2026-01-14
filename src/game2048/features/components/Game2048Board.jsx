import { useEffect } from 'react'
import useGame2048 from '../hooks/useGame2048'
import useGame2048Touch from '../hooks/useGame2048Touch'
import Game2048Tile from './Game2048Tile'
import Game2048StatusOverlay from './Game2048StatusOverlay'

export default function Game2048Board() {
  const { board, status, score, handleKey, resetGame } = useGame2048()

  const { onTouchStart, onTouchEnd } = useGame2048Touch(handleKey)

  useEffect(() => {
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [handleKey])

  return (
    <div className="relative bg-gradient-to-br from-amber-100 to-orange-200 p-6 rounded-2xl shadow-2xl border border-amber-200/50">
      {/* Score Display */}
      <div className="text-center mb-4">
        <div className="inline-block bg-amber-800 text-white px-6 py-2 rounded-full font-bold text-xl shadow-lg">
          Score: {score.toLocaleString()}
        </div>
      </div>

      <div
        className="relative bg-amber-800 p-4 rounded-xl shadow-inner grid grid-cols-4 gap-3 touch-none"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {board.flat().map((value, index) => (
          <Game2048Tile key={index} value={value} />
        ))}
      </div>

      <Game2048StatusOverlay
        status={status}
        score={score}
        onRestart={resetGame}
      />
    </div>
  )
}
