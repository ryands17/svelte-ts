import { writable } from 'svelte/store'
import { onDestroy } from 'svelte/internal'
import { createHashHistory } from 'history'

const history = createHashHistory()

export const currentRoute = writable(history.location.pathname)

export const home = () => {
  history.push('/all')
}

export const onRouteChange = () => {
  const unlisten = history.listen(({ location }) => {
    console.log(location)
    currentRoute.set(location.pathname)
  })

  onDestroy(() => {
    unlisten()
  })
}
