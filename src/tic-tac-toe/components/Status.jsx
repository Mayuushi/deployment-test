const Status = ({ winner, draw }) => {
  if (winner) return <h2 className="text-xl my-5 py-4 bg-amber-800 text-white rounded-xl border border-amber-700 animate-fadeIn font-semibold">{winner} Wins!</h2>
  if (draw) return <h2 className="text-xl my-5 py-4 bg-amber-800 text-white rounded-xl border border-amber-700 animate-fadeIn font-semibold">It's a Draw!</h2>
  return <h2 className="text-xl my-5 py-4 bg-amber-800 text-white rounded-xl border border-amber-700 animate-fadeIn font-semibold">Your Turn (X)</h2>
}

export default Status
