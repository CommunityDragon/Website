import { PostOrPage } from "@tryghost/content-api"
import { ghost } from "@utilities/ghost"

/**
 * fetch blog posts by page
 */
const fetchPostsByPage = (page: number, limit = 24): Promise<PostOrPage[]> => (
  ghost.content.posts.browse({ limit, page, include: 'tags', order: 'published_at desc' })
)

export default fetchPostsByPage