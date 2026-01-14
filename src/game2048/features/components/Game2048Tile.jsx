export default function Game2048Tile({ value }) {
  const getTileStyles = (value) => {
    const baseClasses = "w-20 h-20 rounded-lg font-bold text-2xl flex items-center justify-center transition-all duration-200 shadow-lg transform hover:scale-105"

    if (value === 0) {
      return `${baseClasses} bg-amber-200/30`
    }

    const tileStyles = {
      2: "bg-amber-100 text-amber-800 shadow-amber-200",
      4: "bg-amber-200 text-amber-900 shadow-amber-300",
      8: "bg-orange-300 text-white shadow-orange-400",
      16: "bg-orange-400 text-white shadow-orange-500",
      32: "bg-red-400 text-white shadow-red-500",
      64: "bg-red-500 text-white shadow-red-600",
      128: "bg-yellow-400 text-white shadow-yellow-500",
      256: "bg-yellow-500 text-white shadow-yellow-600",
      512: "bg-yellow-600 text-white shadow-yellow-700",
      1024: "bg-purple-500 text-white shadow-purple-600",
      2048: "bg-purple-600 text-white shadow-purple-700 animate-pulse",
    }

    return `${baseClasses} ${tileStyles[value] || "bg-gray-600 text-white"}`
  }

  return (
    <div className={getTileStyles(value)}>
      {value !== 0 && value}
    </div>
  )
}
