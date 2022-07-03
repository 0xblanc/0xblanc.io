import { useState, useEffect } from 'react'

function getWindowDimensions() {
  if (typeof window === 'undefined') return { width: 0, height: 0, isMobile: false }
  const { innerWidth: width, innerHeight: height } = window
  return {
    width,
    height,
    isMobile: width < 768,
  }
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions())
  const [windowLoaded, setWindowLoaded] = useState(false)

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions())
    }
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowDimensions
}
