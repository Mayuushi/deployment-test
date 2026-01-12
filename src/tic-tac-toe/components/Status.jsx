const Status = ({ winner, draw }) => {
  if (winner) return <h2>{winner} Wins!</h2>
  if (draw) return <h2>It's a Draw!</h2>
  return <h2>Your Turn (X)</h2>
}

export default Status
