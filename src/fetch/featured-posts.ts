import { PostOrPage } from "@tryghost/content-api"
import { ghost } from "@utilities/ghost"

/**
 * fetch featured blog posts
 */
const fetchFeaturedPosts = async (limit = 4): Promise<PostOrPage[]> => {
  const posts: PostOrPage[] = []

  await Promise.allSettled([
    ghost.content.posts.browse({
      order: 'published_at desc',
      filter: 'featured:true',
      include: 'tags',
      limit,
    }).then(x => posts.push(...x))
  ])


  if (posts.length < limit) {
    await Promise.allSettled([
      ghost.content.posts.browse({
        order: 'published_at desc',
        filter: 'featured:false',
        include: 'tags',
        limit: limit - posts.length,
      }).then(x => posts.push(...x))
    ])
  }

  return posts
}

export default fetchFeaturedPosts