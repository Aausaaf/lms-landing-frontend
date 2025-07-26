"use client"

import { useCallback } from "react"

/**
 * Custom hook for consistent error handling across the application
 */
export const useErrorHandler = () => {
  const handleError = useCallback((error: Error, context?: string) => {
    console.error(`Error ${context ? `in ${context}` : ""}:`, error)

    // In production, you might want to:
    // - Log to an error reporting service (Sentry, LogRocket, etc.)
    // - Show user-friendly error messages
    // - Track error analytics

    // For now, we'll just log to console
    if (process.env.NODE_ENV === "development") {
      console.trace(error)
    }
  }, [])

  return { handleError }
}
