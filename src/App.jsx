import Game2048 from './game2048/features'
import TicTacToe from './tic-tac-toe/TicTacToe'


export default function App() {
  return (
    <div className="app">
      <h1>2048</h1>
      <Game2048 />
      <h1>Tic Tac Toe</h1>
      <TicTacToe />
    </div>
  )
}
