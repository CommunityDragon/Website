import Router from "next/router"
import NProgress from "nprogress"

let timer: NodeJS.Timeout
let state: string
const delay = 250

/**
 * load progress bar
 */
const load = () =>  {
  if (state === "loading") return
  state = "loading"
  timer = setTimeout(() => NProgress.start(), delay)
}

/**
 * stop progress bar
 */
const stop = () =>  {
  state = "stop"
  clearTimeout(timer)
  NProgress.done()
}

/**
 * connect to router
 */
window.addEventListener('popstate', load)
Router.events.on("routeChangeStart", load)
Router.events.on("beforeHistoryChange", load)
Router.events.on("routeChangeComplete", stop)
Router.events.on("routeChangeError", stop)

/**
 * an empty component
 */
const Container = () => <></>

export default Container