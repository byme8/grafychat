import { useState, useEffect } from 'react'

export function createInMemoryStore<TValue>(initialValue: TValue) {
  class State {
    callbacks = new Set<(newValue: TValue) => void>()
    constructor(public value: TValue) { }
  }

  let state = new State(initialValue)

  function useStore() {
    let [hookValue, setHookValue] = useState(state.value)
    state.callbacks.add(setHookValue)

    function setState(newValue: TValue) {
      state.value = newValue
      for (const callbacks of state.callbacks) {
        callbacks(newValue)
      }
    }

    useEffect(() => {
      return () => {
        state.callbacks.delete(setHookValue)
      }
    }, [hookValue])

    return [hookValue, setState] as [TValue, typeof setState]
  }

  return useStore
}
