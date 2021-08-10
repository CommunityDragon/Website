import type { NextApiRequest, NextApiResponse } from 'next'
import fetchPostsByPage from '@fetch/posts-by-page'
import { apiResponse } from '@utilities/api'
import memoize from 'memoizee'

const cachedFetchPostsByPage = memoize(fetchPostsByPage, { async: true, maxAge: 1000  * 60 * 60 })

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await apiResponse(res, cachedFetchPostsByPage(+req.query.page))
}