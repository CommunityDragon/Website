const path = require('path')

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@use "variables" as *;`
  },
  env: {
    UPTIME_KEY: process.env.UPTIME_KEY,
    GHOST_URL: process.env.GHOST_URL,
    GHOST_ADMIN_KEY: process.env.GHOST_ADMIN_KEY,
    GHOST_CONTENT_KEY: process.env.GHOST_CONTENT_KEY,
    GHOST_WEBHOOK_KEY: process.env.GHOST_WEBHOOK_KEY,
    CF_TOKEN: process.env.CF_TOKEN,
    CF_ZONE: process.env.CF_ZONE,
    DISCORD_WEBHOOK_URL: process.env.DISCORD_WEBHOOK_URL,
  },
}
