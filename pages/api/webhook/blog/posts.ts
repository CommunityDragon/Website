import { GhostWebhookPost } from '@typings/ghost-webhook-post'
import type { NextApiRequest, NextApiResponse } from 'next'
import { MessageBuilder } from 'discord-webhook-node'
import { HttpMethod } from '@typings/http-method'
import { discord } from '@utilities/discord'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== HttpMethod.POST) return res.status(400).end()
  if (req.query.key !== process.env.GHOST_WEBHOOK_KEY) return res.status(401).end()

  try {
    const { post: { current: post }}: GhostWebhookPost = req.body

    let desc = post.excerpt!.replace(/\r?\n|\r/g, ' ')
    if (desc.length > 100) {
      desc = desc.split(' ').reduce((acc, cur) => {
        if (acc.length >= 100) return acc
        acc += `${cur} `
        if (acc.length >= 100) acc = acc.slice(0, acc.length - 1) + '...'
        return acc
      }, '')
    }

    desc += `\n\n[Open the blogpost](https://www.communitydragon.org/blog/${post.slug})`

    const embed = new MessageBuilder()
      .setTitle(post.title!)
      .setDescription(desc)
      .setFooter(post.slug)
      .setTimestamp()

    if (post.feature_image) {
      embed.setImage(post.feature_image)
    }
    
    await discord.webhook.send(embed)
    res.status(200).end()
  } catch(e) {
    res.status(400).end()
  }
}
