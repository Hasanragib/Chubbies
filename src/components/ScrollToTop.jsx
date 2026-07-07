import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// React Router doesn't reset scroll position between page navigations by
// default (this is standard SPA behavior, not a bug in this project alone).
// Mounting this once, above <Routes>, fixes it for every route.
export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
