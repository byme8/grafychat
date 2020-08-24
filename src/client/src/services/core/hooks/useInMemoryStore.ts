import { createGlobalState } from 'react-hooks-global-state'

export function createInMemoryStore<TValue>(value: TValue) {
  let key = Object.keys(value)[0]
  let stateKey = key as keyof TValue
  let { useGlobalState } = createGlobalState(value)
  function useStore() {
    let [state, setState] = useGlobalState(stateKey)
    function newSetState(state: TValue[keyof TValue]) {
      setState(state)
    }
    return [state, newSetState] as [typeof state, typeof newSetState]
  }
  return useStore
}
