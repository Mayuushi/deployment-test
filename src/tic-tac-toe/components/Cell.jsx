const Cell = ({ value, onClick }) => {
  return (
    <button
      className="w-20 h-20 text-4xl font-bold cursor-pointer bg-amber-200/90 border-none rounded-lg text-amber-900 flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1 hover:bg-amber-100 relative overflow-hidden before:content-[''] before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent before:transition-all before:duration-500 hover:before:left-full active:translate-y-0 active:shadow-sm"
      onClick={onClick}
    >
      {value}
    </button>
  )
}

export default Cell
