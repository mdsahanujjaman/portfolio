import { useEffect, useState } from "react"
import { motion as Motion, useSpring } from "framer-motion"

function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible] = useState(() =>
    typeof window !== 'undefined' && !window.matchMedia("(pointer: coarse)").matches
  )

  // Spring physics for the outer ring (fluid trailing effect)
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 }
  const cursorX = useSpring(0, springConfig)
  const cursorY = useSpring(0, springConfig)

  useEffect(() => {
    // Initial check is now handled in useState initializer

    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const checkHoverState = (e) => {
      const target = e.target;
      const isClickable =
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') !== null ||
        target.closest('button') !== null;

      setIsHovering(isClickable);
    }

    window.addEventListener("mousemove", updateMousePosition)
    window.addEventListener("mouseover", checkHoverState)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
      window.removeEventListener("mouseover", checkHoverState)
    }
  }, [])

  useEffect(() => {
    if (isVisible) {
      cursorX.set(mousePosition.x - 16)
      cursorY.set(mousePosition.y - 16)
    }
  }, [mousePosition, cursorX, cursorY, isVisible])

  if (!isVisible) return null;

  return (
    <>
      {/* Outer physics-based trailing ring */}
      <Motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block"
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={{
          backgroundColor: isHovering ? "white" : "transparent",
          border: isHovering ? "0px solid rgba(255, 255, 255, 0)" : "2px solid rgba(255, 255, 255, 0.5)",
          scale: isHovering ? 1.5 : 1
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
      {/* Inner instant-follow dot */}
      <div
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block"
        style={{
          transform: `translate3d(${mousePosition.x - 4}px, ${mousePosition.y - 4}px, 0)`,
          opacity: isHovering ? 0 : 1,
          transition: "opacity 0.2s ease"
        }}
      />
    </>
  )
}

export default CustomCursor
