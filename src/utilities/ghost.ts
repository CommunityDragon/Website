import GhostContentAPI from '@tryghost/content-api'

let GhostAdminAPI = undefined
if (!process.browser) {
  GhostAdminAPI = require('@tryghost/admin-api')
}

/**
 * the ghost cms sdk
 */
export const ghost = (() => {
  return {
    content: new GhostContentAPI({
      url: process.env.GHOST_URL as string,
      key: process.env.GHOST_CONTENT_KEY as string,
      version: 'v3',
    }),
    admin: process.browser ? undefined : new GhostAdminAPI({
      url: process.env.GHOST_URL as string,
      key: process.env.GHOST_ADMIN_KEY as string,
      version: 'v3',
    })
  }
})()
