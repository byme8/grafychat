import { useState, useEffect } from 'react'
export function useDebouncedState<T>(initialValue: T, delayImMiliseconds: number) {
  const [value, setValue] = useState(initialValue)
  const [deboucedValue, setDeboucedValue] = useState(initialValue)

  useEffect(() => {
    const timeout = setTimeout(() => setDeboucedValue(value), delayImMiliseconds)

    return () => {
      clearTimeout(timeout)
    }
  }, [value])

  return [deboucedValue, setValue] as [T, (value: T) => void]
}
