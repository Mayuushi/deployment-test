import { GAME_2048_STATUS } from '../constants/game2048Constants'

export default function Game2048StatusOverlay({ status, score, onRestart }) {
  if (status === GAME_2048_STATUS.PLAYING) return null

  const isWin = status === GAME_2048_STATUS.WON

  return (
    <div className="absolute inset-0 bg-black/80 backdrop-blur-sm rounded-2xl flex flex-col items-center justify-center z-10">
      <div className={`text-center p-8 rounded-2xl shadow-2xl border-2 ${
        isWin
          ? 'bg-gradient-to-br from-yellow-400 to-orange-500 border-yellow-300 text-white'
          : 'bg-gradient-to-br from-red-500 to-pink-600 border-red-400 text-white'
      }`}>
        <h2 className="text-4xl font-bold mb-4 animate-bounce">
          {isWin ? '🎉 You Win!' : '💀 Game Over'}
        </h2>
        <p className="text-lg mb-2 opacity-90">
          {isWin ? 'Congratulations! You reached 2048!' : 'Better luck next time!'}
        </p>
        <p className="text-xl font-semibold mb-6">
          Final Score: {score.toLocaleString()}
        </p>
        <button
          onClick={onRestart}
          className="px-8 py-3 bg-white text-gray-800 font-semibold rounded-full hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          Play Again
        </button>
      </div>
    </div>
  )
}
