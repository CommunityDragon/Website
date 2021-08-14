import { PostOrPage } from "@tryghost/content-api";

export interface GhostWebhookPost {
  post: {
    current: PostOrPage
    previous: PostOrPage
  }
}