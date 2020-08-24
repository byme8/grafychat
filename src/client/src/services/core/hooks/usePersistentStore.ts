import { PersistentStorage } from '../Storage'
import { createInMemoryStore } from './useInMemoryStore'

export function createPersistentStore<TValue>(storageKey: string, value: TValue) {
  let key = Object.keys(value)[0]
  let currentValue = PersistentStorage.get<TValue>(storageKey)
  if (currentValue) {
    let newValue : any = {}
    newValue[key] = currentValue
    currentValue = newValue as TValue
  }

  let useState = createInMemoryStore(currentValue ?? value)

  function useStore() {
    let [state, setState] = useState()

    function newSetState(state: TValue[keyof TValue]) {
      PersistentStorage.set(key, state)
      setState(state)
    }

    return [state, newSetState] as [typeof state, typeof newSetState]
  }

  return useStore
}
