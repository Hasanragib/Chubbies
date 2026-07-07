import { createContext, useContext } from 'react'
import { SITE } from '../data/index.js'

const SiteContext = createContext(SITE)

export function SiteProvider({ children }) {
  return <SiteContext.Provider value={SITE}>{children}</SiteContext.Provider>
}

// Usage: const { brand, contact, carts } = useSite()
export function useSite() {
  return useContext(SiteContext)
}
