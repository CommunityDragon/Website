import GhostContentAPI from '@tryghost/content-api'

import { Webhook } from 'discord-webhook-node'

/**
 * the discord webhook sdk
 */
export const discord = (() => {
  return {
    webhook: new Webhook(process.env.DISCORD_WEBHOOK_URL!),
  }
})()
