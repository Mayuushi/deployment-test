export default function Game2048Tile({ value }) {
  return (
    <div className={`game2048-tile game2048-tile-${value}`}>
      {value !== 0 && value}
    </div>
  )
}
