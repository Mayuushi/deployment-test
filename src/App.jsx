import { useState } from 'react'
import Game2048 from './game2048/features'
import TicTacToe from './tic-tac-toe/TicTacToe'

export default function App() {
  const [selectedGame, setSelectedGame] = useState(null)

  const games = [
    {
      id: '2048',
      title: '2048',
      description: 'Combine tiles to reach 2048! Use arrow keys or swipe to move tiles.',
      component: <Game2048 />,
      icon: '🎯',
      color: 'from-amber-500 to-orange-600'
    },
    {
      id: 'tictactoe',
      title: 'Tic Tac Toe',
      description: 'Challenge our AI in the classic game of Tic Tac Toe.',
      component: <TicTacToe />,
      icon: '⭕',
      color: 'from-blue-500 to-purple-600'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Game Collection
            </h1>
            <p className="text-gray-300 text-lg">Choose your game and start playing!</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {!selectedGame ? (
          /* Game Selection Menu */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {games.map((game) => (
              <button
                key={game.id}
                onClick={() => setSelectedGame(game)}
                className="group relative overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${game.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <div className="relative z-10 text-center">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {game.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-yellow-300 transition-colors duration-300">
                    {game.title}
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {game.description}
                  </p>
                  <div className="mt-6 inline-flex items-center text-yellow-400 font-semibold group-hover:text-yellow-300 transition-colors duration-300">
                    Click to Play
                    <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </button>
            ))}
          </div>
        ) : (
          /* Game Modal/Overlay */
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setSelectedGame(null)}
            ></div>

            {/* Game Container */}
            <div className="relative z-10 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              {/* Close Button */}
              <button
                onClick={() => setSelectedGame(null)}
                className="absolute -top-4 -right-4 z-20 w-12 h-12 bg-red-500 hover:bg-red-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center font-bold text-xl"
              >
                ×
              </button>

              {/* Game Content */}
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 shadow-2xl border border-white/10">
                <div className="text-center mb-6">
                  <h2 className="text-4xl font-bold text-white mb-2 flex items-center justify-center gap-3">
                    <span className="text-3xl">{selectedGame.icon}</span>
                    {selectedGame.title}
                  </h2>
                  <p className="text-gray-300">{selectedGame.description}</p>
                </div>

                <div className="flex justify-center">
                  {selectedGame.component}
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-black/20 backdrop-blur-md border-t border-white/10 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-400">
            <p>&copy; 2026 Game Collection. Built with React & Tailwind CSS.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
