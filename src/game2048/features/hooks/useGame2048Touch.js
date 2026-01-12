import { useRef } from 'react'

export default function useGame2048Touch(onSwipe) {
  const touchStart = useRef({ x: 0, y: 0 })

  const onTouchStart = (e) => {
    e.preventDefault()
    const touch = e.touches[0]
    touchStart.current = { x: touch.clientX, y: touch.clientY }
  }

  const onTouchEnd = (e) => {
    e.preventDefault()
    const touch = e.changedTouches[0]
    const dx = touch.clientX - touchStart.current.x
    const dy = touch.clientY - touchStart.current.y

    if (Math.abs(dx) < 30 && Math.abs(dy) < 30) return

    if (Math.abs(dx) > Math.abs(dy)) {
      onSwipe(dx > 0 ? 'ArrowRight' : 'ArrowLeft')
    } else {
      onSwipe(dy > 0 ? 'ArrowDown' : 'ArrowUp')
    }
  }

  return { onTouchStart, onTouchEnd }
}
