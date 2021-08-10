const path = require('path')

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "variables.scss";`
  },
  env: {
    UPTIME_KEY: process.env.UPTIME_KEY,
    GHOST_URL: process.env.GHOST_URL,
    GHOST_ADMIN_KEY: process.env.GHOST_ADMIN_KEY,
    GHOST_CONTENT_KEY: process.env.GHOST_CONTENT_KEY,
    CF_TOKEN: process.env.CF_TOKEN,
    CF_ZONE: process.env.CF_ZONE,
  },
}
