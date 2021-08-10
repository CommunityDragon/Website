import Router from "next/router"
import NProgress from "nprogress"

/**
 * connect to router
 */
Router.events.on("routeChangeStart", () => NProgress.start())
Router.events.on("routeChangeComplete", () => NProgress.done())
Router.events.on("routeChangeError", () => NProgress.done())

const oldonpopstate: any = window.onpopstate
window.onpopstate = (...args) => {
  if (oldonpopstate) oldonpopstate(...args)
  NProgress.start()
  setTimeout(() => NProgress.done(), 50)
}

/**
 * an empty component
 */
const Container = () => <></>

export default Container