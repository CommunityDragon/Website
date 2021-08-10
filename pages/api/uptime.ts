import type { NextApiRequest, NextApiResponse } from 'next'
import fetchUptimeMonitors from '@fetch/uptime-monitors'
import { apiResponse } from '@utilities/api'
import memoize from "memoizee"

const cachedFetchUptimeMonitors = memoize(fetchUptimeMonitors, { async: true, maxAge: 1000  * 60 })

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await apiResponse(res, cachedFetchUptimeMonitors())
}