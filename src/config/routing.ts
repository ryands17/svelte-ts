import { writable } from 'svelte/store'
import { onDestroy } from 'svelte/internal'

const hs = (<any>window).HistoryLibrary as any
const history = hs.createHashHistory()

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
