import { GAME_2048_STATUS } from '../constants/game2048Constants'

export default function Game2048StatusOverlay({ status, onRestart }) {
  if (status === GAME_2048_STATUS.PLAYING) return null

  return (
    <div className="game2048-overlay">
      <h2>{status === GAME_2048_STATUS.WON ? 'You Win!' : 'Game Over'}</h2>
      <button onClick={onRestart}>Restart</button>
    </div>
  )
}
