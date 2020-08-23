export let AppUrl = window.location.origin
export let ApiUrl = AppUrl + '/api/'

export function toArray<T>(items: IterableIterator<T>) {
  let results = [] as T[]
  for (const item of items) {
    results.push(item)
  }

  return results
}

export function openAddUser() {
  window.location.replace(AppUrl + '#/user')
}
