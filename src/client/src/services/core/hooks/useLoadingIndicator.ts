import { useBoolean } from '@uifabric/react-hooks'

export function useLoadingIndicator(value: boolean) {
  let [loading, { setTrue: startLoading, setFalse: endLoading }] = useBoolean(value)

  function load<T>(action: () => Promise<T>) {
    startLoading()
    action().finally(endLoading)
  }
  return [loading, load] as [typeof loading, typeof load]
}
