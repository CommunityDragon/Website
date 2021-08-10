import { PostOrPage, PostsOrPages } from "@tryghost/content-api"
import { ghost } from "@utilities/ghost"

/**
 * fetch preview post by ID
 */
const fetchPreviewByID = async (id: string): Promise<PostOrPage> => {
  // get all draft posts
  const drafts: PostsOrPages = await ghost.admin.posts.browse({
    limit: 'all',
    filter: 'status:draft',
    fields: 'uuid,id',
  })

  // find the draft post
  const draft = drafts.find(draft => draft.uuid === id);
  if (!draft) throw new Error('draft page not found')

  // read the post by post id
  return ghost.admin.posts.read({ id: draft.id }, { formats: 'html', include: 'tags' })
}

export default fetchPreviewByID


