import { PostOrPage } from "@tryghost/content-api"
import { ghost } from "@utilities/ghost"

/**
 * fetch blog post by slug
 */
const fetchPostBySlug = (slug: string | string[]): Promise<PostOrPage> => (
  ghost.content.posts.read({ slug: Array.isArray(slug) ? slug.join('/') : slug }, { include: 'tags' })
)

export default fetchPostBySlug


