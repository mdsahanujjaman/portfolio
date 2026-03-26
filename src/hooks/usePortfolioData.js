import { useState, useEffect, useCallback } from "react"
import { KEYS, DEFAULTS } from "../data/portfolioData"

// Read from localStorage or fall back to defaults
const readKey = (key, defaultVal) => {
  try {
    const stored = localStorage.getItem(key)
    return stored ? JSON.parse(stored) : defaultVal
  } catch { return defaultVal }
}

// Write to localStorage and broadcast change event
export const writePortfolioKey = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value))
  window.dispatchEvent(new CustomEvent("portfolio-update", { detail: { key } }))
}

// Reset a key to defaults
export const resetPortfolioKey = (key, defaultVal) => {
  localStorage.removeItem(key)
  window.dispatchEvent(new CustomEvent("portfolio-update", { detail: { key } }))
}

// Hook for any single key
export function usePortfolioData(key, defaultVal) {
  const [data, setData] = useState(() => readKey(key, defaultVal))

  const refresh = useCallback(() => {
    setData(readKey(key, defaultVal))
  }, [key, defaultVal])

  useEffect(() => {
    const handler = (e) => { if (e.detail?.key === key) refresh() }
    window.addEventListener("portfolio-update", handler)
    return () => window.removeEventListener("portfolio-update", handler)
  }, [key, refresh])

  return data
}
