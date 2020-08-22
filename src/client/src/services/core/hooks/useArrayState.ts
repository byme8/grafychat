import { useState } from 'react'

export function useArrayState<T>(initialValue: T[]) {
  const [items, updateItems] = useState(initialValue)

  function add(item: T) {
    updateItems(o => {
      o.push(item)
      return o
    })
  }
  function remove(predicate: (item: T) => boolean) {
    updateItems(o => {
      const index = items.findIndex(predicate)
      if (index > -1) {
        o.splice(index, 1)
      }
      return o
    })
  }
  function set(items: T[]) {
    updateItems(_ => items)
  }
  return [items, { add, remove, set, updateItems }] as [T[], {
        add: (item: T) => void;
        remove: (predicate: (item: T) => boolean) => void;
        set: (item: T[]) => void;
        updateItems: React.Dispatch<React.SetStateAction<T[]>>;
    }]
}
