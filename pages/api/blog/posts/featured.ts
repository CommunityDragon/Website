import type { NextApiRequest, NextApiResponse } from 'next'
import fetchFeaturedPosts from '@fetch/featured-posts'
import { apiResponse } from '@utilities/api'
import memoize from 'memoizee'

const cachedFetchFeaturedPosts = memoize(fetchFeaturedPosts, { async: true, maxAge: 1000  * 60 * 60 })

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await apiResponse(res, cachedFetchFeaturedPosts())
}